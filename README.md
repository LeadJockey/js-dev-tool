# js-dev-tool

* kakaopage 찰리툴 로컬 개발용 툴

## command line use age

1. README.md 내 poject.json 폴터 생성 후 양식에 맞게 기제  
2. 터미널에 npm run create -> 폴도구조 생성  
3. 터미널에 npm start -> 로컬서버 시작  

## project.json
```
{
  "name": "swingkids-test-5",         -- 프로젝트 폴더 명
  "config":{
    "templates": ["app","mo","pc"],   -- 탬플릿 종류 목록
    "hasSNS":true,                    -- SNS 기능
    "hasVideo":true                   -- Player 기능
  },
  "imgaes": [
    {
      "title": "test1.png",           -- 로컬 이미지 명
      "hashId": "EFSE/REFSJ/324EFSE"  -- 찰리 툴 내부 케이지 헤쉬 아이디
    } 
  ]
}
```

## version

* 19.01.15 초기 탬플릿 셋팅 및 로컬 서버 구현