// CSS Module 기능 사용하기
// import './styles/index.css';
import style from '../styles/index.module.css';
import Searchable from "@/components/searchable";
import BookItem from "@/components/bookItem";
import books from "@/mock/books.json";

import {ReactNode, useEffect} from 'react';
import { InferGetServerSidePropsType } from 'next';

// SSR 방식으로 구동 되도록 설정하는 함수, next.js와 약속 된 함수
// 컴포넌트 보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수
export const getServerSideProps = () => {

  // 서버에서 실행되는 내용만 작성하기 때문에, 어떤 내용을 적어도 브라우저에서 보이지 않음
  // 터미널에서는 내용 확인 가능 => 터미널 = 서버 역할
  // console.log('hello,server!');

  const data = 'hello';

  // 해당 함수 내의 return값은 무조건 단 한개의 객체값이어야 함!!!!
  return {
    props: {
      data,
    },
  };
}

// {data} : any = 초기 데이터 셋팅 시 데이터 타입을 설정하기 어려운 경우, 일단 치트키인 "any"로 임시명명 하고 진행
// {data} : InferGetServerSidePropsType <typeof getServerSideProps> 
//          = 데이터 타입을 js가 추론해라, <typeof getServerSideProps>를 참고해서!
export default function Home ( {data} : InferGetServerSidePropsType<typeof getServerSideProps> ){

  // window.location; next는 서버에서 렌더링 하므로 해당 내용을 불러올 수 없음
  // 대신 사용하는 것이 useEffect!
  useEffect(()=>{
    console.log(window);
  },[]);


  return <div className={style.container}>
    <section>
      <h3>지금 추천하는 도서</h3>
      {books.map((book)=><BookItem key={book.id}{...book}/>)} 
    </section>
    <section>
      <h3>등록 된 모든 도서</h3>
      {books.map((book)=><BookItem key={book.id}{...book}/>)}
    </section>
    </div>;
}

Home.getLayout = (page : ReactNode) => {
  return <Searchable>{page}</Searchable>;
}