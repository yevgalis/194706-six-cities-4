import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const rentCount = 312;
const rentOptions = [
  {
    id: 1,
    title: `Beautiful &amp; luxurious apartment at great location`,
    type: `Apartment`,
    price: 120,
    rating: `80%`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`
  },
  {
    id: 2,
    title: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    rating: `80%`,
    isPremium: false,
    imgSrc: `img/room.jpg`
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    price: 132,
    rating: `80%`,
    isPremium: false,
    imgSrc: `img/apartment-02.jpg`
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    price: 180,
    rating: `100%`,
    isPremium: true,
    imgSrc: `img/apartment-03.jpg`
  },
  {
    id: 5,
    title: `Wood and stone place`,
    type: `Private room`,
    price: 80,
    rating: `80%`,
    isPremium: false,
    imgSrc: `img/room.jpg`
  }
];

ReactDOM.render(
    <React.StrictMode>
      <App
        rentCount={rentCount}
        rentOptions={rentOptions}
      />
    </React.StrictMode>,
    document.querySelector(`#root`)
);
