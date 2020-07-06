import React from 'react';
import PropTypes from 'prop-types';

const LocationsList = ({locations}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            locations.map((location) => {
              return (
                <li key={location} className="locations__item">
                  <a className={`locations__item-link tabs__item ${location === `Amsterdam` ? `tabs__item--active` : ``}`} href="#">
                    <span>{location}</span>
                  </a>
                </li>
              );
            })
          }
        </ul>
      </section>
    </div>
  );
};

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
};

export default LocationsList;
