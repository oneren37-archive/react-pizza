export namespace Pizza {
    export type id = number
    export type name = string
    export type imageUrl = string
    export type price = number
    export type rating = number
    export type sizeId = number
    export type typeID = number

    export interface IPizza {
        pizzaId: id
        imageUrl: imageUrl,
        name: name,
        types: typeID[]
        price: price,
        category: Category.id,
        rating: rating
        sizes: sizeId[]
    }
}

export namespace Category {
    export type title = string
    export type id = number | null

    export interface ICategory {
        catTitle: title,
        catId: id
    }
}

export type SortType = 'popular' | 'price' | 'alphabet'
