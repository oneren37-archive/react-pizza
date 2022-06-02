import {SortType} from "../types";

export type SortOptionsType = {
    name: string,
    type: SortType
}

export const sortOptions: SortOptionsType[] = [
    {name: "популярности", type: 'popular'},
    {name: "цене", type: 'price'},
    {name: "алфавиту", type: 'alphabet'}
]

export const catNames: string[] = [
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые"
]

export const allTypes: string[] = ["тонкое", "традиционное"]
export const allSizes: number[] = [26, 30, 40]
