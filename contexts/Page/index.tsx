import { OptionContextType } from "@customTypes/type";
import { createContext } from "react";

export const OptionContext = createContext<OptionContextType | null>(null);
