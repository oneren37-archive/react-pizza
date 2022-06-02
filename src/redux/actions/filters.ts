import {SetCategoryAction, SetSortByAction} from "../types";
import {Category, SortType} from "../../types";

export const setSortBy = (type: SortType): SetSortByAction => ({
    type: 'SET_SORT_BY',
    payload: type
})

export const setCategory = (catIndex: Category.id): SetCategoryAction => ({
    type: 'SET_CATEGORY',
    payload: catIndex
})
