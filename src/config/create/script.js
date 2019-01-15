const project = require('../../project.json');
const hasSNS = project.config.hasSNS || false; 
const hasVideo = project.config.hasVideo || false; 

function getScript(opts){
return `
${
  hasSNS 
  ? `<script src="\${contextPath}/resources/js/clipboard.min.js"></script>
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>` 
  : ''
}
${
  hasVideo 
  ? `<script src="https://tv.kakao.com/player/script/sdk/player_api.min.js"></script>` 
  : ''
}
<script>
$(document).ready(function(){
  //your code 
});
</script>
`;
}

module.exports = getScript();
