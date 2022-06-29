import { UserContext } from "contexts";
import { observer } from "mobx-react";
import Image from "next/image";
import { useContext } from "react";
import noImage from "../assets/noImage.svg";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const CollectionList = () => {
    const user = useContext(UserContext)!;

    return (
        <>
            {user.account.owned.map((item, i) => (
                <div
                    key={item.title}
                    className={classNames(
                        i === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                        i === 1 ? "sm:rounded-tr-lg" : "",
                        i === user.account.owned.length - 2 ? "sm:rounded-bl-lg" : "",
                        i === user.account.owned.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                        "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
                    )}
                >
                    <div>
                        <div className={"rounded-lg inline-flex p-3 ring-4 ring-white"}>
                            <Image
                                property="true"
                                src={item.media[0] ? item.media[0]["media-metadata"][2]!.url : noImage}
                                width={210}
                                height={140}
                            />
                        </div>
                    </div>
                    <div className='mt-8'>
                        <h3 className='text-lg font-medium'>
                            <a href={item.url} target='_blank' rel='noreferrer' className='focus:outline-none'>
                                <span className='absolute inset-0' aria-hidden='true' />
                                <p className='text-gray-800'>{item.title}</p>
                            </a>
                        </h3>
                        <p className='mt-2 text-sm text-gray-500'>{item.abstract}</p>
                    </div>
                    <span
                        className='pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400'
                        aria-hidden='true'
                    >
                        <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path d='M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z' />
                        </svg>
                    </span>
                </div>
            ))}
        </>
    )
};

export default observer(CollectionList);
