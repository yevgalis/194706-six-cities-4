import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from './api';
import reducer from './reducers/reducer';
import {AsyncActions as DataAsyncActions} from './reducers/data/data';
import {ActionCreator} from './reducers/user/user';
import App from './components/app/app.jsx';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(`NO_AUTH`));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataAsyncActions.loadOffers());
// store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.querySelector(`#root`)
);
