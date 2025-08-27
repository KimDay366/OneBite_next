import { useRouter } from "next/router";

// [id].tsx 
// = URL Parameter를 기준으로 해당하는 id 정보를 기반으로 렌더링 하여 쓰는 페이지
// 제품 상세 페이지 등에서 사용하는 페이지 구조

export default function Page(){

    const router = useRouter();

    const { id } = router.query;
    // search 페이지처럼 URL query값으로 저정되는데, 이때 키 값은 파일 명칭인 "id"를 사용
    
    return <h2> Book ID : {id}</h2>
}