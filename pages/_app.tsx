import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ArticleType, UserType } from "@customTypes/type";
import { ArticleContext, UserContext } from "contexts";

function MyApp({ Component, pageProps }: AppProps) {
    const [article, setArticle] = useState<ArticleType>();
    const [user, setUser] = useState<UserType>({
        name: "",
        owned: [],
        balance: 0,
    });

    useEffect(() => {
        const username = [
            "Silver Rain",
            "Kim Kura",
            "Hyem",
            "Jigumina",
            "Chaestival",
            "Ssamu",
            "Minju",
            "Nabuki Yako",
            "Hitomi",
            "Glassy",
            "Eugene",
            "Vicky Jang",
        ];
        const randomUsername =
            username[Math.floor(Math.random() * username.length)];

        const userStorage = localStorage.getItem("user");
        userStorage
            ? setUser(JSON.parse(userStorage))
            : localStorage.setItem(
                  "user",
                  JSON.stringify({
                      name: randomUsername,
                      owned: [],
                      balance: 100000,
                  })
              );
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <ArticleContext.Provider value={{ article, setArticle }}>
                <Component {...pageProps} />
            </ArticleContext.Provider>
        </UserContext.Provider>
    );
}

export default MyApp;
