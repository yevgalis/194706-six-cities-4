import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/app/app';
import {getCity, getCitiesList, getCityOffers} from '../../reducers/app/selectors';
import CitiesList from '../cities-list/cities-list.jsx';
import SortingMenu from '../sorting-menu/sorting-menu.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import NoOffers from '../no-offers/no-offers.jsx';
import {SortingTypes, MapTypes} from '../../utils/const';
import {sortOffers} from '../../utils/common';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sortingType: SortingTypes.POPULAR,
      hoveredCard: null
    };

    this._cardHoverHandler = this._cardHoverHandler.bind(this);
    this._sortingOptionsClickHandler = this._sortingOptionsClickHandler.bind(this);
  }

  _sortingOptionsClickHandler(type) {
    this.setState({sortingType: type});
  }

  _cardHoverHandler(id) {
    this.setState({hoveredCard: id});
  }

  render() {
    const {sortingType, hoveredCard} = this.state;
    const {cities, city, cityOffers, onCityTitleClick, onOfferTitleClick} = this.props;
    const sortedOffers = sortOffers(cityOffers, sortingType);

    return (
      <Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <div className="page page--gray page--main">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <CitiesList
              cities={cities}
              selectedCity={city.name}
              onCityTitleClick={onCityTitleClick}
            />
            {
              cityOffers.length > 0 &&
              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
                    <SortingMenu
                      selectedType={sortingType}
                      types={Object.values(SortingTypes)}
                      onSortOptionClick={this._sortingOptionsClickHandler}
                    />
                    <PlacesList
                      offers={sortedOffers}
                      onCardHover={this._cardHoverHandler}
                      onTitleClick={onOfferTitleClick}
                    />
                  </section>
                  <div className="cities__right-section">
                    <Map
                      type={MapTypes.MAIN}
                      offers={cityOffers}
                      city={city}
                      activeCard={hoveredCard}
                    />
                  </div>
                </div>
              </div>
            }
            {
              cityOffers.length === 0 &&
              <NoOffers city={city.name} />
            }
          </main>
        </div>
      </Fragment>
    );
  }
}

Main.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired
      })
  ).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  cityOffers: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  onCityTitleClick: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
  city: getCity(state),
  cityOffers: getCityOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.setCity(city));
  },
  onOfferTitleClick(id) {
    dispatch(ActionCreator.setProperty(id));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
