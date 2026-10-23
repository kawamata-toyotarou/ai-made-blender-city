const path=require('path');
require('esbuild').buildSync({entryPoints:[path.resolve(__dirname,'../src/walk-app.js')],bundle:true,format:'iife',minify:true,outfile:path.resolve(__dirname,'../walk/app.js'),alias:{three:path.resolve(__dirname,'../vendor/three.module.js')},logLevel:'info'});
