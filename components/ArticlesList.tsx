import { FC, useContext } from "react"
import { toast, ToastContainer } from "react-toastify"

import ArticleItem from "@components/ArticleItem"
import Loading from "@components/Loading"
import useArticles from "pages/api/articles"
import { ApiResponseProps, OptionContextType } from "@customTypes/type"
import { OptionContext } from "providers/context"

type ArticleListProps = {
    search: string;
}

const ArticleList: FC<ArticleListProps> = ({ search }) => {
    const { option } = useContext(OptionContext) as OptionContextType
    const { data, error } = useArticles(option)

    return (
        <div className='flex -mx-4 flex-wrap mt-6'>
            {error && toast.error("Error loading articles")}
            {!data && !error ? (
                <Loading />
            ) : (
                data.results
                    .filter((article: ApiResponseProps) => {
                        if (search.length === 0) return true
                        return article.title.toLowerCase().includes(search.toLowerCase())
                    })
                    .map((item: ApiResponseProps) => <ArticleItem key={item.id} data={item} />)
            )}

            <ToastContainer
                position='top-center'
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default ArticleList
