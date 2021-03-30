#!/usr/bin/env node
import * as fse from 'fs-extra';
import * as path from 'path';

const componentName = process.argv[2];
const funcOrClassArg = process.argv[3];
const funcOrClass = funcOrClassArg === 'f' ? "Func" : "Class";

if ( !componentName )
{
    console.error( "No component name provided." );
    process.exit( -1 );
}

const componentsFolder = './src/components';
const newComponentPath = `${componentsFolder}/${componentName}.tsx`;
if ( fse.existsSync( newComponentPath ) )
{
    console.error( `There's already a file at ${newComponentPath}` );
    process.exit( -1 );
}

const templateFile = path.join( __dirname, `../resources/NewComponent${funcOrClass}.ts` );

// Replace the component name in template file
let templateFileContents = fse.readFileSync( templateFile ).toString();
const updatedContents = templateFileContents.replace( /NewComponent/g, componentName );


fse.mkdirSync( componentsFolder, { recursive: true } );
fse.writeFileSync( newComponentPath, updatedContents );

console.log( 'Done.' );