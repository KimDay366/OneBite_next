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

