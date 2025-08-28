import { useRouter } from "next/router";
// 사용자가 검색 작업을 하는 경우,  
// queryString 내용을 개발자가 사용 할 수 있게 반환하는 Next.js Hook

import { ReactNode } from 'react';

import Searchable from "@/components/searchable";

// search 페이지 만들 때 페이지 자체만 만들어 사용하기
export default function Page(){

    const router = useRouter();
    // 대부분의 라우터 정보가 저장되어 있음
    console.log(router);

    const { q } = router.query;
    
    // const q = router.query.q; 이와 같이 직접 꺼네오거나
    // 위와 같이 구조분해할당을 사용해 값을 가져올 수 있음

    // url에서 사용자가 검색한 내용의 실제 값을 저장 
    // http://localhost:3000/search?q=content -> "content"가 저장 됨

    return <h2>Search 검색어 : {q}</h2>
}

Page.getLayout = (page : ReactNode) => {
    return <Searchable>{page}</Searchable>
}