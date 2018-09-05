import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import icon from '../../../assets/images/contacts/map-icon.png';

const AnyReactComponent = () => {
  return (
    <div>
      <img src={icon} className="w-20"/>
      <div className="map-label">Worker.dp.ua</div>;
    </div>
  );
};

class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    text: PropTypes.array
  };


  static defaultProps = {
    center: {
      lat: 48.466509,
      lng: 35.046858
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '28vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAHi__PZHk0MyHMOZUFRnjxJq1NN0dpeOc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.466510}
            lng={35.046859}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
