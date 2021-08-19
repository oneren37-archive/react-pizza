import React from "react";

const Categories = React.memo(({onClickItem, categories}) => {

    const [currentCategory, setCurrentCategory] = React.useState(null);

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
                    categories && categories.map((catTitle, index) => (
                        <li
                            className={currentCategory === index ? 'active' : ''}
                            onClick={() => {
                                onClickItem(index);
                                setCurrentCategory(index);
                            }}
                            key={`${catTitle}_${index}`}
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
