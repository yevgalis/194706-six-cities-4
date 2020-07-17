import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// TODO :: reset sorting when city changes

class PlacesSorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      value: `Popular`
    };

    this._sortOptions = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];

    this._menuToggleHandler = this._menuToggleHandler.bind(this);
    this._sortOptionClickHandler = this._sortOptionClickHandler.bind(this);
  }

  _menuToggleHandler() {
    this.setState((prevState) => ({isOpened: !prevState.isOpened}));
  }

  _sortOptionClickHandler(evt) {
    const {onSortOptionClick} = this.props;
    const optionValue = evt.target.textContent;

    onSortOptionClick(optionValue);

    this.setState((prevState) => ({
      isOpened: !prevState.isOpened,
      value: optionValue
    }));
  }

  render() {
    const {isOpened, value} = this.state;
    const openedClass = isOpened ? `places__options--opened` : ``;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._menuToggleHandler}>
          {value}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${openedClass}`}>
          {
            this._sortOptions.map((option) => {
              return (
                <li
                  key={option}
                  className={`places__option ${option === value ? `places__option--active` : ``}`}
                  tabIndex="0"
                  onClick={this._sortOptionClickHandler}
                >
                  {option}
                </li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

PlacesSorting.propTypes = {
  onSortOptionClick: PropTypes.func.isRequired
};

export default PlacesSorting;
