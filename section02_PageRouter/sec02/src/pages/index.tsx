// CSS Module 기능 사용하기
// import './styles/index.css';
import style from '../styles/index.module.css';

export default function Home (){
  return <div>
    <h1 style={{color : 'purple'}}>INDEX</h1>
    <h2 className={style.h2}>이 페이지는 인덱스 페이지 입니다 </h2>
    </div>
}