import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  _initMap(element) {
    const city = [52.38333, 4.9];
    const zoom = 12;
    const map = leaflet.map(element, {
      zoom,
      center: city,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    return map;
  }

  _addLayer(map) {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);
  }

  _addMarker(coordinates, map, isActive = false) {
    const url = isActive ? `/img/pin-active.svg` : `/img/pin.svg`;
    const icon = leaflet.icon({
      iconUrl: url,
      iconSize: [30, 30]
    });

    leaflet
      .marker(coordinates, {icon})
      .addTo(map);
  }

  componentDidMount() {
    const {offers, activeCard} = this.props;
    const mapContainer = this._mapRef.current;
    const map = this._initMap(mapContainer);

    this._addLayer(map);
    offers.forEach((offer) => {
      const isActive = offer.id === activeCard;
      this._addMarker(offer.coordinates, map, isActive);
    });
  }

  componentWillUnmount() {
    const mapContainer = this._mapRef.current;
    mapContainer.remove();
  }

  render() {
    const mapStyle = this.props.type === `cities`
      ? {width: `100%`, height: `100%`}
      : {width: `1144px`, height: `100%`, margin: `0 auto`};

    return (
      <section className={`${this.props.type}__map map`}>
        <div
          ref={this._mapRef}
          id="map"
          style={mapStyle}
        />
      </section>
    );
  }
}

Map.defaultProps = {
  activeCard: null
};

Map.propTypes = {
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
        isBookmarked: PropTypes.bool.isRequired,
        features: PropTypes.array.isRequired,
        imgSrc: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ),
      })
  ).isRequired,
  activeCard: PropTypes.number,
  type: PropTypes.string.isRequired
};

export default Map;
