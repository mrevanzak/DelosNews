import { FC, useContext, useState } from "react";
import Head from "next/head";
import Container from "@components/Container";
import Layout from "@components/Layout";
import ArticleList from "@components/ArticlesList";
import Dropdown from "@components/Dropdown";
import { OptionContext, UserContext } from "contexts";
import { Option, UserContextType } from "@customTypes/type";

const Home: FC = () => {
    const [option, setOption] = useState<Option>("emailed");
    const { user } = useContext(UserContext) as UserContextType;

    console.log(user);
    return (
        <Layout>
            <Head>
                <title>Home &mdash; DelosNews</title>
            </Head>
            <OptionContext.Provider
                value={{ option: option, setOption: setOption }}
            >
                <Container>
                    <Dropdown />
                    <ArticleList />
                </Container>
            </OptionContext.Provider>
        </Layout>
    );
};

export default Home;
