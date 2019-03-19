import App from './App';
import { connect } from 'react-redux';
import * as localeStateActions from '~/actions/LangAction';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';

const locales = state => {
  return state.localeState.locale.code;
};

const fetchData = createSelector(
  [locales],
  code => {
    return {
      locale: code,
    };
  }
);

const mapStateToProps = state => {
  return fetchData(state);
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(localeStateActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
