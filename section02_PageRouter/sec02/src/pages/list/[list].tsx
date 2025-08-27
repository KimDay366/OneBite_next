import { useRouter } from "next/router";

// [[...list]].tsx 
// = 아이디 또는 고유 문자가 누락되더라도 기본 페이지만 나오게 하는 설정
// URL : http://localhost:3000/list/
// 이러한 경로를 "Optional Catch All Segment" 라고 부르기도 함

export default function Page(){

    const router = useRouter();
    console.log(router);

    const { item } = router.query;
    // item이 계층구조이기 때문에, query값을 확인하면 
    // item : (4) ['cloth', 'tshirt', 'half', '15']로 나옴
    
    return <h2> List ID : {item}</h2>
    // Item ID : clothtshirthalf15 출력
}