import { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router'; 
import style from "./searchable.module.css";

export default function Searchable({children}: {children:ReactNode}){

    const router = useRouter();
    const [search, setSearch] = useState(""); // 검색어를 저장할 State

    // 검색어가 input창 안에 있을 때 유지하는 기능
    const q = router.query.q as string;

    useEffect(()=>{
        setSearch(q || ""); // q = 'q=검색어' => 검색어가 있으면 검색어를 셋팅 해 두고, 없으면 빈 공란으로 둔다
    },[q]);

    // 검색이 이뤄지는 기본 기능
    const onChangeSearch = ( e : React.ChangeEvent<HTMLInputElement> ) => {
        setSearch(e.target.value);
    }; // input에 신규로 들어온 value값을 저장

    const onSubmit = () => {
        if(!search ) return;
        // if(!search || q === search) return; // 새로 입력 한 검색어가 기존과 같을 경우, 리렌더링 막는 기능
        router.push(`/search?q=${search}`);
    };//페이지를 이동 시키는 함수


    
    // 검색어 입력 후 enter 누르면 검색 됨
    const onKeyDown = ( e : React.KeyboardEvent<HTMLInputElement> ) => {
      if(e.key === 'Enter'){
        onSubmit();
      }  
    };


    return(
        <div>
            <div className={style.searchbar_con}>
                <input value={search} onKeyDown={onKeyDown} onChange={onChangeSearch} placeholder='검색어를 입력하세요 :)'/>
                <button onClick={onSubmit} >SEARCH</button>
            </div>
            {children}
        </div>
    );
}