import { UserContextType } from "@customTypes/type"
import { UserContext } from "contexts"
import { FC, useContext, useState } from "react"
import RandomPickerChoice from "./RandomPickerChoice"
import RandomPickerControls from "./RandomPickerControls"

const RandomPicker: FC<{ items: string[] }> = ({ items }) => {
    const { user } = useContext(UserContext) as UserContextType
    const [isRunning, setIsRunning] = useState(false)
    const [currentChoice, setCurrentChoice] = useState<any>("")

    const [_interval, _setInterval] = useState<any>(null)
    const intervalDuration = 25

    const random = () => {
        const randomIndex = Math.floor(Math.random() * items.length)
        return items[randomIndex]
    }

    const setChoice = () => {
        setCurrentChoice(random())
    }

    const stop = () => {
        console.log(_interval)
        clearInterval(_interval)
        setIsRunning(false)
    }

    const start = () => {
        clearInterval(_interval)
        _setInterval(setInterval(setChoice, intervalDuration))
        setIsRunning(true)
    }

    return (
        <div className='flex flex-col items-center justify-center p-4 h-[75vh]'>
            <RandomPickerChoice choice={currentChoice} />
            <RandomPickerControls isRunning={isRunning} start={start} stop={stop} />
            <p className="text-black">You have {Math.floor(user.totalSpent / 50000)} chance</p>
        </div>
    )
}

export default RandomPicker