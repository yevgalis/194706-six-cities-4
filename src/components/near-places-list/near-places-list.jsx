import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const NearPlacesList = ({offers, onCardTitleClick, onCardHover}) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => {
            return (
              <PlaceCard
                key={offer.id}
                offer={offer}
                cardType={`near-places`}
                onCardTitleClick={onCardTitleClick}
                onCardHover={onCardHover}
              />
            );
          })
        }
      </div>
    </section>
  );
};

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
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
        ),
      })
  ).isRequired,
  onCardTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default NearPlacesList;
