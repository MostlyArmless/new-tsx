#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fse = require("fs-extra");
const path = require("path");
const componentName = process.argv[2];
if (!componentName) {
    console.error("No component name provided.");
    process.exit(-1);
}
const componentsFolder = './src/components';
const newComponentPath = `${componentsFolder}/${componentName}.tsx`;
if (fse.existsSync(newComponentPath)) {
    console.error(`There's already a file at ${newComponentPath}`);
    process.exit(-1);
}
// let packageDir = path.join( process.cwd(), componentName );
const templateFile = path.join(__dirname, '../resources/NewComponent.txt');
// Replace the component name in template file
let templateFileContents = fse.readFileSync(templateFile).toString();
const updatedContents = templateFileContents.replace(/NewComponent/g, componentName);
fse.mkdirSync(componentsFolder, { recursive: true });
fse.writeFileSync(newComponentPath, updatedContents);
console.log('Done.');
