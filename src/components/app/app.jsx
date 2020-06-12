import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = ({rentCount, rentOptions}) => {
  return (
    <Main
      rentCount={rentCount}
      rentOptions={rentOptions}
    />
  );
};

App.propTypes = {
  rentCount: PropTypes.number.isRequired,
  rentOptions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        imgSrc: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
