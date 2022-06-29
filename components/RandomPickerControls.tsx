import { UserContext } from "contexts"
import { useRouter } from "next/router"
import { FC, useContext } from "react"
import { toast } from "react-toastify"

type RandomPickerControlsProps = {
    isRunning: boolean;
    start: () => void;
    stop: () => void;
}

const RandomPickerControls: FC<RandomPickerControlsProps> = ({ isRunning, start, stop }) => {
    const router = useRouter()
    const user = useContext(UserContext)!
    const reward = [{ prize: 20000 }, { prize: 0 }, { article: 1 }, { article: 2 }, { article: 3 }]
    if (user && !user.account.gotJackpot) {
        reward.push({ prize: 50000 })
    }

    const randomReward = reward[Math.floor(Math.random() * reward.length)]
    const action = () => {
        if (!isRunning) {
            if (user.account.totalSpent < 50000) return toast.error("Buy more articles to get a lucky draw")
            user.setAccount({ ...user.account, totalSpent: user.account.totalSpent - 50000 })
            return start()
        }
        stop()
        if (randomReward) {
            if (randomReward.prize === 0) return toast.info("Better luck next time")
            if (randomReward.prize) {
                toast.success(`Congratulation you got a ${randomReward.prize} balance`)
                randomReward.prize === 50000
                    ? user.setAccount({
                          ...user.account,
                          gotJackpot: true,
                          balance: user.account.balance + randomReward.prize,
                      })
                    : user.setAccount({ ...user.account, balance: user.account.balance + randomReward.prize })
            }
            if (randomReward.article) {
                toast.success(`Congratulation you got free ${randomReward.article} article`)
                user.setAccount({ ...user.account, freeArticles: randomReward.article })
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
