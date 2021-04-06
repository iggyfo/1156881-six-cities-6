import React, {useRef} from "react";
import {SortType} from "../../const";
import {changeSortType} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";


const Sorting = () => {

  const {currentSort} = useSelector((state) => state.CHANGE);
  const dispatch = useDispatch();
  const sortPopupRef = useRef();
  const handleSortingClick = (evt) => dispatch(changeSortType(evt.target.dataset.sortType));
  const sortingPopupToggle = () => {
    sortPopupRef
      .current
      .classList
      .toggle(`places__options--opened`);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortingPopupToggle}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom" onMouseOut={sortingPopupToggle} ref={sortPopupRef}>
        <li className="places__option places__option--active" tabIndex={0} data-sort-type={`${SortType.DEFAULT}`} onClick={handleSortingClick}>Popular</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.LOW_TO_HIGH}`} onClick={handleSortingClick}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.HIGH_TO_LOW}`} onClick={handleSortingClick}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.TOP_RATED}`} onClick={handleSortingClick}>Top rated first</li>
      </ul>
    </form>
  );
};


export default Sorting;
