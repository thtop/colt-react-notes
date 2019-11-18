import React from 'react';
import ReactDOM from 'react-dom';

import { foods } from './foods';
import { choice, remove } from './helpers';
import App from './App';

// Randomly draw a fruit from the array
let fruit = choice(foods);

// Log the message “I’d like one RANDOMFRUIT, please.”
console.log(`I'd like one ${fruit}, please.`);

// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${fruit}`);

// Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?');

// Remove the fruit from the array of fruits
let remaining = remove(foods, fruit);

// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

ReactDOM.render(<App />, document.getElementById('root'));
