import { FC, useContext } from "react"
import { observer } from "mobx-react"
import { useRouter } from "next/router"

import { draw } from "services/draw"
import { UserContext } from "providers/context"

type RandomPickerControlsProps = {
    isRunning: boolean;
    start: () => void;
    stop: () => void;
}

const RandomPickerControls: FC<RandomPickerControlsProps> = ({ isRunning, start, stop }) => {
    const router = useRouter()
    const user = useContext(UserContext)!
    
    const onclickHandler = async () => {
        await draw(isRunning, start, stop, user)
        isRunning &&
            !user.isHasLuckyDraw() &&
            setTimeout(() => {
                router.push("/")
            }, 2500)
    }
    return (
        <div className='flex flex-col items-center'>
            <button
                className={`block py-3 px-6 min-w-[160px] text-xl font-bold uppercase tracking-widest rounded-xl bg-sky-500 ${
                    isRunning && "bg-red-500"
                }`}
                onClick={onclickHandler}
            >
                {isRunning ? "stop" : "start"}
            </button>
        </div>
    )
}

export default observer(RandomPickerControls)
