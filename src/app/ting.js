import React from 'react';
import {Link} from 'react-router';

class Ting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={'/'}>TO DA TINGS</Link>
        <h2>DIS A TING MON</h2>
      </div>
    );
  }
}

module.exports = Ting;
