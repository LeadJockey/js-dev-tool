const cmdArgs = require('shell-arguments');
const fs = require('fs');
const path = require('path');
const dir = cmdArgs.dir || 'temp';
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


// const cmdArgs = require('shell-arguments');
// const pipeline = require('node-pipeline');
// const fs = require('fs');
// const path = require('path');
// const config = require('../view/' + cmdArgs.path);
// const filePath = path.join(__dirname, '../view/index.html');

// function _replaceAll(str, asis, tobe) {
//   // asis.replace('$', '\$').replace('{', '\{').replace('}','\}')
//   const regex = new RegExp(asis, 'g');
//   // console.log('regex', regex);
//   // console.log('match', str.match(regex));
  
//   return str.replace(regex, tobe);
// }

// function getFile(filePath, next) {
//   try {
//     next(fs.readFileSync(filePath, 'utf8'));
//   } catch (err) { console.log(err); }
// }

// function setFileData(filePath, data) {
//   try {
//     fs.writeFileSync(filePath, data, 'utf8');
//   } catch (err) { console.log(err); }
// }

// // pipeline
// getFile(filePath, (data) => {
//   const pl = pipeline.create('html');

//   pl.on('end', function (err, results) {
//     if (err) { console.log('Error in pipeline: ' + err); }

//     const convertedData = results.filter(process => process.replacedImage);
//     if (convertedData.length > 0) { setFileData(filePath, convertedData[0].replacedImage); }
//     process.exit();
//   });

//   // add process
//   pl.use((results, next) => {
//     let html = results[0].html
    
//     config.images.map((img) => {
//       // if(cmdArgs.env === 'DEV'){
//       //   html = _replaceAll(html, img.kageUrl, img.localUrl);
//       // }

//       // if(cmdArgs.env === 'PUB'){
//         html = _replaceAll(html, img.localUrl, img.kageUrl);

//       // }
//     });
//     // console.log('html', html);

    
//     next(null, { replacedImage: html });
//   });

//   pl.execute({ html: data });

// });
