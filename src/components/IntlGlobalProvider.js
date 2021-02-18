import { Component } from 'react';
import { injectIntl } from 'react-intl';

/**
 * Should only use this when not inside a React component (such as redux actions), see:
 * https://github.com/yahoo/react-intl/issues/416
 */
export let intl = null;

class IntlGlobalProvider extends Component {
  constructor(props) {
    super(props);
    intl = this.props.intl;
  }

  render() {
    return this.props.children;
  }
}

export default injectIntl(IntlGlobalProvider);
