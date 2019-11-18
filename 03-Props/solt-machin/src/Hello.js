import React from 'react';

class Hello extends React.Component {
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  };

  render() {
    let bangs = '!'.repeat(this.props.bangs);

    return (
      <div>
        <p>
          Hi P{this.props.to} from {this.props.from}
          {bangs}
        </p>
      </div>
    );
  }
}

export default Hello;
