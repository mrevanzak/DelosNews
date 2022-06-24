import { FC } from "react";
import Head from "next/head";
import Container from "@components/Container";
import Layout from "@components/Layout";
import ArticleList from "@components/ArticlesList";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Dropdown from "@components/Dropdown";

export type ApiResponseProps = {
    url: string;
    adx_keywords: string;
    subsection: string;
    column: string;
    eta_id: number;
    section: string;
    id: number;
    asset_id: number;
    nytdsection: string;
    byline: string;
    type: string;
    title: string;
    abstract: string;
    published_date: string;
    source: string;
    updated: string;
    des_facet: string[];
    org_facet: string[];
    per_facet: string[];
    geo_facet: string[];
    media: {
        type: string;
        subtype: string;
        caption: string;
        copyright: string;
        approved_for_syndication: number;
        'media-metadata': {
            url: string;
            format: string;
            height: number;
            width: number;
        }[];
    }[];
    uri: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const req = await fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/shared/1.json?api-key=" +
            process.env.API_KEY
    );
    const res = await req.json();

    if (res.length < 1) {
        throw new Error("No posts found");
    }

    return {
        props: { data: res.results },
    };
}

const Home: FC = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(data);
    return (
        <Layout>
            <Head>
                <title>Home &mdash; Epictetus</title>
            </Head>
            <Container>
                <Dropdown />
                <ArticleList data={data} />
            </Container>
        </Layout>
    );
};

export default Home;
