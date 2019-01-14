function getHTML(){
  return `
<div id="kakaoPromotion">
  <div id="kakaoHead">
    \${content_url}
    \${contextPath}
  </div>
  <div id="kakaoContent">
    <img src="\${content_url}bpXzkp/hyqFdx6IeV/hUTmKf521Wb3gXrqQrbCA1" class="prm_img" alt="">
  </div>
</div>
  `;
}

module.exports = getHTML();