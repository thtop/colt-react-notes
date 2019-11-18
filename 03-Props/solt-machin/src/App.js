import React from 'react';
import Machine from './Machine';
import Friends from './Friends';
import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="A" s2="A" s3="A" />
        <Machine s1="A" s2="A" s3="B" />

        <Friends name="Elton" hobbies={['Piano', 'Singing', 'Dancing']} />

        <Friends name="Lexa" hobbies={['Guitar', 'Singing', 'Dancing']} />

        <Hello to="Ringo" from="Paul" bangs={4} />
        <Hello to="Gorge" />
      </div>
    );
  }
}

export default App;
