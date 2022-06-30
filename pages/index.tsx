import Head from "next/head"
import { FC, useState } from "react"

import ArticleList from "@components/ArticlesList"
import Container from "@components/Container"
import Dropdown from "@components/Dropdown"
import Layout from "@components/Layout"
import Search from "@components/Search"
import { OptionContext } from "providers/context"
import { Option } from "@customTypes/type"

const Home: FC = () => {
    const [option, setOption] = useState<Option>("emailed")
    const [search, setSearch] = useState("")

    return (
        <Layout>
            <Head>
                <title>Home &mdash; DelosNews</title>
            </Head>
            <OptionContext.Provider value={{ option: option, setOption: setOption }}>
                <Container>
                    <div className='flex'>
                        <Search search={search} setSearch={setSearch} />
                        <Dropdown />
                    </div>
                    <ArticleList search={search} />
                </Container>
            </OptionContext.Provider>
        </Layout>
    )
}

export default Home
