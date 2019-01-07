const cmdArgs = require('shell-arguments');
const fs = require('fs');
const path = require('path');
const dir = cmdArgs.dirname || 'temp';
const env = cmdArgs.env || 'dev';
const rootPath = path.join(__dirname, '..', 'view');

function replaceAll(str, asis, tobe) {
  const regex = new RegExp(asis, 'g');
  return str.replace(regex, tobe);
}

function getReplacedImageFileData(fileData, configImages){
  let result = fileData;
  configImages.forEach((image)=>{
    if (env === 'dev') {
      result = replaceAll(fileData, image.kageUrl, image.localUrl);
    }
    if (env === 'dep') {
      result = replaceAll(fileData, image.localUrl, image.kageUrl);
    }
  });
  return result;
}

async function init() {
  const dirPath = path.join(rootPath, dir);
  const configPath = path.join(dirPath, 'config.json');
  const pcPath = path.join(dirPath, 'templates', 'pc.ftl');
  const moPath = path.join(dirPath, 'templates', 'mo.ftl');
  const appPath = path.join(dirPath, 'templates', 'app.ftl');

  if (!fs.existsSync(dirPath)) return;
  if (!fs.existsSync(configPath)) return;
  if (!fs.existsSync(pcPath)) return;
  if (!fs.existsSync(moPath)) return;
  if (!fs.existsSync(appPath)) return;

  const fileDataPC = fs.readFileSync(pcPath, 'utf-8');
  const fileDataMO = fs.readFileSync(moPath, 'utf-8');
  const fileDataAPP = fs.readFileSync(appPath, 'utf-8');
  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const configImages = config.images || [];

  await fs.writeFileSync(pcPath, getReplacedImageFileData(fileDataPC, configImages));
  await fs.writeFileSync(moPath, getReplacedImageFileData(fileDataMO, configImages));
  await fs.writeFileSync(appPath, getReplacedImageFileData(fileDataAPP, configImages));
  
}

init();
