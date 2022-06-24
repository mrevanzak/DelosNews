import Link from "next/link";
import InfoPost from "@components/InfoPost";
import { FC } from "react";
import { ApiResponseProps } from "pages";

type ArticleItemProps = {
    data: ApiResponseProps;
}

const ArticleItem: FC<ArticleItemProps> = ({ data }) => {
    return (
        <div className="md:w-4/12 w-full px-4 py-6">
            <article>
                <Link href="/detail">
                    <a>
                        <img src={data.media[0]['media-metadata'][0].url} className="w-full rounded mb-4" />
                    </a>
                </Link>
                <InfoPost category={data.type} date={data.published_date} title={data.title} shortDescription={data.abstract} />
            </article>
        </div>
    );
};

export default ArticleItem;
