import React from 'react';
import './Machine.css';

class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;

    return (
      <div className="Machine">
        <label htmlFor="name">Name: </label>
        <p>
          {s1} {s2} {s3}
        </p>
        <p style={{ fontSize: '20px', color: 'red' }}>
          {winner ? 'Winner!' : 'Loser!'}
        </p>

        <p className={winner ? 'win' : 'lose'}>
          {winner ? 'Winner!' : 'Loser!'}
        </p>
      </div>
    );
  }
}

export default Machine;
