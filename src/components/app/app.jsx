import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import Property from '../propperty/property.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._renderApp = this._renderApp.bind(this);
    this.cardTitleClickHandler = this.cardTitleClickHandler.bind(this);
  }

  _renderApp() {
    const {offersCount, offers} = this.props;

    return (
      <Main
        offersCount={offersCount}
        offers={offers}
        onCardTitleClick={this.cardTitleClickHandler}
      />
    );
  }

  cardTitleClickHandler() {
    return {};
  }

  render() {
    const {offers} = this.props;

    return (
      <Switch>
        <Route exact path="/">
          {this._renderApp}
        </Route>
        <Route path="/dev">
          <Property offers={offers} />
        </Route>
        <Route path="/offer/:id">
          <Property offers={offers} />
        </Route>
      </Switch>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        capacity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        features: PropTypes.array.isRequired,
        imgSrc: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ),
      })
  ).isRequired
};

export default App;
