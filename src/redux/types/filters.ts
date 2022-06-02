import {Category, SortType} from "../../types";

export interface FiltersState {
    category: Category.id,
    sortBy: SortType
}

export type SetSortByAction = {
    type: 'SET_SORT_BY',
    payload: SortType
}

export type SetCategoryAction = {
    type: 'SET_CATEGORY',
    payload: Category.id
}

export type FiltersAction = SetSortByAction | SetCategoryAction
