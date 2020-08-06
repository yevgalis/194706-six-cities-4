import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const NearPlacesList = ({offers, onTitleClick}) => {
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
                onCardHover={() => {}}
                onTitleClick={() => onTitleClick(offer.id)}
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
      PropTypes.object.isRequired
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default NearPlacesList;
