import { execOnce } from "next/dist/shared/lib/utils"
import { FC } from "react"

type RandomPickerChoiceProps = {
    choice: string
}

const RandomPickerChoice: FC<RandomPickerChoiceProps> = ({ choice }) => {
    const content = choice.trim().length > 0 ? choice : "?"

    return (
        <div className='flex content-center m-0 mb-4 text-6xl text-center font-bold whitespace-nowrap text-black'>
            <span>{content}</span>
        </div>
    )
}

export default RandomPickerChoice
