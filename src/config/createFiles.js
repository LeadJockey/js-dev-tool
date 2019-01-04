const cmdArgs = require('shell-arguments');
const tmplate = require('./tmeplates');
const fs = require('fs');
const path = require('path');
const dirname = cmdArgs.dir || 'temp';
const rootPath = path.join(__dirname, '..', 'view');

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

function getTemplate(opts) {
  return `
  <head>
    ${opts.meta || ''}
    ${opts.socialShareMeta || ''}

    <style>
      ${opts.reset || ''}
    </style>

  </head>

  ${opts.layout || ''}

  `;
}

async function init() {
  if (!dirname) return;
  const dirPath = path.join(rootPath, dirname);
  const templatePath = path.join(dirPath, 'templates');
  await createDir(rootPath, dirname);
  await createDir(dirPath, 'images');
  await createDir(dirPath, 'templates');
  await createFile(dirPath, 'README.md', tmplate.getREADMETemplate());
  await createFile(dirPath, 'config.json', tmplate.getDefaultCONFIGFormat());
  await createFile(templatePath, 'pc.ftl', getTemplate({
    meta: tmplate.getDefaultMetaTemplate(),
    reset: tmplate.getPCResetCssTemplate(),
    layout: tmplate.getDefaultLayoutTemplate()
  }));
  await createFile(templatePath, 'mo.ftl', getTemplate({
    meta: tmplate.getDefaultMetaTemplate(),
    reset: tmplate.getMobileResetCssTemplate(),
    layout: tmplate.getDefaultLayoutTemplate()
  }));
  await createFile(templatePath, 'app.ftl', getTemplate({
    meta: tmplate.getDefaultMetaTemplate(),
    reset: tmplate.getMobileResetCssTemplate(),
    layout: tmplate.getDefaultLayoutTemplate()
  }));

}

init();
