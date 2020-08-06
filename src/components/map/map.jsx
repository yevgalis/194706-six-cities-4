import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {MapTypes} from '../../utils/const';

// TODO :: reduce render count

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._map = null;
    this._markers = [];
  }

  _initMap() {
    const {city: {location}} = this.props;
    const mapContainer = this._mapRef.current;
    const city = [location.latitude, location.longitude];
    const zoom = location.zoom;

    this._map = leaflet.map(mapContainer, {
      zoom,
      center: city,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, zoom);
  }

  _addLayer() {
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);
  }

  _addMarkers() {
    const {offers, activeCard} = this.props;

    offers.forEach((offer) => {
      const {location} = offer;
      const url = offer.id === activeCard ? `/img/pin-active.svg` : `/img/pin.svg`;
      const coordinates = [location.latitude, location.longitude];
      const icon = leaflet.icon({
        iconUrl: url,
        iconSize: [30, 30]
      });

      const marker = leaflet
        .marker(coordinates, {icon})
        .addTo(this._map);

      this._markers.push(marker);
    });
  }

  _removeMarkers() {
    this._markers.forEach((marker) => {
      this._map.removeLayer(marker);
    });
  }

  componentDidMount() {
    this._initMap();
    this._addLayer();
    this._addMarkers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeCard !== this.props.activeCard) {
      this._removeMarkers();
      this._addMarkers();
    }

    if (prevProps.offers.length !== this.props.offers.length) {
      this._removeMarkers();
      this._addMarkers();
    }

    if (prevProps.city.name !== this.props.city.name) {
      const {city: {location}} = this.props;
      const city = [location.latitude, location.longitude];
      const zoom = location.zoom;

      this._removeMarkers();
      this._map.setView(city, zoom);
      this._addMarkers();
    }
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {
    const mapStyle = this.props.type === MapTypes.MAIN
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
      PropTypes.object.isRequired
  ).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }).isRequired
  }).isRequired,
  activeCard: PropTypes.number,
  type: PropTypes.string.isRequired
};

export default Map;
