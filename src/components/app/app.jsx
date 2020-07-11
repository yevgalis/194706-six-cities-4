import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getOffers, getCities} from '../../reducers/data/selectors';
import Main from '../main/main.jsx';
import Property from '../propperty/property.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this._cardHoverHandler = this._cardHoverHandler.bind(this);
  }

  _cardHoverHandler(id) {
    this.setState({hoveredCard: id});
  }

  render() {
    const {hoveredCard} = this.state;
    const {offers, cities} = this.props;

    return (
      <Switch>
        <Route exact path="/">
          <Main
            offers={offers}
            cities={cities}
            hoveredCard={hoveredCard}
            onCardHover={this._cardHoverHandler}
          />
        </Route>
        <Route path="/offer/:id">
          <Property offers={offers} />
        </Route>
      </Switch>
    );
  }
}

// App.propTypes = {
//   offers: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         type: PropTypes.string.isRequired,
//         bedrooms: PropTypes.number.isRequired,
//         capacity: PropTypes.number.isRequired,
//         price: PropTypes.number.isRequired,
//         rating: PropTypes.string.isRequired,
//         isPremium: PropTypes.bool.isRequired,
//         isBookmarked: PropTypes.bool.isRequired,
//         features: PropTypes.array.isRequired,
//         imgSrc: PropTypes.string.isRequired,
//         coordinates: PropTypes.arrayOf(
//             PropTypes.number.isRequired
//         ),
//       })
//   ).isRequired,
//   cities: PropTypes.arrayOf(
//       PropTypes.string.isRequired
//   ).isRequired
// };

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  cities: getCities(state)
});

export {App};
export default connect(mapStateToProps)(App);
