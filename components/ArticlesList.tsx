import ArticleItem from "@components/ArticleItem";
import useArticles from "pages/api/articles";
import Loading from "./Loading";
import { FC, useContext } from "react";
import { ApiResponseProps, OptionContextType } from "@customTypes/type";
import { OptionContext } from "contexts";

type ArticleListProps = {
    search: string;
};

const ArticleList: FC<ArticleListProps> = ({ search }) => {
    const { option } = useContext(OptionContext) as OptionContextType;
    const { data, error } = useArticles(option);

    return (
        <div className="flex -mx-4 flex-wrap mt-6">
            {!data ? (
                <Loading />
            ) : (
                data.results
                    .filter((article: ApiResponseProps) => {
                        if (search.length === 0) return true;
                        return article.title
                            .toLowerCase()
                            .includes(search.toLowerCase());
                    })
                    .map((item: ApiResponseProps) => (
                        <ArticleItem key={item.id} data={item} />
                    ))
            )}
        </div>
    );
};

export default ArticleList;
