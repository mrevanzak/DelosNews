import { FC } from "react"
import { ShoppingCartIcon } from "@heroicons/react/solid"

type BuyButtonProps = {
    onOrderClick: () => void;
}

const BuyButton: FC<BuyButtonProps> = ({ onOrderClick }) => {
    return (
        <div className='flex justify-end fixed bottom-8 right-8 sm:static'>
            <button
                type='button'
                className='inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
                onClick={onOrderClick}
            >
                <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    )
}

export default BuyButton
