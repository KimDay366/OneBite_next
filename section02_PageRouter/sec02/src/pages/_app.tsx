import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";
import {ReactNode} from 'react';
import {NextPage} from 'next';

//.getLayout = 개발자가 임의로 만든 메서드이므로 js가 문제로 인식함
// 따라서 아래와 같이 .getLayout메서드를 [NextPage]에 정의 해 주어야 함
// NextPage = next.js에서 제공하는 페이지 프로퍼티
// & { getLayout? : ... } = 개발자가 만든 메서드를 정의 한 뒤 NextPage에 신규 타입으로 추가
type NextPageWithLayout = NextPage & {getLayout? : (page: ReactNode) => ReactNode; }

// 이후, component를 불러올 때 해당 타입을 사용하도록 "& {Component : NextPageWithLayout}" 추가 설정
// => App component가 props로 전달받은 Component의 타입이 ".getLayout"을 포함하고 있는 component이다 라고 정의!
export default function App({ Component, pageProps }: AppProps & {Component : NextPageWithLayout}) {

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  // component 페이지마다 설정 한 .getLayout을 불러오는 변수
  // 해당 메서드를 설정하지 않은 페이지에 접속하면 에러가 발생하기 때문에 조건문으로 처리

  return <>
  <GlobalLayout>
    {getLayout( <Component {...pageProps} /> )}
    {/* Searchable = book detail page 에서는 사용하지 않음, 
    index.tsx에서 getLayout 메서드로 설정 해 준뒤, 위와같이 설정하여 적용*/}
  </GlobalLayout>
    </>
}
