# Page Router 
[date] 2025.08.12

-------------

## Page Router란?
- 현재 많은 기업에서 사용하고 있는 안정적인 라우터
- React Router 처럼 특정 조건에 따라 페이지 이동 경로를 설정하고, 페이지를 관리하는 기능
- "Pages" 내 파일 & 폴더 를 기반으로 페이지를 라우팅 함 <br>
  [예시] index.js => ~/ , about 폴더 내 info.js => ~/about/info 등 
- 동적 경로(Dynamic Routes) 구현이 쉬움
  [예시] Pages > item > [id].js => id에 해당 아이템의 id가 맵핑되어 사용 됨

-------------

## Page Router 버전의 Next App 생성하기
1. 빈 폴더 생성 후 터미널 열기 (ctrl + J)
2. npx create-next-app@14 [원하는 폴더명]<br>
(npx : node package executor = 최신 버전을 다이렉트로 다운로드,
next-app@14 : 안정적인 next.js 14 버전으로 다운로드)
3. 사용자 설정(자유이지만 여기에선 강의 설정에 맞춤) <br>
typeScript Y, EsLint Y, Tailwind Css N, <br>
'src/' Directory Y, App Router N(origin Y), <br>
import Alias (절대 경로) customize N, 
4. 새로 생성한 폴더의 터미널로 이동 : npm run dev 
신규 로컬 호스트가 생성 됨

-------------

## Next.js 살펴보기
- package.json : 기존의 react 처럼 구동에 필요한 패키지 목록이 나와있음.
- next.config.mjs : next app의 설정 관리
- [폴더] public : 정적인 파일 보관
- [폴더] src : 페이지 및 컴포넌트 들의 js가 보관, index.tsx 가 메인 파일
- 폴더 내 _document.tsx : 모든 페이지에 공통으로 사용되는 내용을 작성하는 곳. 기존의 index.js의 역할을 해 줌. <meta> 태그, 폰트 <url> 태그 같은 것을 저장
- 폴더 내 _app.tsx : 리액트의 App.jsx 처럼 **Root Component** 역할을 함, Page component 와 그 페이지에서 사용 할 Props 를 전달 받아서 return함. 리액트처럼 해당 페이지에서 태그를 작성하면 글로벌로 표현 됨
- [폴더] style : css 파일 보관
