import Container from "@components/Container";
import Layout from "@components/Layout";
import { ArticleContextType } from "@customTypes/type";
import { CurrencyEuroIcon } from "@heroicons/react/outline";
import { ArticleContext } from "contexts";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import noImage from "../assets/noImage.svg";

const Detail = () => {
    const { article } = useContext(ArticleContext) as ArticleContextType;

    return (
        <Layout>
            <Head>
                <title>Detail &mdash; Epictetus</title>
            </Head>
            {article && (
                <Container>
                    <div className="w-full mx-auto flex items-center flex-col text-gray-900">
                        <div className="space-x-4 flex text-gray-500">
                            <p>{article.date}</p>
                            <span>&bull;</span>
                            <p className="inline-flex items-center">
                                <CurrencyEuroIcon className="h-5 w-5 inline pr-0.5" />
                                {article.price}
                            </p>
                            <span>&bull;</span>
                            <p>{article.author}</p>
                        </div>
                        <h2 className="text-2xl mt-4 text-center">
                            <Link href="/detail">
                                <a>{article.title}</a>
                            </Link>
                        </h2>
                    </div>
                    <div className="md:w-10/12 w-full mx-auto my-10 flex justify-center">
                        <Image
                            width={660}
                            height={439.5}
                            src={article.image ? article.image : noImage}
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="md:w-8/12 w-full mx-auto leading-relaxed text-gray-900">
                        <p className="text-xl mb-4">{article.abstract}</p>
                    </div>
                </Container>
            )}
        </Layout>
    );
};

export default Detail;
