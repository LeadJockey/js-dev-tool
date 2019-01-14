const format = require('../../format.json');
const hasSNS = format.config.hasSNS || false; 

function getMobileReset(){
  return `
  <style>
  /* mobile reset */
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, textarea, p, blockquote, th, td, input, select, button{margin:0;padding:0}
  fieldset, img{border:0 none}
  dl, ul, ol, menu, li{list-style:none}
  blockquote, q{quotes:none}
  blockquote:before, blockquote:after, q:before, q:after{content:'';content:none}
  input, select, textarea, button{vertical-align:middle;font-size:100%}
  button{border:0 none;background-color:transparent;cursor:pointer}
  table{border-collapse:collapse;border-spacing:0}
  body{-webkit-text-size-adjust:none}
  input:checked[type='checkbox']{background-color:#666; -webkit-appearance:checkbox}
  input[type='text'], input[type='password'], input[type='submit'], input[type='search'], input[type='tel'], input[type='email'], html input[type='button'], input[type='reset']{-webkit-appearance:none;border-radius:0}
  input[type='search']::-webkit-search-cancel-button{-webkit-appearance:none}
  body{background:#fff}
  body, th, td, input, select, textarea, button{font-size:14px;line-height:1.5;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;color:#333}
  a{color:#333;text-decoration:none}
  a:active, a:hover{text-decoration:none}
  address, caption, cite, code, dfn, em, var{font-style:normal;font-weight:normal}
  button{display:block;width:100%;border:0 none}
  .ir_pm{display:block;overflow:hidden;font-size:1px;line-height:0;color:transparent}
  .screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
  </style>
  `;
}

function getPcReset(){
  return `
  <style>
  /* reset */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0}
  fieldset,img{border:0 none}
  dl,ul,ol,menu,li{list-style:none}
  blockquote, q{quotes: none}
  blockquote:before, blockquote:after,q:before, q:after{content:'';content:none}
  input,select,textarea,button{vertical-align:middle}
  input::-ms-clear{display:none}
  button{border:0 none;background-color:transparent;cursor:pointer}
  body{background:#fff}
  body,th,td,input,select,textarea,button{font-size:12px;line-height:1.5;font-family:'돋움',dotum,sans-serif;color:#333}
  a{color:#333;text-decoration:none}
  a:active, a:hover{text-decoration:underline}
  a:active{background-color:transparent}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
  html,body{height:100%}
  button{display:block;width:100%;border:0}
  .ir_pm{display:block;overflow:hidden;font-size:1px;line-height:0;color:transparent}
  .screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;color:transparent}
  </style>
`;
}

function getSNSMeta(){
  return `
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="카카오페이지" />
  <meta property="og:locale" content="ko_KR">
  <meta property="fb:app_id" content="574884132543436" />
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@kakaopage">
  <meta name="twitter:creator" content="@kakaopage">

  <!-- sns meta start -->
  <meta property="og:title" content="카카오페이지 공유하기 타이틀" />
  <meta property="og:description" content="카카오페이지 공유하기 설명" />
  <meta property="og:image" content="imgHashId">
  <meta property="og:url" content="https://page.kakao.com/store/event/v2/{uid}" />
  <meta name="twitter:title" content="카카오페이지 공유하기 타이틀">
  <meta name="twitter:description" content="카카오페이지 공유하기 설명" />
  <meta name="twitter:image" content="{imgHashId}">
  <meta name="twitter:url" content="https://page.kakao.com/store/event/v2/{uid}">
  <!-- sns meta end -->
  `;
}

/**
 * 탬플릿에 헤더를 삽입한다.
 * @param {*} opts 
 * meta.SNS : 공유하기 기능 추가시 사용,
 * reset.MO : 모바일 리셋 삽입
 * reset.PC : 피씨용 리셋 삽입
 */
function getHead(opts){
  return `
<head>
  <meta name="author" content="카카오페이지">
  <meta name="keywords" content="카카오페이지">
  <meta name="description" content="카카오페이지">
  ${opts.meta  === "SNS" ? getSNSMeta()     : ''}
  ${opts.reset === "MO"  ? getMobileReset() : ''}
  ${opts.reset === "PC"  ? getPcReset()     : ''}
</head>
  `;
}

module.exports = {
  mo:getHead({reset:'MO',meta :hasSNS ? 'SNS' : ''}),
  pc:getHead({reset:'PC',meta :hasSNS ? 'SNS' : ''})
};