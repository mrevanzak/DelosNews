import Link from "next/link"
import Container from "components/Container"
import Image from "next/image"
import logo from "../assets/logo.png"
import { useContext } from "react"
import { UserContext } from "contexts"
import { CurrencyEuroIcon } from "@heroicons/react/outline"
import { observer } from "mobx-react"

const Navbar = () => {
    const user = useContext(UserContext)!
    const username = [
        "Silver Rain",
        "Kim Kura",
        "Hyem",
        "Jigumina",
        "Chaestival",
        "Ssamu",
        "Minju",
        "Nabuki Yako",
        "Hitomi",
        "Glassy",
        "Eugene",
        "Vicky Jang",
    ]
    const randomUsername = username[Math.floor(Math.random() * username.length)]

    const onLoginPress = () => {
        user.setUser(randomUsername!, 100000)
    }
    return (
        <nav className='py-10'>
            <Container>
                <div className='flex justify-between items-center text-gray-900'>
                    <div className='lg:w-2/12 w-6/12'>
                        <Link href='/'>
                            <a className='flex items-center'>
                                <Image src={logo} width={200} height={50} />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col items-end'>
                        {user.account.name ? (
                            <div className='flex-shrink-0 group block'>
                                <div className='flex items-center'>
                                    <div className='mr-3 flex flex-col items-end'>
                                        <Link href='/user'>
                                            <a className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                                                {user.account.name}
                                            </a>
                                        </Link>
                                        <div className='flex items-center text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                                            <CurrencyEuroIcon className='h-5 w-5 inline pr-0.5' />
                                            <p>{user.account.balance.toLocaleString("id-ID")}</p>
                                        </div>
                                        {Math.floor(user.account.totalSpent / 50000) > 0 && (
                                            <Link href='/rewards'>
                                                <a className='text-xs font-medium text-sky-500 group-hover:text-gray-900'>
                                                    You got chances to spin lucky draw
                                                </a>
                                            </Link>
                                        )}
                                    </div>
                                    <div className='flex items-center'>
                                        <Link href='/user'>
                                            <a>
                                                <Image
                                                    className='inline-block h-9 w-9 rounded-full'
                                                    src='https://avatars.dicebear.com/api/adventurer-neutral/izone.svg'
                                                    alt=''
                                                    height={36}
                                                    width={36}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button
                                type='button'
                                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                                onClick={onLoginPress}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default observer(Navbar)
