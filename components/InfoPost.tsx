import { FC } from "react";
import PostMetaTitle from "@components/PostMetaTitle";

export type InfoPostProps = {
    category: string;
    date: string;
    title: string;
    shortDescription: string;
};

const InfoPost: FC<InfoPostProps> = ({
    category,
    date,
    title,
    shortDescription,

}) => {
    return (
        <>
            <PostMetaTitle category={category} date={date} title={title} />
            <p className="text-white/60 mt-5 w-10/12">{shortDescription}</p>
        </>
    );
};

export default InfoPost;
