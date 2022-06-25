import { FC } from "react";
import Link from "next/link";

export type ArticleDetailProps = {
    category: string;
    date: string;
    title: string;
};

const ArticleDetail: FC<ArticleDetailProps> = ({
    category,
    date,
    title,
}) => {
    return (
        <>
            <div className="flex items-center text-white/60 space-x-4">
                <div className="uppercase">{category}</div>
                <span>&bull;</span>
                <div>{date}</div>
            </div>
            <h2 className={'text-2xl mt-4'}>
                <Link href="/detail">
                    <a>{title}</a>
                </Link>
            </h2>
        </>
    );
};

export default ArticleDetail;
