# js-dev-tool

* kakaopage 찰리툴 로컬 개발용 툴

## command line use age

1. 터미널에 npm i -> 노드모듈 설치
2. 터미널에 npm run init -> project.json 생성 -> 옵션설정 (project.json 참조)
3. 터미널에 npm run create -> 폴도구조 생성  -> README.md 작성
4. 터미널에 npm start -> 로컬서버 시작  

## project.json
```
{
  "name": "create-test3",-- 프로젝트 폴더 명
  "config":{
    "templates": ["app","pc", "mo"],-- 탬플릿 종류 목록
    "dependencies":["common", "player", "render", "socialShare"]-- 기능 종류 목록
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
* 19.01.16 공통 함수/ format 설정, project.json 추가