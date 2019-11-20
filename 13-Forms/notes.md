# Forms in React

## Goals
- Build forms with React
- Understand what controlled components are

## One Source of Truth

- We make the React state be the 'single source of truth'
- React controls:
  - What is shown (the value of the component)
  - What happens the user types (this gets kept in state)
- Input elements controlled in this way are called 'controlled components.'

## Example Form Component

```js
class NameForm extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = { fullName: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this. handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    // do something with form data
    alert(`You types: ${this.state.username}`);
    this.setState({ username: ""});
  }

  handelChange(evt) {
    // runs on every keystroke event
    this.setState({
      fullName: evt.targat.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="fullname">Full Name:</label>
        <input name="fullname" value={this.state.fullName} onChange={this.handleChange}>
        <button>Add!</button>
      </form>
    );
  }
}
```

## Handling Multipoe Inputs

```js
import React from "react";

class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`You types: ${this.state.username}`);
    this.setState({ username: "" });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit">Add!</button>
        </form>
      </div>
    );
  }
}

export default FormDemo;
```

## The htmlFor Attribure

```js
<lable htmlFor="username">Username</lable>
```

## Design Pattern: Passing Date Upwards

## Keys UUID

- `npm install uuid`
