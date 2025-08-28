# React.js + Next.js 페이지 구현하기
[date] 2025.08.27-28

-------------

## 스타일 설정하기
- 인라인 스타일 : <h1 style={{ color : value }}>INDEX</h1>
- 파일 불러오기 1 _app.tsx : 상단에 import './styles/파일명.css'; 으로 사용 가능 
- 파일 불러오기 2 다른 페이지 파일들 : CSS Module 기능을 사용하여 불러오기<br>
    1) 스타일 시트 파일명 중간에 .module을 작성 해 줌
    2) 불러올 때  import style from './styles/파일명.module.css'; 으로 불러오기
    3) 해당하는 태그에 클래스로 적용하기 <h2 className={style.h2}>내용</h2> (일반 태그명으로는 사용되지 않음)

-------------

## import @ 경로 설정하기
- 일반 파일 불러올 때 사용하는 "@"기호는 공용으로 사용할 경로를 의미함
- tsconfig.json 파일 내 내용에 보면 "paths": { "@/*": ["./src/*"] }로 설정 되어 있음
- 경로 변경이 필요할 경우, 수정 가능
- 작업 파일에서 사용 시 [ import BookItem from "@/components/bookItem"; ] 이런 식으로 경로를 줄여서 사용 가능함

-------------

## 데이터 타입 정의 
- 컴포넌트, 함수 등에서 사용하는 모든 값은 *데이터타입*을 정의 해야함
- 특히 여러 페이지에서 사용하는 json 데이터의 경우 별도의 타입 파일을 만들어 관리하면 편함(types.ts)
- 컴포넌트나 함수의 경우, 선언 할 때 데이터 타입을 명시 해 주어야 함<br>
[예시] Home.getLayout = (page : ReactNode) => {...}