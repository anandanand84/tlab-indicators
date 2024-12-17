var fs = require('fs');
var parse = require('./parser');
var folder = './dist/';

let indicators = [];
let indicatormap = {};
try {
    const files = fs.readdirSync(folder);
    files.forEach(function(file, index) {
        var {meta, code} = parse(folder + file);
        let indicator = {meta, code};
        indicators.push(indicator);
        
        // Extract shortname from indicator name (e.g., "Exponential Moving Average (EMA)" -> "EMA")
        let shortname = '';
        const matches = meta.name.match(/\(([^)]+)\)/);
        if (matches && matches[1]) {
            shortname = matches[1];
            indicatormap[shortname] = indicator;
            console.log("Added indicator:", meta.name, "with shortname:", shortname);
        } else {
            console.warn("Warning: No shortname found for indicator:", meta.name);
        }
    });
    
    // Write both the list and map to files
    fs.writeFileSync('indicatorslist.json', JSON.stringify(indicators, null, 2));
    fs.writeFileSync('indicatorsmap.json', JSON.stringify(indicatormap, null, 2));
    console.log("Files were saved!");
} catch (err) {
    console.error("Error:", err);
}
