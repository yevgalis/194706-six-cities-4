import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = ({cities}) => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((city) => {
              return (
                <li key={city} className="locations__item">
                  <a className={`locations__item-link tabs__item ${city === `Amsterdam` ? `tabs__item--active` : ``}`} href="#">
                    <span>{city}</span>
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
      PropTypes.string.isRequired
  ).isRequired
};

export default CitiesList;
