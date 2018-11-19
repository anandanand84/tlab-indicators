var babel = require("@babel/core");
var babelParser = require("@babel/parser");
var fs = require('fs');

module.exports = function parseFile(path) {
    var originalCode = fs.readFileSync(path).toString();
    var ast = babelParser.parse(originalCode, { sourceType: "module" });
    var metaInfo = {};
    var exportnode = {};
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
    
    return {
        code, meta
    }
}
