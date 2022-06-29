import { ArticleContextType, OptionContextType } from "@customTypes/type";
import { createContext } from "react";
import user from "../store/user";

export const OptionContext = createContext<OptionContextType | null>(null);
export const ArticleContext = createContext<ArticleContextType | null>(null);
export const UserContext = createContext<typeof user | null>(null);