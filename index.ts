
// read file from svg folder

import fs from 'fs';
import path from 'path';

const svgFolder = path.join('./svgFile');
const svgFiles = fs.readdirSync(svgFolder);

// read ./template.txt as template file
const templateFile = fs.readFileSync('./template.txt', 'utf-8');

// replace the template file from `{name}` to `name` in the template file

let result = ''
svgFiles.forEach((file: string) => {
    const rename = file.split('.')[0];
    const replacedTemplate = templateFile.replace('{name}', rename);
    result += replacedTemplate;
})

// write result to file
fs.writeFileSync('./result.ts', result);

