import Image from "next/image"
import Link from "next/link"
import { CurrencyEuroIcon } from "@heroicons/react/outline"
import { useContext, useEffect } from "react"
import { useRouter } from "next/router"

import noImage from "@assets/noImage.svg"
import { ArticleContextType } from "@customTypes/type"
import { ArticleContext } from "providers/context"

const ArticleInfo = () => {
    const { article } = useContext(ArticleContext) as ArticleContextType
    const router = useRouter()

    useEffect(() => {
        if (!article) {
            router.push("/")
        }
    }, [])

    return (
        <>
            {article && (
                <div>
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
                </div>
            )}
        </>
    )
}

export default ArticleInfo
