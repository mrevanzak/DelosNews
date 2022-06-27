import Link from "next/link";
import Container from "components/Container";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "contexts";
import { UserContextType } from "@customTypes/type";

const Navbar = () => {
    const { user } = useContext(UserContext) as UserContextType;

    return (
        <nav className="py-10">
            <Container>
                <div className="flex justify-between items-center text-gray-900">
                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className="flex items-center justify-center lg:justify-start">
                                <Image src={ logo } />
                            </a>
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/user">
                            <a className="">{user.name}</a>
                        </Link>
                        <p>{user.balance}</p>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
