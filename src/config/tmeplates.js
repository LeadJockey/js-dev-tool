exports.getDefaultLayoutTemplate = function () {
  return `
  <div id="kakaoPromotion">
    <div id="kakaoHead">
    
    </div>
    <div id="kakaoContent">
    
    </div>
  </div>
  `;
}

exports.getDefaultMetaTemplate = function (keywords, description) {
  return `
    <meta name="author" content="카카오페이지">
    <meta name="keywords" content="${keywords || '카카오페이지'}">
    <meta name="description" content="${description || '카카오페이지'}">
  `;
}

exports.getSocialShareMetaTempalte = function (title, description, imageUrl, shareUrl) {
  return `
    <meta property="og:title" content="${title || '카카오페이지 공유하기 타이틀'}" />
    <meta property="og:description" content="${description || '카카오페이지 공유하기 설명'}" />
    <meta property="og:image" content="${imageUrl || '{imgHashId}'}">
    <meta property="og:url" content="${shareUrl || 'https://page.kakao.com/store/event/v2/{uid}'}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="카카오페이지" />
    <meta property="og:locale" content="ko_KR">
    <meta property="fb:app_id" content="574884132543436" />
    <meta name="twitter:title" content="${title || '카카오페이지 공유하기 타이틀'}">
    <meta name="twitter:description" content="${description || '카카오페이지 공유하기 설명'}" />
    <meta name="twitter:image" content="${imageUrl || '{imgHashId}'}">
    <meta name="twitter:url" content="${shareUrl || 'https://page.kakao.com/store/event/v2/{uid}'}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@kakaopage">
    <meta name="twitter:creator" content="@kakaopage">
  `;
}

exports.getPCResetCssTemplate = function () {
  return `
    /* reset */
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,button{margin:0;padding:0}
    fieldset,img{border:0 none}
    dl,ul,ol,menu,li{list-style:none}
    blockquote, q{quotes: none}
    blockquote:before, blockquote:after,q:before, q:after{content:'';content:none}
    input,select,textarea,button{vertical-align:middle}
    input::-ms-clear{display:none}
    button{border:0 none;background-color:transparent;cursor:pointer}
    body{background:#000}
    body,th,td,input,select,textarea,button{font-size:12px;line-height:1.5;font-family:'돋움',dotum,sans-serif;color:#333}
    a{color:#333;text-decoration:none}
    a:active, a:hover{text-decoration:underline}
    a:active{background-color:transparent}
    address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal}
    html,body{height:100%}
    button{display:block;width:100%;border:0}
    .ir_pm{display:block;overflow:hidden;font-size:1px;line-height:0;color:transparent}
    .screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;color:transparent}
  `;
}

exports.getMobileResetCssTemplate = function () {
  return `
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
    body{background:#000}
    body, th, td, input, select, textarea, button{font-size:14px;line-height:1.5;font-family:'Malgun Gothic', '맑은 고딕', sans-serif;color:#333}
    a{color:#333;text-decoration:none}
    a:active, a:hover{text-decoration:none}
    address, caption, cite, code, dfn, em, var{font-style:normal;font-weight:normal}
    button{display:block;width:100%;border:0 none}
    .ir_pm{display:block;overflow:hidden;font-size:1px;line-height:0;color:transparent}
    .screen_out{overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
  `;
}

exports.getREADMETemplate = function () {
  return `
  # 스윙키즈 데뷔무대 라이브 (예시입니다. 수정후 배포해 주세요)
  업무개요 : 라이브 이벤트 페이지 제작
  
  ## 담당자
  * 기획자 : @ara.podo
  * 작업자 : @shawn.thecool
  * 리뷰 : @kerry.yoo
  
  ## 이벤트 정보
  * [업무요청 아지트](https://dkt.agit.in/g/300011802/wall/318302618)
  * [디자인 시안 - 첨부파일](https://dkt.agit.in/g/300011802/wall/318302618#comment_panel_318351568)
  * 노출범위 : app ex) app / mo / pc
  * 작업일 : 2019.01.02 (수) ~ 01.04 (금)
  * 오픈일 : 2018.01.05 (금)
  
  ## 찰리툴
  * 찰리툴 V3 TITLE : [임시] <커피프렌즈> 오픈채팅 라이브
  * 찰리툴 V3 HASH ID : 603802307f432d0ce5e352284a9b9263
  * 찰리툴 V3 VERSION ID : V3 2897
  
  ##테스트
  테스트 진행 및 확인 : @shawn.thecool,  @lukas.sin
  
  * 테스트 
  * 페이지 버튼 랜딩 확인 
  * 이미지 자동교체 테스트 
  
  ## 이미지 수정
  
  ## 오픈후 대응
  `;
}

exports.getDefaultCONFIGFormat = function () {
  return `
  
  `;
}