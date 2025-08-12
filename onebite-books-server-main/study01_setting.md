# 백엔드 서버 셋팅 (실습용)
[date] 2025.08.12

## 서버 연동하기 
- supabase.com 에서 무료로 사용하기 <br>
(서버에 1주일 이상 접속하지 않으면 사용 중지됨, restore 버튼 누르면 복구 되며 소요시간은 최대 1시간까지도 걸릴 수 있음)
- 회원가입 후 본인의 프로젝트를 만드는데, 만들때 사용 했던 패스워드는 데이터 서버의 패스워드이므로 관리에 각별한 주의가 필요함
- .env 파일을 만들어서 'Connect to your Project > ORMs'의 Prisma 코드를 불러옴, 이때 코드 내부에 [YOUR-PASSWORD]가 있는데 해당 부분을 데이터 서버의 패스워드로 수정

## 기본 셋팅 하기
1. 터미널을 연 후 npm i 로 패키지 다운로드
2. Supabase 서버 초기화 : npx prisma db push <br>
   (Supabase 홈페이지 > Table Editor > Book, Review 생성 됨)
3. Supabase 서버에 기본 데이터 넣기 : npm run seed (강사님이 제작 한 임시 데이터를 삽입)
4. 서버 빌드하기 : npm run build
5. 서버 시작하기 : npm run start -> [http://localhost:12345/api] 로 접속 가능
6. 서버 중지 : ctrl + C 
- npx prisma studio : 현재 서버가 사용중인 데이터를 조회할 수 있는 페이지로 이동, 현재까지 저장 된 데이터를 확인하거나 제대로 저장 됬는지 볼때 유용[http://localhost:5555]