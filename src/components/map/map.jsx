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

  _addMarker(coordinates, map) {
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    leaflet
      .marker(coordinates, {icon})
      .addTo(map);
  }

  componentDidMount() {
    const {offers} = this.props;
    const mapContainer = this._mapRef.current;
    const map = this._initMap(mapContainer);

    this._addLayer(map);
    offers.forEach((offer) => this._addMarker(offer.coordinates, map));
  }

  componentWillUnmount() {
    const mapContainer = this._mapRef.current;
    mapContainer.remove();
  }

  render() {
    return (
      <section className="cities__map">
        <div
          ref={this._mapRef}
          id="map"
          style={{width: `100%`, height: `100%`}}
        />
      </section>
    );
  }
}

Map.propTypes = {
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
  ).isRequired,
};

export default Map;
