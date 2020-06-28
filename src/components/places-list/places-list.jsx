import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  _handleCardHover(id) {
    this.setState({hoveredCard: id});
  }

  render() {
    const {offers, onCardTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => {
            return (
              <PlaceCard
                key={offer.id}
                offer={offer}
                onCardTitleClick={onCardTitleClick}
                onCardHover={this._handleCardHover}
              />
            );
          })
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired,
        isPremium: PropTypes.bool.isRequired,
        imgSrc: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(
            PropTypes.number.isRequired
        )
      })
  ).isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
