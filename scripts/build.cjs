const fs=require('fs');
const path=require('path');
require('esbuild').buildSync({entryPoints:[path.resolve(__dirname,'../src/walk-app.js')],bundle:true,format:'iife',minify:true,outfile:path.resolve(__dirname,'../walk/app.js'),alias:{three:path.resolve(__dirname,'../vendor/three.module.js')},logLevel:'info'});

const model=fs.readFileSync(path.resolve(__dirname,'../models/worlds.glb'));
fs.writeFileSync(path.resolve(__dirname,'../walk/landmarks.js'),'window.LANDMARK_ASSET='+JSON.stringify(model.toString('base64'))+';');

fs.writeFileSync(path.resolve(__dirname,'../walk/activities.js'),'window.ACTIVITY_ASSET='+JSON.stringify(fs.readFileSync(path.resolve(__dirname,'../models/activities.glb')).toString('base64'))+';');
