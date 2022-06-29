import { UserType } from "@customTypes/type"
import { action, computed, makeAutoObservable, observable } from "mobx"

class User {
    _user: UserType = {
        name: "",
        owned: [],
        balance: 0,
        totalSpent: 0,
    }
    constructor() {
        makeAutoObservable(this, {
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

    setAccount({ name, owned, balance, totalSpent, gotJackpot, freeArticles }: UserType) {
        this._user.name = name
        this._user.owned = owned
        this._user.balance = balance
        this._user.totalSpent = totalSpent
        this._user.gotJackpot = gotJackpot
        this._user.freeArticles = freeArticles
    }

    get account() {
        return this._user
    }

    isOwned(id: number) {
        return this.account.owned.some(article => article.id === id)
    }

    isHasFreeArticles() {
        return this.account.freeArticles !== undefined && this.account.freeArticles > 0
    }

    syncUser() {
        const userStorage = localStorage.getItem("user")
        if (!userStorage) return localStorage.setItem("user", JSON.stringify(this.account))
        const user = JSON.parse(userStorage)
        return this.setAccount(user)
    }

    save() {
        localStorage.setItem("user", JSON.stringify(this.account))
    }
}

export default new User()
