import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const NearPlacesList = ({offers}) => {
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
  ).isRequired
};

export default NearPlacesList;
