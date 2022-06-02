import React from "react";
import arrow from "./arrow.svg"
import {SortOptionsType} from "../../consts";
import {SortType} from "../../types";

interface ISortProps {
    sortOptions: SortOptionsType[],
    onSelectSortBy: (type: SortType) => void
}

const Sort: React.FC<ISortProps> = React.memo(({sortOptions, onSelectSortBy}) => {

    const [currentSort, setCurrentSort] = React.useState<number>(0)
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)
    const sortRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.body.addEventListener('click', (e: Event) => {
            //if(!e.composedPath().includes(sortRef.current)) { setVisiblePopup(false); }
            // TODO разобраться с тем как достать path
            console.log(e.composedPath())
        });
    },[])

    const onSelectSort = (index: number) => {
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
