import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import logo from './logo.svg';
import './App.css';
import messages from './messages';
import possibleLocales from '~/translations';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  handleChange(obj) {
    this.setState({ locale: obj.target.value });
    this.props.changeLocale(obj.target.value);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage {...messages.edit} /> <code>src/App.js</code>{' '}
            <FormattedMessage {...messages.save_reload} />
          </p>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.locale}
            onChange={this.handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
            variant="outlined"
          >
            {Object.keys(possibleLocales).map(function(_value) {
              return (
                <MenuItem key={_value} value={_value}>
                  {this[_value]}
                </MenuItem>
              );
            }, possibleLocales)}
          </TextField>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
