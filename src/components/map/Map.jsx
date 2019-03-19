import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import hash from 'object-hash';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  map: {
    height: '100vh',
    width: '100vw',
  },
});

class JinjyaMap extends Component {
  render() {
    const position = [this.props.lat, this.props.lon];
    const { classes, data } = this.props;
    return (
      <div className={classes.map}>
        <Map center={position} zoom={12} className={classes.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <GeoJSON key={hash(data)} data={data} />
        </Map>
      </div>
    );
  }
}

export default withStyles(styles)(JinjyaMap);
