# The World of React Events

## Goals

- Attach event handlers to components in React
- Use method binding to preserve the **this** context with event handlers
- Pass event handlers down as props to child components
- Understand the **key** prop that React asks for when mapping over data

## Event Attributes

- Mouse event: `onClick`, `onMouseOver`, etc
- Form events: `onSubmit`, etc
- Keyboard event: `onKeyDown`, `onKeyUp`, `onKeyPress`

## Example

```js
import React, { Comonent } from 'react';
import './WiseSquare.css';

class WiserSquare extends Component {
  dispenseWisdom() {
    let messages = [ /* wise message go here*/];

    let rIndex = Math,flool(Math.random() * message.lengnth);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div
        className="WiseSquare"
        onMouseEnter={this.disperseWisdom}
        >😎
        </div>
    );
  }
}

export default WiseSquare;

```

**AnnoyingForm.js**

```js
import React, { Component } from 'react';

class AnnoyingForm extends Componet {

  handleKeyUp(e) {
    if (e.keyCode === 56) {
      alert('****');
    } else {
      alert('BOO');
    }
  }

  render() {
    return (
      <div>
        <h3>Try Typing In Here:</h3>
        <textarea onKeyUp={this.handleKeyUp}>
      </div>
    )
  }
}

export default AnnoyingForm;
```

**CopyDemo.js**

```js
import React, { Component } from 'react';

class CopyDemo extends Component {
  handleCopy() {
    alert("STOP STEAING FROM ME!");
  }


  render() {
    return (
      <div>
        <h3>Try Coping Some of this Text: </h3>
      </div>
      <section
          style={{ width: "300px", display: "inline-block"}}
          onColy={this.hendleCopy}
          >
          Eu officia occaecat cillum cillum sint proident cupidatat mollit Lorem cillum est ad ex dolore. Duis do commodo consequat eu irure. Dolore duis minim ea eu occaecat ullamco consectetur commodo qui. Occaecat reprehenderit dolor magna quis fugiat enim irure tempor nulla proident id occaecat aliqua elit. Cillum ut sit veniam sunt consequat ut duis nostrud amet.
      </section>
    );
  }
}

export default CopyDemo;

```

## The keyword `this`

- When your event handlers reference the keyeord `this`, watch out!
- You will lose the `this` context when you pass a function as a handler
- Let's see what happens when we try to move our quotes into **defaultProps**

## Fixing our binding

1. Use **bind** inline

```js
<div onMouseEnter={this.dispenseWisdom.bind(this)}>😎</div>
```

- **Pros**
  - Very Explicit
- **Cons**
  - What if you nee to pass `this.dispenseWisdom` to multiple components?
  - new function created on very render

2. Use an arrow function

```js
<div onMouseEnter={() => this.dispenseWisdom()}>😎</div>
```

- **Pros**
  - No mention of bind!
- **Cons**
  - Intent less clear
  - Again, what if you need to pass the fn to multiple components?
  - new function created on every render

3. Method bind in the constructor

```js
// constructor
constructor(props) {
  super(prpos);
  this.dispenseWisdom = this.dispenseWisdom.bind(this);
}

// render
render() {
  return (
    <div onMouseEnter={this.dispenseWisdom}></div>
  )
}
```

- **Pros**
  - Only need to bind once!
  - More preformant

## Alternative Binding With Class Properties

```js
handleClick = () => {
  console.log('this is:', this);
}

render() {
  return (
    <button onClick={this.hamdleClick}>
      Click me
    </button>
  );
}
```

## Method Binding witt Arguments

```js
class ButtonList extends Component {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  };

  constructor(props) {
    super(props);
    this.state = { color: "cyam" };
  }

  changeColor(newColor) {
    console.log(`newColor is: ${newColor}`);
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map(c => {
          const colorObj = { backgroundColor: c };
          return (
            <button style={colorObj} onClick={this.changeColor.bind(this, c)}>
              Click on me!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
```

## Passing Methods to Child Components

- A very common parrern in REact
- The idea: childern are often not stateful, but need to tell parents to change state
- How we send data "back up" to a parent component

## How data flows

- A parent component defines a function
- The function is passed as a prop to a child component
- The child component invokes the prop
- The parent funciton is called, usually setting new state
- The parent component is re-rendered along with its children

**NumberList.js**

```js
class NumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 4, 5] };
  }

  remove(num) {
    this.setState(st => ({ nums: st.nums.filter(n => n !== num) }));
  }

  render() {
    let nums = this.state.nums.map(n => (
      <NumberItem value={n} remove={() => this.remove(n)} />
    ));

    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
```

**NumberItem.js**

```js
class NumberItem extends Component {
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.prpos.remove}>X</button>
      </li>
    );
  }
}

export default NumberItem;
```

---

## Better way!

**BetterNumberList.js**

```js
class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 3, 3, 5] };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState(st => ({ nums: st.nums.filter(n => n !== num) }));
  }

  render() {
    let nums = this.state.nums.map(n => (
      <BetterNumberItem key={n} value={n} remove={this.remove} />
    ));

    return (
      <div>
        <h1></h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}
```

**BetterNumberItem.js**

```js
class BetterNumberItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    this.props.remove(this.props.value);
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}

export default BetterNumberItem;
```

## Where to bind?

- The higher the better - don't bind in the child component if not needed.
- If you need a parameter, pass it down to the child as a prop, then bind in parent and child
- Avoid inline arrow functions / binding if possible
- No need to bind in the constructor **and** make an inline function
- If you get stuck, don't worry about performance, just try to get the communication working
  - You can always refactor later!

## Naming Conventions

- You can call these handlers whatever you want - React doesn't care
- For consistency, try to follow the `action` / `handleAction` pattern:
  - In the parent, give the function a name corresponding to the behavior (`remove`, `add`, `open`, `toggle`, etc.)
  - In the child, use the name of the action along with "handle" to name the event handler (`handleRemove`, `handleAdd`, `handleOpen`, `handleToggle`, etc.)

## List and Keys

- When mapping over data and returing components, you get a warning about keys for list items
- **key** is a special string attr to include when creating lists of elements

## Keys

- Keys help React identify which items are changed/added/removed.
- Keys should be given to repeated elems to provide a stable identitly.

## Picking a key

- Best way: use string that uniquely identiifies item among siblings.
- Most often you would use IDs from your data as keys:

```js
let todoItems = this.state.todos.map(todo => (
  <li key={todo.id}>{todo.text}</li>
));
```

## Lest resort

- When you don't have stable IDs for rendered items, you may use the iteration index as a key as a last resort:

```js
// Only do this if items have on stable IDs

const todoItems = this.state.todos.map((todo, index) => {
  <li key={index}>{todo.text}</li>;
});
```

- Don't use indexes for keys if item order may change or items can be delete.
- This can cause performance problems or bugs with component state.
