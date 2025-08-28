// CSS Module 기능 사용하기
// import './styles/index.css';
import style from '../styles/index.module.css';
import Searchable from "@/components/searchable";

import {ReactNode} from 'react';

export default function Home (){
  return <div>
    <h1 style={{color : 'purple'}}>INDEX</h1>
    <h2 className={style.h2}>이 페이지는 인덱스 페이지 입니다 </h2>
    </div>
}

Home.getLayout = (page : ReactNode) => {
  return <Searchable>{page}</Searchable>;
  // Searchable이 감싸고는 있어 뭔가 바깥에 뭐가 생기는 느낌이지만,
  // 사실은 Searchable 컴포넌트가 사용된다 = 즉, [search bar가 적용된다]는 의미!
  // => 컴포넌트.getLayout = (page:...)=>{...} 의 기능이 바로 이러한 역할!
}