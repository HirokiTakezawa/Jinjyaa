import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as SearchJinjyaAction from '~/actions/SearchJinjyaAction';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

const geoJson = state => {
  return state.jinjyaState.jinjya.geoJson;
};

const fetchData = createSelector(
  [geoJson],
  geoJson => {
    return {
      geoJson,
    };
  }
);

const mapStateToProps = state => {
  return fetchData(state);
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(SearchJinjyaAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
