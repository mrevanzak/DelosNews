import Container from "@components/Container"
import Layout from "@components/Layout"
import RandomPicker from "@components/RandomPicker"
import Head from "next/head"
import React, { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import user from "store/user"

const Reward = () => {
    const namesList = ["⚡", "❤️", "🎶", "🎈", "✨", "🎁", "🎉", "💎", "💍", "📻", "🔒", "🎖️", "🍔", "🏆", "🍿", "🚗"]

    useEffect(() => {
        if (user.isHasLuckyDraw() && user.account.totalSpent >= 50000)
            user.setAccount({
                ...user.account,
                luckyDraw: user.account.luckyDraw + 3,
                totalSpent: user.account.totalSpent - 50000,
            })
    }, [])

    return (
        <Layout>
            <Head>
                <title>Rewards &mdash; DelosNews</title>
            </Head>
            <Container>
                <RandomPicker items={namesList} />
                <ToastContainer
                    position='top-center'
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

export default Reward
