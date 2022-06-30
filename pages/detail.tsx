import "react-toastify/dist/ReactToastify.min.css"
import Head from "next/head"
import { observer } from "mobx-react"
import { ToastContainer } from "react-toastify"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"

import ArticleInfo from "@components/ArticleInfo"
import BuyButton from "@components/BuyButton"
import Container from "@components/Container"
import Layout from "@components/Layout"
import { ArticleContextType } from "@customTypes/type"
import { ArticleContext, UserContext } from "providers/context"
import { order } from "services/order"

const Detail = () => {
    const { article } = useContext(ArticleContext) as ArticleContextType
    const user = useContext(UserContext)!
    const router = useRouter()

    useEffect(() => {
        if (!article) {
            router.push("/")
        }
    }, [])

    const onOrderClick = async () => {
        await order(user, article!)
        setTimeout(() => {
            router.push("/")
        }, 2500)
    }

    return (
        <Layout>
            <Head>
                <title>Detail &mdash; DelosNews</title>
            </Head>
            <Container>
                <ArticleInfo />
                <BuyButton onOrderClick={onOrderClick} />
                <ToastContainer
                    position='bottom-center'
                    autoClose={1000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
            </Container>
        </Layout>
    )
}

export default observer(Detail)
