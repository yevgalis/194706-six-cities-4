import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = ({offers, onCardHover}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => {
          return (
            <PlaceCard
              key={offer.id}
              offer={offer}
              cardType={`cities`}
              onCardHover={onCardHover}
            />
          );
        })
      }
    </div>
  );
};

PlacesList.propTypes = {
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
        )
      })
  ).isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default PlacesList;
