import { UserType } from "@customTypes/type"
import { action, computed, makeObservable, observable } from "mobx"

class User {
    _user: UserType = {
        name: "",
        owned: [],
        balance: 0,
        totalSpent: 0,
        gotJackpot: false,
        freeArticles: 0,
        luckyDraw: 0,
    }
    constructor() {
        makeObservable(this, {
            _user: observable,
            setAccount: action,
            setUser: action,
            account: computed,
            user: computed,
        })
    }

    setUser(name: string, balance: number) {
        this._user.name = name
        this._user.balance = balance
    }

    get user() {
        return {
            name: this.account.name,
            balance: this.account.balance,
        }
    }

    setAccount({ name, owned, balance, totalSpent, gotJackpot, freeArticles, luckyDraw }: UserType) {
        this._user.name = name
        this._user.owned = owned
        this._user.balance = balance
        this._user.totalSpent = totalSpent
        this._user.gotJackpot = gotJackpot
        this._user.freeArticles = freeArticles
        this._user.luckyDraw = luckyDraw
    }

    get account() {
        return this._user
    }

    isOwned(id: number) {
        return this.account.owned.some(article => article.id === id)
    }

    isHasFreeArticles() {
        return this.account.freeArticles > 0
    }

    isHasLuckyDraw() {
        return this.account.luckyDraw > 0
    }

    save() {
        localStorage.setItem("user", JSON.stringify(this.account))
    }
}

export default new User()