import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({});

export class Layout extends Component {
  render () {
    return (
      <div>
        {React.Children.only (this.props.children)}
      </div>
    );
  }
}

export default withStyles (styles) (Layout);
