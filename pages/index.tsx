import { FC, useState } from "react"
import Head from "next/head"
import Container from "@components/Container"
import Layout from "@components/Layout"
import ArticleList from "@components/ArticlesList"
import Dropdown from "@components/Dropdown"
import { OptionContext } from "contexts"
import { Option } from "@customTypes/type"
import Search from "@components/Search"

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
