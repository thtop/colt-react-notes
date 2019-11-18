import React, { Component } from 'react';
import './Dog.css';
import puppy from './puppy.PNG';

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>DOG!</h1>
        <img src={puppy} alt="puppy" className="Dog-img" />
        <p>Commander Lexa</p>
      </div>
    );
  }
}

export default Dog;
