import { UserContextType } from "@customTypes/type"
import { UserContext } from "contexts"
import { useRouter } from "next/router"
import { FC, useContext } from "react"
import { toast } from "react-toastify"

type RandomPickerControlsProps = {
    isRunning: boolean
    start: () => void
    stop: () => void
}

const RandomPickerControls: FC<RandomPickerControlsProps> = ({ isRunning, start, stop }) => {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext) as UserContextType
    const reward = [{ prize: 20000 }, { prize: 0 }, { article: 1 }, { article: 2 }, { article: 3 }]
    if (user && !user.gotJackpot) {
        reward.push({ prize: 50000 })
    }

    const randomReward = reward[Math.floor(Math.random() * reward.length)]
    const action = () => {
        if (!isRunning) {
            if (user.totalSpent < 50000) return toast.error("Buy more articles to get a lucky draw")
            setUser({ ...user, totalSpent: user.totalSpent - 50000 })
            return start()
        }
        stop()
        if (randomReward) {
            if (randomReward.prize) {
                toast.success(`Congratulation you got a ${randomReward.prize} balance`)
                randomReward.prize === 50000
                    ? setUser({ ...user, gotJackpot: true, balance: user.balance + randomReward.prize })
                    : setUser({ ...user, balance: user.balance + randomReward.prize })
            }
            if (randomReward.article) {
                toast.success(`Congratulation you got free ${randomReward.article} article`)
                setUser({ ...user, freeArticles: randomReward.article })
            }
        }
    }
    const onclickHandler = async () => {
        await action()
        isRunning &&
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

export default RandomPickerControls
