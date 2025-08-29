# Page Router SSR / SSG
[date] 2025.08.29

-------------

## React Rendering (복습)
1. 필요한 페이지를 컴포넌트 단위로 쪼개서 생성
2. 불러온 데이터를 보관 할 State 생성
3. 데이터 페칭 함수 생성 (fetch, async ~ await)하여 setState 진행
4. 컴포넌트 마운트 시점에 fetchData 호출 
5. 데이터 로딩중일 떄의 예외 처리 <br>
=> 초기 접속 요청부터 데이터 로딩까지 오랜 시간이 걸림 = FCP가 늦어짐<br> 
(데이터 요청 자체가 4번 시점에 시작되므로 늦게 데이터가 가져오게 되므로 늦어지는것)

## Next.js 데이터 페칭 
##### 사전 렌더링(복습)
1. 사용자가 브라우저(=클라이언트)에 접속 요청
2. 서버는 JS를 실행한 뒤 렌더링 작업 진행
3. 서버가 완성한 HTML 렌더링을 브라우저(=클라이언트)에 전달하여 사용자가 바로 확인 => FCP가 빠름<br>
=> 서버가 2번 렌더링 작업을 하면서, 백엔드 서버에 데이터를 가져오라고 업무분담 시킴.<br>
따라서 서버는 렌더링만 작업하고, 데이터는 받아서 적용만 시키면 됨!

##### 빌드 타임 (Build Time)
- Next로 작업 할 떄, 데이터 용량이 많거나 백엔드 서버의 성능이 좋지 않아 서버의 렌더링이 지연될 경우, 접속 요청 이 전에 백엔드 서버를 먼저 실행시켜서 시간을 단축시키는 방식. 


-----------------------------

## Next.js의 사전 렌더링 방식

#### SSR (서버 사이드 렌더링)
- 가장 기본적인 사전 렌더링 방식
- 요청이 들어올 때 마다 사전 렌더링을 진행함

#### SSG (정적 사이드 렌더링)
- 방금 살펴본 사전 렌더링 방식
- 빌드 타임에 미리 페이지를 사전에 렌더링 해 둠

#### ISR (증분 정적 재생성)
- 향후에 다룰 사전 렌더링 방식


-------------------------------

## 1. SSR 방식
```javascript
// SSR 방식으로 구동 되도록 설정하는 함수, next.js와 약속 된 함수
// 컴포넌트 보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수
export const getServerSideProps = () => {

  const data = 'hello';

  // 서버에서 실행되는 내용만 작성하기 때문에, 어떤 내용을 적어도 브라우저에서 보이지 않음
  console.log('hello,server!');

  // 브라우저 환경에서 실행되는 window.~ 같은 내용은 오류가 발생할 수 있음
  window.location; // 오류로 인식

  // 해당 함수 내의 return값은 무조건 단 한개의 객체값이어야 함
  // props로 저장하여 컴포넌트들에서 사용 할 수 있도록 셋팅됨
  return {
    props: {
      data,
    },
  };
}

// {data} : any = 초기 데이터 셋팅 시 데이터 타입을 설정하기 어려운 경우, 일단 치트키인 "any"로 임시명명 하고 진행
// {data} : InferGetServerSidePropsType <typeof getServerSideProps> 
//          = 데이터 타입을 js가 추론해라, <typeof getServerSideProps>를 참고해서!
export default function Home ( {data} : InferGetServerSidePropsType<typeof getServerSideProps> ){...}
```


