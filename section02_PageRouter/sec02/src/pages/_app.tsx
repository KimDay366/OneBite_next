import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  const clickLink = ()=>{
    router.push('/test');
      // <Link href={"/test"} onClick></Link>
      // replace, back 같은 메서드도 있음!
  }

  useEffect(()=>{
    router.prefetch('/test');
  },[]);
  // 최초 실행 시 1번만 실행 = 의존성 배열, Deps를 빈 칸으로

  return <>
    {/* <header>header section </header> */}
    <header>
      {/* <a>태그 : 기존의 서버 요청방식, 느리고 오래 걸리는 방식 */}
      {/* next.js에서 제공하는 "Link"라는 기능을 사용하여 적용 */}
      <Link href={"/"}>index</Link>&nbsp;&nbsp;&nbsp;
      <Link href={"/search"} prefetch={false}>search</Link>&nbsp;&nbsp;&nbsp;
      <Link href={"/book/1"}>book info</Link>
      <div>
        <button onClick={clickLink}>/test 이동</button>
      </div>
    </header>
  <Component {...pageProps} />
  </>
}
