# Introducing React Hooks

- Gradual Adoption Strategy

## Class Component

```js
import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}

export default CounterClass;

```


## Function Component (Hooks - useState)

```js
import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1 Hooks</button>
    </div>
  );
}

export default CounterHooks;

```