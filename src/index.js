import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          offersCount={312}
          offers={offers}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.querySelector(`#root`)
);
