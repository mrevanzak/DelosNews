import Link from "next/link";
import { FC, useContext } from "react";
import Image from "next/image";
import noImage from "../assets/noImage.svg";
import moment from "moment";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import { ApiResponseProps, ArticleContextType } from "@customTypes/type";
import { ArticleContext } from "contexts";

type ArticleItemProps = {
    data: ApiResponseProps;
};

const ArticleItem: FC<ArticleItemProps> = ({ data }) => {
    const now = moment().format("YYYY-MM-DD");
    const diff = moment(now).diff(moment(data.published_date), "days");
    const price = diff <= 1 ? 50000 : diff <= 7 ? 20000 : 0;
    const { setArticle } = useContext(ArticleContext) as ArticleContextType;

    const onClickHandler = () => {
        setArticle({
            ...data,
            price: price,
        });
    };

    return (
        <div className="lg:w-4/12 md:w-6/12 w-full px-4 py-6 flex justify-center">
            <Link href="/detail">
                <a className="relative" onClick={onClickHandler}>
                    <Image
                        width={440}
                        height={293}
                        src={
                            data.media[0]
                                ? data.media[0]["media-metadata"][2].url
                                : noImage
                        }
                        className="w-full rounded-3xl mb-4"
                    />
                    <div className="absolute bottom-1 rounded-b-3xl px-2 pb-4 xs:pt-10 md:pt-20 bg-gradient-to-b from-transparent to-zinc-900 w-full">
                        <h2
                            className={
                                "lg:text-lg md:text-sm mb-2 text-center"
                            }>
                            {data.title}
                        </h2>
                        <div className="lg:text-sm md:text-xs text-gray-200 flex justify-center gap-2">
                            <p>{data.published_date}</p>
                            <span>&bull;</span>
                            <p className="inline-flex items-center">
                                <CurrencyEuroIcon className="h-5 w-5 inline pr-0.5" />
                                {price > 0
                                    ? price.toLocaleString("id-ID")
                                    : "Free"}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
            {/* <ArticleDetail category={data.type} date={data.published_date} title={data.title} shortDescription={data.abstract} /> */}
        </div>
    );
};

export default ArticleItem;
