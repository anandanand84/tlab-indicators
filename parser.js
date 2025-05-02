var babel = require("@babel/core");
var babelParser = require("@babel/parser");
var traverse = require("@babel/traverse").default;
var fs = require('fs');

module.exports = function parseFile(path) {
    var originalCode = fs.readFileSync(path).toString();
    var ast = babelParser.parse(originalCode, { sourceType: "module" });
    var metaInfo = {};
    var exportnode = {};
    
    // Extract input parameters from code
    const inputParams = extractInputParams(originalCode);
    
    ast.program.body = ast.program.body.filter((node)=>{
        if(node.type === 'VariableDeclaration') {
            var isMetaNode = !node.declarations.reduce((previous, declaration) => {
                if(declaration.id.name === 'meta') {
                    metaInfo = node;
                    return false;
                };
                return previous;
            }, true)
        }
        var isExportNode = node.type == 'ExportNamedDeclaration'
        if(isExportNode) exportnode = node;
        return !isMetaNode && !isExportNode;
    });
    
    const { code }  = babel.transformFromAstSync(ast,'', { } )
    
    if(!metaInfo || !exportnode) {
        throw('Meta information or export information not found');
    }
    ast.program.body = [metaInfo, exportnode]
    
    var info  = babel.transformFromAstSync(ast,'', { } )
    
    var commonjsInfo = babel.transform(info.code, {
        plugins: ["transform-es2015-modules-commonjs"]
    });
    
    var Module = require('module');
    var parent = module.parent;
    var m = new Module(path, parent);
    m.filename = path;
    m.paths = [];
    m._compile(commonjsInfo.code, path);
    
    var meta = m.exports.meta;

    if(!meta.name) { console.log(meta);throw('Name missing in indicator meta ')}
    
    // Add the extracted parameters to meta
    meta.params = inputParams;
    
    return {
        code, meta
    }
}

/**
 * Extract input parameters from source code using regex
 * @param {string} sourceCode - The source code as a string
 * @returns {Array} Array of parameter objects
 */
function extractInputParams(sourceCode) {
    const params = [];
    
    // Define regex patterns for each input type
    const patterns = [
        {
            // inputSource('Name', 'defaultValue')
            regex: /inputSource\(\s*['"](.*?)['"]\s*,\s*['"](.*?)['"]\s*\)/g,
            type: 'enum',
            values: ['open', 'high', 'low', 'close']
        },
        {
            // inputNumber('Name', defaultValue)
            regex: /inputNumber\(\s*['"](.*?)['"]\s*,\s*(\d+(?:\.\d+)?)\s*\)/g,
            type: 'number'
        },
        {
            // inputBoolean('Name', true/false)
            regex: /inputBoolean\(\s*['"](.*?)['"]\s*,\s*(true|false)\s*\)/g,
            type: 'boolean'
        },
        {
            // inputColor('Name', 'defaultValue')
            regex: /inputColor\(\s*['"](.*?)['"](?:\s*,\s*['"](.*?)['"]+)?\s*\)/g,
            type: 'color'
        },
        {
            // inputOpacity('Name', defaultValue)
            regex: /inputOpacity\(\s*['"](.*?)['"]\s*,\s*(\d+(?:\.\d+)?)\s*\)/g,
            type: 'opacity'
        },
        {
            // inputLineWidth('Name', defaultValue)
            regex: /inputLineWidth\(\s*['"](.*?)['"]\s*,\s*(\d+(?:\.\d+)?)\s*\)/g,
            type: 'number'
        }
    ];
    
    // Apply each pattern to the source code
    patterns.forEach(pattern => {
        let match;
        while ((match = pattern.regex.exec(sourceCode)) !== null) {
            const name = match[1];
            let defaultVal = match[2];
            
            // Convert the default value to the appropriate type
            if (pattern.type === 'number' || pattern.type === 'opacity') {
                defaultVal = parseFloat(defaultVal);
            } else if (pattern.type === 'boolean') {
                defaultVal = defaultVal === 'true';
            }
            
            // Create the parameter object
            const param = {
                name,
                type: pattern.type,
                default: defaultVal
            };
            
            // Add values array for enum types
            if (pattern.values) {
                param.values = pattern.values;
            }
            
            // Only add if we haven't seen this parameter name before
            if (!params.some(p => p.name === name)) {
                params.push(param);
            }
        }
    });
    
    return params;
}
