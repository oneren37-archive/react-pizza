import React from "react";
import {ICategoriesProps} from "./types";
import {Category} from "../../types";

const Categories: React.FC<ICategoriesProps> = React.memo(({onClickItem, categories}) => {

    const [currentCategory, setCurrentCategory] = React.useState<Category.id>(null);

    return(
        <div className="categories">
            <ul>
                <li
                    className={currentCategory === null ? 'active' : ''}
                    onClick={() => {
                        onClickItem(null);
                        setCurrentCategory(null)}
                    }
                >
                    Все
                </li>
                {
                    categories && categories.map((catTitle, id) => (
                        <li
                            className={currentCategory === id ? 'active' : ''}
                            onClick={() => {
                                onClickItem(id);
                                setCurrentCategory(id);
                            }}
                            key={`${catTitle}_${id}`}
                        >
                            {catTitle}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
})

export default Categories
