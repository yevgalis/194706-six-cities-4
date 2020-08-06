import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlacesList = ({offers, onCardHover, onTitleClick}) => {
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
              onTitleClick={onTitleClick}
            />
          );
        })
      }
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  onCardHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
