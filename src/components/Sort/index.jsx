import React from "react";
import arrow from "./arrow.svg"

const Sort = React.memo(({sortOptions, onSelectSortBy}) => {

    const [currentSort, setCurrentSort] = React.useState(0)
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const sortRef = React.useRef();

    React.useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if(!e.path.includes(sortRef.current)) {setVisiblePopup(false);}
        });
    },[])

    const onSelectSort = (index) => {
        setCurrentSort(index)
        setVisiblePopup(false)
        onSelectSortBy(sortOptions[index].type)
    }

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    return(
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <img
                    className={visiblePopup ? "up" : ""}
                    src={arrow}
                    alt='arrow'
                />
                <b>Сортировка по:</b>
                <span onClick={() => toggleVisiblePopup()}>{sortOptions[currentSort].name}</span>
            </div>
            {
                visiblePopup && (
                    <div className="sort__popup">
                        <ul>
                            {sortOptions && sortOptions.map((option, index) => (
                                <li
                                    className={currentSort === index ? "active" : ""}
                                    onClick={() => onSelectSort(index)}
                                    key={index}
                                >
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
})

export default Sort
