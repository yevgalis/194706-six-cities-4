import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {formatRating} from '../../utils/common';

const PlaceCard = ({offer, cardType, onCardHover, onTitleClick}) => {
  const {
    id,
    title,
    type,
    price,
    rating,
    is_premium: isPremium,
    is_favorite: isFavorite,
    preview_image: previewImage
  } = offer;
  const ratingWidth = formatRating(rating);
  const onCardMouseEnter = () => onCardHover(id);
  const onCardMouseLeave = () => onCardHover(null);
  const onCardTitleClick = () => onTitleClick(id);

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
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${id}`}
            onClick={onCardTitleClick}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default PlaceCard;
