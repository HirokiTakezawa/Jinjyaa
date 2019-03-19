import React, { Component } from 'react';
import Map from '~/components/map/Map';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  map: {
    height: '100vh',
    width: '100vw',
  },
});

class Dashboard extends Component {
  state = {
    // 現在地取れなかったときのためのデフォ値
    lat: 35.5569204,
    lon: 140.0613036,
    zoom: 13,
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          this.props.searchJinjyaByLatLon(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        error => {
          console.log(error);
          // 現在値が取れなければ、デフォ値で取得
          this.props.searchJinjyaByLatLon(this.state.lat, this.state.lon);
        }
      );
    } else {
      // 現在地のパーミッションが無ければ、デフォ値で取得
      this.props.searchJinjyaByLatLon(this.state.lat, this.state.lon);
    }
  }
  render() {
    const { classes, geoJson } = this.props;
    return (
      <Map
        className={classes.map}
        data={geoJson}
        lat={this.state.lat}
        lon={this.state.lon}
      />
    );
  }
}

export default withStyles(styles)(Dashboard);
