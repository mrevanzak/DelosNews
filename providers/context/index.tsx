import User from "@store/user"
import { ArticleContextType, OptionContextType } from "@customTypes/type"
import { createContext } from "react"

export const OptionContext = createContext<OptionContextType | null>(null)
export const ArticleContext = createContext<ArticleContextType | null>(null)
export const UserContext = createContext<typeof User | null>(null)
