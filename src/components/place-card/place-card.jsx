import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };
  }

  render() {
    const {
      offer: {id, title, type, price, rating, isPremium, imgSrc},
      onCardTitleClick
    } = this.props;

    return (
      <article className="cities__place-card place-card" key={id}>
        {
          isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
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
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: rating}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={onCardTitleClick}>
            <a href="#">{title}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    imgSrc: PropTypes.string.isRequired
  }).isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default PlaceCard;
