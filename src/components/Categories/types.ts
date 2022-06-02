import {Category} from "../../types";

export type IOnClickItem = (id: Category.id) => void

export interface ICategoriesProps {
    onClickItem: IOnClickItem,
    categories: string[]
}
