import { User } from "providers/store/user"

describe("User", () => {
    it("sets user", () => {
        const user = new User()
        user.setUser("test", 100)
        expect(user.user).toEqual({ name: "test", balance: 100 })
    })

    it("sets account", () => {
        const user = new User()
        user.setAccount({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 0,
        })
        expect(user.account).toEqual({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 0,
        })
    })

    it("is owned", () => {
        const user = new User()
        user.setAccount({
            name: "test",
            owned: [
                {
                    uri: "test",
                    url: "test",
                    adx_keywords: "test",
                    id: 1,
                    asset_id: 1,
                    source: "test",
                    published_date: "test",
                    updated: "test",
                    section: "test",
                    subsection: "test",
                    nytdsection: "test",
                    byline: "test",
                    type: "test",
                    title: "test",
                    abstract: "test",
                    des_facet: ["test"],
                    org_facet: ["test"],
                    per_facet: ["test"],
                    geo_facet: ["test"],
                    media: [
                        {
                            type: "test",
                            subtype: "test",
                            caption: "test",
                            copyright: "test",
                            approved_for_syndication: 1,
                            "media-metadata": [
                                {
                                    url: "test",
                                    format: "test",
                                    height: 1,
                                    width: 1,
                                },
                            ],
                        },
                    ],
                    eta_id: 1,
                    column: "test",
                },
            ],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 0,
        })
        expect(user.isOwned(1)).toBe(true)
    })

    it("is has free articles", () => {
        const user = new User()
        user.setAccount({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 1,
            luckyDraw: 0,
        })
        expect(user.isHasFreeArticles()).toBe(true)
    })

    it("is has lucky draw", () => {
        const user = new User()
        user.setAccount({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 1,
        })
        expect(user.isHasLuckyDraw()).toBe(true)
    })

    it("gets user", () => {
        const user = new User()
        user.setUser("test", 100)
        expect(user.user).toEqual({ name: "test", balance: 100 })
    })

    it("gets account", () => {
        const user = new User()
        user.setAccount({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 0,
        })
        expect(user.account).toEqual({
            name: "test",
            owned: [],
            balance: 100,
            totalSpent: 0,
            gotJackpot: false,
            freeArticles: 0,
            luckyDraw: 0,
        })
    })

    it("saved user", () => {
        const user = new User()
        user.setUser("test", 100)
        user.save()
        expect(user.user).toEqual({ name: "test", balance: 100 })
        expect(localStorage.getItem("user")).toEqual(JSON.stringify(user.account))
        localStorage.clear()
    })
})