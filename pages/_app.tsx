import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import { ApiResponseProps } from "@customTypes/type"
import { ArticleContext, UserContext } from "contexts"
import { observer } from "mobx-react"
import { reaction } from "mobx"
import user from "store/user"

function MyApp({ Component, pageProps }: AppProps) {
    const [article, setArticle] = useState<ApiResponseProps & { price: number }>()

    reaction(
        () => user.user,
        () => {
            user.save()
            console.log("user saved", user.account)
        },
    )

    reaction(
        () => user.account,
        () => {
            user.save()
            console.log("account saved", user.account)
        },
    )

    useEffect(() => {
        const userStorage = localStorage.getItem("user")
        if (userStorage) {
            user.setAccount(JSON.parse(userStorage))
        }
    }, [user.user])

    console.log("user", user.account)

    return (
        <UserContext.Provider value={user}>
            <ArticleContext.Provider value={{ article, setArticle }}>
                <Component {...pageProps} />
            </ArticleContext.Provider>
        </UserContext.Provider>
    )
}

export default observer(MyApp)
