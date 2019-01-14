const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs');
const Freemarker = require('freemarker');
const viewRoot = path.join(__dirname, '..', 'view');
const fm = new Freemarker({root:viewRoot});

function getTemplateData(dirname){
  /**
   * is_alert : 얼럿이 있으면 띄움, 
   * eventTitle : 이벤트 명, 
   * mobileCheck : true (mobile) / false (not mobile)
   * os : I (iOS) / A (Android) / W (Web) / U (Unknown), 
   * is_need_update : 앱 업데이트가 필요한지 여부, 
   * event_id : 이벤트 hash id
   * agreed : 야간 수신 동의 여부, Y (동의) / N (미동의), 
   * appUserId : appUserId, 
   * webSourceCache : 리소스 버전
   * content_url : kage url prefix, static_image_server : 슬라이드 프로젝트 static image prefix, 
   * contextPath : 보통 jsp에서 사용하는 ${pageContext.request.contextPath} 대신 사용
   */
  return {
    is_alert: false,
    mobileCheck: false,
    is_need_update: false,
    agreed: false,
    eventTitle: '이벤트 명',
    event_id: '12839718371fes2134',
    appUserId: 'selifehahfa',
    webSourceCache: '12847129',
    os: 'I',
    content_url: '',//path.join(__dirname, '..', 'view', dirname, 'images/')
    contextPath: ''
  }
}

router.get('/', (req,res,next)=>{
  const workList = fs.readdirSync(viewRoot).filter(file => file !== 'workList.ftl');
  const data = {
    workList,
    host:`http://localhost:${process.env.PORT}`
  };
  fm.renderFile(path.join(viewRoot, 'workList.ftl'), data, (err, result, errout) =>{
    res.send(!!err ? errout + err : result);
  });
});

router.get('/:dir/:file', (req,res, next)=>{
  const dirname = req.params.dir;
  const filename = req.params.file;
  const targetPath = `${path.join(dirname, 'templates', filename)}.ftl`;
  console.log('dir', dirname);
  console.log('file', filename);
  console.log('target', targetPath);
  
  fm.renderFile(path.join(dirname, `${filename}.ftl`), getTemplateData(dirname), (err, result, errout) =>{
    res.send(!!err ? errout + err : result);
  });
});

module.exports = router;