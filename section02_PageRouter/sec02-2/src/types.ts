// 도서 데이터 타입을 정의하여, 여러곳에서 사용하기 용이하도록 함

// interface : 객체 타입을 정의한다!
export interface BookData{
    id : number; 
    title : string; 
    subTitle : string;
    description : string;
    author : string;
    publisher : string;
    coverImgUrl : string;
}