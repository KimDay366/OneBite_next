import type { BookData } from "@/types";
import Link from 'next/link';
import style from './bookItem.module.css'

export default function BookItem({ 
    id, title, subTitle, description, author, publisher, coverImgUrl,
} : BookData ){
    return <Link href={`/book/${id}`} className={style.container}>
        <img src={coverImgUrl} alt="book img" />
        <div>
            <p className={style.title}>{title}</p>
            <p className={style.subTitle}>{subTitle}</p>
            <br />
            <p className={style.author}>{author} | {publisher}</p>
            <span style={{display: 'none'}}>{description}</span>
        </div>
    </Link>
}