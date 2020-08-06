import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOfferByID} from '../../reducers/data/selectors';
import {getPropertyID, getNearbyOffers} from '../../reducers/app/selectors';
import {ActionCreator, AsyncActions} from '../../reducers/app/app';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import Map from '../map/map.jsx';
import NearPlacesList from '../near-places-list/near-places-list.jsx';
import reviews from '../../mocks/reviews';
import {MapTypes} from '../../utils/const';
import {formatRating} from '../../utils/common';

class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onPropertyLoad(this.props.offer.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.propertyID !== this.props.propertyID) {
      this.props.onPropertyLoad(this.props.propertyID);
    }
  }

  render() {
    const {nearbyOffers, offer, propertyID, onOfferTitleClick} = this.props;
    const {
      title,
      type,
      images,
      bedrooms,
      max_adults: capacity,
      price,
      rating,
      is_premium: isPremium,
      goods,
      host,
      description
    } = offer;
    const ratingWidth = formatRating(rating);

    // console.log('offer: ', offer);
    // console.log('nearbyOffers: ', nearbyOffers);
    // console.log('============');

    return (
      <Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="main.html">
                    <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
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

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {
                    images.slice(0, 6).map((img) => {
                      return (
                        <div key={img} className="property__image-wrapper">
                          <img className="property__image" src={img} alt="Photo studio" />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {
                    isPremium &&
                    <div className="property__mark">
                      <span>Premium</span>
                    </div>
                  }
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <button className="property__bookmark-button button" type="button">
                      <svg className="property__bookmark-icon" width="31" height="33">
                        <use xlinkHref="#icon-bookmark" />
                      </svg>
                      <span className="visually-hidden">To bookmarks</span>
                    </button>
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: ratingWidth}} />
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {type}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms} Bedrooms
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {capacity} adults
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {
                        goods.map((feature) => {
                          return (
                            <li key={feature} className="property__inside-item">
                              {feature}
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                        <img className="property__avatar user__avatar" src={`/${host.avatar_url}`} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        {host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {description}
                      </p>
                    </div>
                  </div>
                  <ReviewsList reviews={reviews} />
                </div>
              </div>
              <Map
                type={MapTypes.PROPERTY}
                offers={[...nearbyOffers, offer]}
                city={offer.city}
                activeCard={propertyID}
              />
            </section>
            <div className="container">
              <NearPlacesList
                offers={nearbyOffers}
                onTitleClick={onOfferTitleClick}
              />
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

Property.propTypes = {
  propertyID: PropTypes.number.isRequired,
  offer: PropTypes.object.isRequired,
  nearbyOffers: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  onPropertyLoad: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  propertyID: getPropertyID(state),
  offer: getOfferByID(state, ownProps.match.params.id),
  nearbyOffers: getNearbyOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onPropertyLoad(id) {
    dispatch(AsyncActions.loadNearbyOffers(id));
  },
  onOfferTitleClick(id) {
    dispatch(ActionCreator.setProperty(id));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
