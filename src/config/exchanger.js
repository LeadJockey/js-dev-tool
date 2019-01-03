const cmdArgs = require('shell-arguments');
const pipeline = require('node-pipeline');
const fs = require('fs');
const path = require('path');
const config = require('../view/' + cmdArgs.path);
const filePath = path.join(__dirname, '../view/index.html');

function _replaceAll(str, asis, tobe) {
  // asis.replace('$', '\$').replace('{', '\{').replace('}','\}')
  const regex = new RegExp(asis, 'g');
  // console.log('regex', regex);
  // console.log('match', str.match(regex));
  
  return str.replace(regex, tobe);
}

function getFile(filePath, next) {
  try {
    next(fs.readFileSync(filePath, 'utf8'));
  } catch (err) { console.log(err); }
}

function setFileData(filePath, data) {
  try {
    fs.writeFileSync(filePath, data, 'utf8');
  } catch (err) { console.log(err); }
}

// pipeline
getFile(filePath, (data) => {
  const pl = pipeline.create('html');

  pl.on('end', function (err, results) {
    if (err) { console.log('Error in pipeline: ' + err); }

    const convertedData = results.filter(process => process.replacedImage);
    if (convertedData.length > 0) { setFileData(filePath, convertedData[0].replacedImage); }
    process.exit();
  });

  // add process
  pl.use((results, next) => {
    let html = results[0].html
    
    config.images.map((img) => {
      // if(cmdArgs.env === 'DEV'){
      //   html = _replaceAll(html, img.kageUrl, img.localUrl);
      // }

      // if(cmdArgs.env === 'PUB'){
        html = _replaceAll(html, img.localUrl, img.kageUrl);

      // }
    });
    // console.log('html', html);

    
    next(null, { replacedImage: html });
  });

  pl.execute({ html: data });

});







