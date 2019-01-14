const format = require('../../format.json');
const readme = format.readme;

function getUrl(urls){
  let string = '';
  urls.map((url)=>{
    string += `* [${url.name}](${url.url})
  `;
  });
  return string;
}

function getIssue(issues){
  let string = '';
  issues.map((issue)=>{
    string += ` * ${issue.name} : ${issue.desc}
  `;
  });
  return string;
}

function getReadmeTemplate(){
  const manager = readme.manager;
  const info = readme.info;
  const charlieTool = readme.charlieTool;
 
  return `
  # 업무개요
  
  ${readme.title}
  
  ## 담당자

  * 기획자 : ${manager.planners.join(", ")}
  * 작업자 : ${manager.developers.join(", ")}
  * 리뷰  : ${manager.reviewers.join(", ")}
  
  ## 프로모션 정보
  
  * 노출범위 : ${info.types.join(", ")}
  * 작업일  : ${info.workDate}
  * 오픈일  : ${info.openDate}
  ${getUrl(info.urls)}
  
  ## 찰리툴
  * 찰리툴 V3 TITLE       : ${charlieTool.title}
  * 찰리툴 V3 HASH ID     : ${charlieTool.hashId}
  * 찰리툴 V3 VERSION ID  : ${charlieTool.versionId}
  
  ## 이슈
  ${getIssue(readme.issues)}
  `;
}

module.exports = getReadmeTemplate();