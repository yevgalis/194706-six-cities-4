import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCities} from '../../reducers/data/selectors';
import {ActionCreator} from '../../reducers/app/app';
import {getSelectedCity, getCityOffers} from '../../reducers/app/selectors';
import CitiesList from '../cities-list/cities-list.jsx';
import PlacesSorting from '../places-sorting/places-sorting.jsx';
import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import NoOffers from '../no-offers/no-offers.jsx';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this._cardHoverHandler = this._cardHoverHandler.bind(this);
    this._sortOffers = this._sortOffers.bind(this);
  }

  _cardHoverHandler(id) {
    this.setState({hoveredCard: id});
  }

  _sortOffers(value) {
    const {offers} = this.props;

    switch (value) {
      case `Price: low to high`:
        offers.sort((a, b) => a.price - b.price);
        break;
      case `Price: high to low`:
        offers.sort((a, b) => b.price - a.price);
        break;
      case `Top rated first`:
        offers.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  render() {
    const {hoveredCard} = this.state;
    const {cities, selectedCity, offers, onCityTitleClick} = this.props;

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
              selectedCity={selectedCity.name}
              onCityTitleClick={onCityTitleClick}
            />
            {
              offers.length > 0 &&
              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <b className="places__found">{offers.length} places to stay in {selectedCity.name}</b>
                    <PlacesSorting
                      onSortOptionClick={this._sortOffers}
                    />
                    <PlacesList
                      offers={offers}
                      onCardHover={this._cardHoverHandler}
                    />
                  </section>
                  <div className="cities__right-section">
                    <Map
                      type={`cities`}
                      offers={offers}
                      city={selectedCity}
                      activeCard={hoveredCard}
                    />
                  </div>
                </div>
              </div>
            }
            {
              offers.length === 0 &&
              <NoOffers city={selectedCity.name} />
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
  selectedCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  onCityTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: getCities(state),
  selectedCity: getSelectedCity(state),
  offers: getCityOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityTitleClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
