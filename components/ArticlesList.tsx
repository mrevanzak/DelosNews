import { totalmem } from "os";
import { ApiResponseProps } from "pages";
import { FC } from "react";
import ArticleItem from "@components/ArticleItem";

type ArticlesListProps = {
    data: ApiResponseProps[];
}

const ArticleList: FC<ArticlesListProps> = ({ data }) => {
    return (
        <div className="flex -mx-4 flex-wrap mt-6">
            {data.map((item) => (
                <ArticleItem key={item.id} data={item} />
            ))}
        </div>
    );
}

export default ArticleList;