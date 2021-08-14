import React from "react";

const Categories = ({categories}) => {

    const [currentCategory, setCurrentCategory] = React.useState(null);

    return(
        <div className="categories">
            <ul>
                <li
                    className={currentCategory === null ? 'active' : ''}
                    onClick={() => {setCurrentCategory(null)}}
                >
                    Все
                </li>
                {
                    categories && categories.map((catTitle, index) => (
                        <li
                            className={currentCategory === index ? 'active' : ''}
                            onClick={() => {setCurrentCategory(index)}}
                            key={`${catTitle}_${index}`}
                        >
                            {catTitle}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories
