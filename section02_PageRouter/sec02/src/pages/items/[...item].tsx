import { useRouter } from "next/router";

// [...item].tsx 
// = 아이디가 계층 구조로 이루어진 경우 파일 명 앞에 ... 사용
// URL : http://localhost:3000/items/cloth/tshirt/half/15
// 이러한 경로를 "Catch All Segment" 라고 부르기도 함

export default function Page(){

    const router = useRouter();
    console.log(router);

    const { item } = router.query;
    // item이 계층구조이기 때문에, query값을 확인하면 
    // item : (4) ['cloth', 'tshirt', 'half', '15']로 나옴
    
    return <h2> Item ID : {item}</h2>
    // Item ID : clothtshirthalf15 출력
}