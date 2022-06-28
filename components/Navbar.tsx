import Link from "next/link";
import Container from "components/Container";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "contexts";
import { UserContextType } from "@customTypes/type";
import { useRouter } from "next/router";
import { CurrencyEuroIcon } from "@heroicons/react/outline";

const Navbar = () => {
    const { user } = useContext(UserContext) as UserContextType;
    const router = useRouter();

    return (
        <nav className="py-10">
            <Container>
                <div className="flex justify-between items-center text-gray-900">
                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className="flex items-center justify-center lg:justify-start">
                                <Image src={logo} />
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-col items-end">
                        {user.name ? (
                            <>
                                <Link href="/user">
                                    <a className="flex-shrink-0 group block">
                                        <div className="flex items-center">
                                            <div className="mr-3 flex flex-col items-end">
                                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                                    {user.name}
                                                </p>
                                                <div className="flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                                    <CurrencyEuroIcon className="h-5 w-5 inline pr-0.5" />
                                                    <p>
                                                        {user.balance.toLocaleString(
                                                            "id-ID",
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <Image
                                                    className="inline-block h-9 w-9 rounded-full"
                                                    src="https://avatars.dicebear.com/api/adventurer-neutral/izone.svg"
                                                    alt=""
                                                    height={36}
                                                    width={36}
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </>
                        ) : (
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                                onClick={() => router.reload()}>
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
