import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PlaceCard = ({offer, cardType, onCardTitleClick, onCardHover}) => {
  const {id, title, type, price, rating, isPremium, isBookmarked, imgSrc} = offer;

  const onCardMouseEnter = () => {
    onCardHover(id);
  };

  const onCardMouseLeave = () => {
    onCardHover(null);
  };

  const onOfferTitleClick = () => {
    onCardTitleClick(id);
  };

  return (
    <article
      className={`${cardType === `cities` ? `cities__place-card` : `near-places__card`} place-card`}
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={imgSrc} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isBookmarked ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isBookmarked ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onOfferTitleClick}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    features: PropTypes.array.isRequired,
    imgSrc: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(
        PropTypes.number.isRequired
    )
  }).isRequired,
  cardType: PropTypes.string.isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default PlaceCard;
