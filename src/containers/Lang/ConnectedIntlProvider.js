import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import { createSelector } from 'reselect';

// This function will map the current redux state to the props for the component that it is "connected" to.
// When the state of the redux store changes, this function will be called, if the props that come out of
// this function are different, then the component that is wrapped is re-rendered.
const selectLocale = state => {
  return state.localeState.locale;
};

const changelocale = createSelector(
  [selectLocale],
  locale => {
    if (locale) {
      let possibleLocale = locale.get('code') || 'en';
      addLocaleData(require(`react-intl/locale-data/${possibleLocale}`));
      let messages = require(`../../translations/${possibleLocale}.json`);

      return Object.assign(
        {},
        { locale: possibleLocale, messages: messages, key: possibleLocale }
      );
    }
  }
);

const mapStateToProps = state => {
  return changelocale(state);
};

export default connect(mapStateToProps)(IntlProvider);
