import React, {useCallback, useState, memo} from "react";
import propTypes from 'prop-types';
import {changeSortType} from "../../store/action";
import {useDispatch, useSelector} from "react-redux";


const Sorting = ({sortTypes}) => {

  const dispatch = useDispatch();
  const {currentSort} = useSelector((state) => state.CHANGE);
  const [isSortingOpen, setIsSortingOpen] = useState(false);

  const changeSorting = useCallback((sortType) => {
    if (sortType !== currentSort) {
      dispatch(changeSortType(sortType));
    }
  }, [currentSort]);
  const active = (option) => option === currentSort ? `places__option--active` : ``;


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsSortingOpen(!isSortingOpen)}
        className="places__sorting-type"
        tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        onMouseLeave={()=> setIsSortingOpen(!isSortingOpen)}
        className={`places__options places__options--custom ${isSortingOpen ? `places__options--opened` : ``}`}>
        {sortTypes.map((sortType) => (
          <li
            onClick={()=> changeSorting(sortType)}
            className={`places__option ${active(sortType)}`}
            key={sortType}
            tabIndex={0}>
            {sortType}
          </li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortTypes: propTypes.arrayOf(propTypes.string).isRequired,
};


export default memo(Sorting, (prevProps, nextProps) =>
  prevProps.sortTypes === nextProps.sortTypes
);
