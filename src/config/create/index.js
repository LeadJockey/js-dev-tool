const fs = require('fs');
const path = require('path');
const project = require('../../project.json');
const rootPath = path.join(__dirname, '..', '..', 'view');
const readmeTmpl = require('./readme');
const headTmpl = require('./head');
const bodyTmpl = require('./body');
const scriptTmpl = require('./script');
const fileName = project.name || "temp"
const dirname = `${getNow()}_${fileName}`;

function getNow(){
  const d = new Date();
  return `${d.getFullYear()}${d.getMonth()+1}${d.getDate()}`;
}

function createDir(rootPath, dirname) {
  const dirPath = path.join(rootPath, dirname);
  if (fs.existsSync(dirPath)) return;
  fs.mkdirSync(dirPath);
}

function createFile(dirPath, filename, content) {
  const filePath = path.join(dirPath, filename);
  const fileContent = content || '';
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, fileContent);
}

function mergeTmpl(){
  const args = Array.prototype.slice.call(arguments);
  return args.join(`
  `);
}

async function init() {
  if(dirname === '') return;
  if (!dirname) return;

  const dirPath = path.join(rootPath, dirname);
  await createDir(rootPath, dirname);
  await createDir(dirPath, 'image');

  const templates = project.config.templates;
  if(templates.indexOf('app') > -1) await createFile(dirPath, 'app.ftl', mergeTmpl(headTmpl.mo, bodyTmpl, scriptTmpl));
  if(templates.indexOf('mo') > -1) await createFile(dirPath, 'mo.ftl',  mergeTmpl(headTmpl.mo, bodyTmpl, scriptTmpl));
  if(templates.indexOf('pc') > -1) await createFile(dirPath, 'pc.ftl',  mergeTmpl(headTmpl.pc, bodyTmpl, scriptTmpl));

  await createFile(dirPath, 'README.md', readmeTmpl);
  await createFile(dirPath, '_config.json', JSON.stringify(project, null, 2));
}

init();




