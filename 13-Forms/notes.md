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