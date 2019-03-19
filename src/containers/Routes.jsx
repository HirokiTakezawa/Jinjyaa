import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

const Loading = props => {
  if (props.error) {
    window.location.reload();
  } else {
    return <div>Loading...</div>;
  }
};

// Dashboard
const Dashboard = Loadable({
  loader: () => import('~/containers/jinjyaMap/DashboardConnect'),
  loading: Loading,
});

const ConnectedSwitch = connect(state => ({
  location: state.router.location,
}))(Switch);

class Routes extends Component {
  render() {
    return (
      <div>
        <ConnectedSwitch>
          <Route exact path="/" component={Dashboard} />
        </ConnectedSwitch>
      </div>
    );
  }
}

export default Routes;
