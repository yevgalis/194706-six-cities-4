import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const cardTitleClickHandler = () => {};

const App = ({offersCount, offers}) => {
  return (
    <Main
      offersCount={offersCount}
      offers={offers}
      onCardTitleClick={cardTitleClickHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        imgSrc: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
