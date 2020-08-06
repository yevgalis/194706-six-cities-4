import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

// TODO :: reset sorting when city changes

class SortingMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };

    this._menuToggleHandler = this._menuToggleHandler.bind(this);
    this._onOptionClick = this._onOptionClick.bind(this);
  }

  _menuToggleHandler() {
    this.setState((prevState) => ({isOpened: !prevState.isOpened}));
  }

  _onOptionClick(option) {
    this.props.onSortOptionClick(option);
    this.setState((prevState) => ({isOpened: !prevState.isOpened}));
  }

  render() {
    const {isOpened} = this.state;
    const {selectedType, types} = this.props;
    const openedClass = isOpened ? `places__options--opened` : ``;
    const activeClass = `places__option--active`;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._menuToggleHandler}>
          {selectedType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${openedClass}`}>
          {
            types.map((option) => {
              return (
                <li
                  key={option}
                  className={`places__option ${option === selectedType ? activeClass : ``}`}
                  tabIndex="0"
                  onClick={() => this._onOptionClick(option)}
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

SortingMenu.propTypes = {
  selectedType: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  onSortOptionClick: PropTypes.func.isRequired
};

export default SortingMenu;
