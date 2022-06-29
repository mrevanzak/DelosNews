import { ApiResponseProps } from "@customTypes/type"
import { toast } from "react-toastify"
import User from "../providers/store/user"

export const order = (
    user: typeof User,
    article: ApiResponseProps & {
        price: number;
    },
) => {
    if (article) {
        if (user.account.name.length < 1) return toast.error("Please login first")
        if (user.isOwned(article.id)) return toast.info("Article already in your collection")
        if (user.isHasFreeArticles() && article.price > 0) {
            user.setAccount({
                ...user.account,
                owned: [...user.account.owned, article],
                freeArticles: user.account.freeArticles! - 1,
            })
            return toast.success("Article added to your collection without deduction of your balance")
        }
        if (user.account.balance < article.price) return toast.error("You don't have enough balance")
        user.setAccount({
            ...user.account,
            owned: [...user.account.owned, article],
            balance: user.account.balance - article.price,
            totalSpent: user.account.totalSpent + article.price,
        })
        return toast.success("Article added to your collection")
    }
    return
}
