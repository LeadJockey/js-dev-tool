const JSTL_CONTENT_URL = '${content_url}';
const ROOT_PATH = '../view/';
const TARGET_PATH = ROOT_PATH + cmdArgs.path;

const cmdArgs = require('shell-arguments');
const fs = require('fs');
const path = require('path');
const config = require(TARGET_PATH);

const filePath = path.join(__dirname, TARGET_PATH)

function exchanger(config) {
  let filePath = path.join(__dirname, '..', cmdPath)
  let filedata = null;
  config.images.map((img) => {
    const kageUrl = JSTL_CONTENT_URL + img.kageUrl
    const changeImg = {
      'DEV': () => {
        try { 
          data = fs.readFileSync(filePath, 'utf8') 
        } catch (err) { console.log(err); }
      },
      'REAL': () => {
        filedata = fs.readFileSync(filePath, 'utf8').replace(img.localUrl, kageUrl)
      }
    }
    changeImg[config.env || 'DEV']();
  })

  return () => {
    try { fs.writeFileSync(filePath, filedata, 'utf8'); } catch (err) { console.log(err); }
  }
}

// exchanger(config)()



