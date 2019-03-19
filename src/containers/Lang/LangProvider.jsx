import React, { Component } from 'react';
import ConnectedIntlProvider from './ConnectedIntlProvider';

export class LangProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale || 'en',
      messages: require(`../../translations/${this.props.locale || 'en'}.json`),
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  getMessages() {
    return require(`../../translations/${this.props.locale || 'en'}.json`);
  }
  getLocate() {
    return this.props.locale || 'en';
  }

  render() {
    return (
      <ConnectedIntlProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        {React.Children.only(this.props.children)}
      </ConnectedIntlProvider>
    );
  }
}

export default LangProvider;
