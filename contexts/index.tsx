import { ArticleContextType, OptionContextType, UserContextType } from "@customTypes/type";
import { createContext } from "react";

export const OptionContext = createContext<OptionContextType | null>(null);
export const ArticleContext = createContext<ArticleContextType | null>(null);
export const UserContext = createContext<UserContextType | null>(null);
