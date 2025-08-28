// import { useRouter } from "next/router";
import { ReactNode } from 'react';

import Searchable from "@/components/searchable";
import books from "@/mock/books.json";
import BookItem from "@/components/bookItem";

export default function Page(){

    return (<div>
      {books.map((book)=><BookItem key={book.id}{...book}/>)}
    </div>)
}

Page.getLayout = (page : ReactNode) => {
    return <Searchable>{page}</Searchable>
}