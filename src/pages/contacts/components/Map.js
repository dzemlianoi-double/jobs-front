import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>; // eslint-disable-line react/prop-types

class SimpleMap extends Component {
  static propTypes = {
    center: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    text: PropTypes.array //????
  };


  static defaultProps = {
    center: {
      lat: 48.466510,
      lng: 35.046859
    },
    zoom: 15
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAHi__PZHk0MyHMOZUFRnjxJq1NN0dpeOc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={48.466510}
            lng={35.046859}
            text={'Worker'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
