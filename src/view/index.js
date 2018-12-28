const fs = require('fs');
const path = require('path');
const setting = require('./index.json');
console.log(setting);



const targetFilePaht = path.join(__dirname, 'index.html')


// 파일 읽기
try {
  // 존재하지 않는 파일을 읽으려 합니다.
  var data = fs.readFileSync(targetFilePaht, 'utf8');
  console.log(data);
}
catch(err) {
  console.log(err);
}


// 파일 쓰기
try {
  // 루트 위치에 파일을 c쓰려고 합니다.(권한 거부)
  
  var data = fs.readFileSync(targetFilePaht, 'utf8');

  setting.images.map((e)=>{
    data.replace(e._id, e.hashId)
  })
  
  fs.writeFileSync(targetFilePaht, data, 'utf8');
  console.log('파일 쓰기 성공');
}
catch(err) {
  console.log(err);
}