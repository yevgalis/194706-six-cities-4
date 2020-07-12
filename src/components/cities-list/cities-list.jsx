import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities, selectedCity, onCityTitleClick}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => {
              const activeClass = city.name === selectedCity ? `tabs__item--active` : ``;

              return (
                <li key={city.name} className="locations__item">
                  <a
                    className={`locations__item-link tabs__item ${activeClass}`}
                    // href="#"
                    onClick={() => onCityTitleClick(city)}
                  >
                    <span>{city.name}</span>
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

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
  ).isRequired,
  selectedCity: PropTypes.string.isRequired,
  onCityTitleClick: PropTypes.func.isRequired
};

export default CitiesList;
