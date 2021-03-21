import React from "react";
import {SortType} from "../../const";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import propTypes from "prop-types";


const Sorting = ({handleSortingClick, currentSort}) => {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortingPopupToggle}>
        {currentSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li className="places__option places__option--active" tabIndex={0} data-sort-type={`${SortType.DEFAULT}`} onClick={handleSortingClick}>Popular</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.LOW_TO_HIGH}`} onClick={handleSortingClick}>Price: low to high</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.HIGH_TO_LOW}`} onClick={handleSortingClick}>Price: high to low</li>
        <li className="places__option" tabIndex={0} data-sort-type={`${SortType.TOP_RATED}`} onClick={handleSortingClick}>Top rated first</li>
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  currentSort: propTypes.string.isRequired,
  handleSortingClick: propTypes.func.isRequired,
};

const sortingPopupToggle = () => {
  document.querySelector(`.places__options--custom`)
    .classList
    .toggle(`places__options--opened`);
};

const mapStateToProps = ({currentSort}) => ({
  currentSort,
});

const mapDispatchToProps = (dispatch) => ({
  handleSortingClick(evt) {
    dispatch(ActionCreator.changeSortType(evt.target.dataset.sortType));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
