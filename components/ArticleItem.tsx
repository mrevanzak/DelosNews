import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import noImage from "../assets/noImage.svg";
import moment from "moment";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import { ApiResponseProps } from "@customTypes/type";

type ArticleItemProps = {
    data: ApiResponseProps;
}

const ArticleItem: FC<ArticleItemProps> = ({ data }) => {
    const now = moment().format("YYYY-MM-DD");
    const diff = moment(now).diff(moment(data.published_date), "days");
    const price = diff <= 1 ? "50.000" : diff <= 7 ? "20.000" : "free";

    return (
        <div className="lg:w-4/12 md:w-6/12 w-full px-4 py-6 flex justify-center">
            <Link href="/detail">
                <a className="relative">
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
                    <div className="absolute bottom-1 rounded-b-3xl px-2 pb-4 pt-20 bg-gradient-to-b from-transparent to-zinc-900 w-full">
                        <h2 className={"lg:text-lg md:text-sm mb-2 text-center"}>
                            {data.title}
                        </h2>
                        <div className="lg:text-sm md:text-xs text-gray-200 flex justify-center gap-2">
                            <p>{data.published_date}</p>
                            <span>&bull;</span>
                            <p className="inline-flex items-center">
                                <CurrencyEuroIcon className="text-gray-200 h-5 w-5 inline pr-0.5" />
                                {price}
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
