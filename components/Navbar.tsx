import Link from "next/link";
import { FC, useState } from "react";
import Container from "components/Container";
import Image from "next/image";
import logo from "../public/logo.png";

const Navbar = () => {
    return (
        <nav className="py-10">
            <Container>
                <div className="flex items-center">
                    <div className="lg:w-2/12 w-6/12">
                        <Link href="/">
                            <a className="flex items-center justify-center lg:justify-start">
                                <Image src={ logo } />
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;