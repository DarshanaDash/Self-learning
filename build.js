// build.js
const fs = require('fs');

const template = fs.readFileSync('index.html.template', 'utf8');
const replaced = template.replace(/%MY_API_KEY%/g, process.env.MY_API_KEY);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', replaced);
