// CSS Module 기능 사용하기
// import './styles/index.css';
import style from '../styles/index.module.css';
import Searchable from "@/components/searchable";
import BookItem from "@/components/bookItem";
import books from "@/mock/books.json";

import {ReactNode} from 'react';

export default function Home (){
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