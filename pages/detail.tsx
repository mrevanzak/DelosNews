import Container from "@components/Container"
import Layout from "@components/Layout"
import { ArticleContextType, UserContextType } from "@customTypes/type"
import { CurrencyEuroIcon } from "@heroicons/react/outline"
import { ShoppingCartIcon } from "@heroicons/react/solid"
import { ArticleContext, UserContext } from "contexts"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { toast, ToastContainer } from "react-toastify"
import noImage from "../assets/noImage.svg"
import "react-toastify/dist/ReactToastify.min.css"
import { useRouter } from "next/router"

const Detail = () => {
    const { article } = useContext(ArticleContext) as ArticleContextType
    const { user, setUser } = useContext(UserContext) as UserContextType
    const router = useRouter()

    const order = () => {
        if (article) {
            if (user.name.length < 1) return toast.error("Please login first")
            if (user.owned.some(item => item.id === article.id)) return toast.info("Article already in your collection")
            if (user.freeArticles && user.freeArticles > 0) {
                setUser({ ...user, owned: [...user.owned, article], freeArticles: user.freeArticles - 1 })
                return toast.success("Article added to your collection without deduction of your balance")
            }
            if (user.balance < article.price) return toast.error("You don't have enough balance")
            
            setUser({
                ...user,
                owned: [...user.owned, article],
                balance: user.balance - article.price,
                totalSpent: user.totalSpent + article.price,
            })
            localStorage.setItem("user", JSON.stringify(user))
            return toast.success("Article added to your collection")
        }
        return
    }

    const onOrderClick = async () => {
        await order()
        setTimeout(() => {
            router.push("/")
        }, 2500)
    }

    return (
        <Layout>
            <Head>
                <title>Detail &mdash; Epictetus</title>
            </Head>
            {article && (
                <Container>
                    <div className='w-full mx-auto flex items-center flex-col text-gray-900'>
                        <div className='space-x-4 flex items-center text-gray-500 text-xs sm:text-base'>
                            <p>{article.published_date}</p>
                            <span>&bull;</span>
                            <p className='inline-flex items-center'>
                                <CurrencyEuroIcon className='h-5 w-5 inline pr-0.5' />
                                {article.price}
                            </p>
                            <span>&bull;</span>
                            <p>{article.byline}</p>
                        </div>
                        <h2 className='text-lg sm:text-2xl mt-4 text-center'>
                            <Link href='/detail'>
                                <a>{article.title}</a>
                            </Link>
                        </h2>
                    </div>
                    <div className='md:w-10/12 w-full mx-auto my-10 flex justify-center'>
                        <Image
                            width={660}
                            height={439.5}
                            src={article.media[0] ? article.media[0]["media-metadata"][2]!.url : noImage}
                            className='w-full rounded-lg'
                        />
                    </div>
                    <div className='md:w-8/12 w-full mx-auto leading-relaxed text-gray-900'>
                        <p className='text-base sm:text-xl mb-4'>{article.abstract}</p>
                    </div>
                    <div className='flex justify-end fixed bottom-8 right-8 sm:static'>
                        <button
                            type='button'
                            className='inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                            onClick={onOrderClick}
                        >
                            <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                    </div>
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
            )}
        </Layout>
    )
}

export default Detail
