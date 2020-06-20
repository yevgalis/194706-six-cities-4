import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers';

ReactDOM.render(
    <React.StrictMode>
      <App
        offersCount={312}
        offers={offers}
      />
    </React.StrictMode>,
    document.querySelector(`#root`)
);
