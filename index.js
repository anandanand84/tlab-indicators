var fs = require('fs');

var parse = require('./parser');
var save = require('./saveIndicators');
var fs = require( 'fs' );
var folder = './dist/';

fs.readdir(folder, function( err, files ) {
    files.forEach( function( file, index ) {
        console.log('Parsing file ',file);
        var {meta, code} = parse(folder + file);
        save(meta, code);
        console.log('completed file ',file);
    });
} );
