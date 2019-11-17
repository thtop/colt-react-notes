# Props and More

## Properties

- aks. Props
- A useful componetn is a reusable one.
- This often means making it configurable or customizable.

index.js

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" />
        <Hello t0="Cher" from="Sonny" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

Hello.js

```js
class Hello extens React.Componet {
  render() {
    console.log(this.props);

    const props = this.props;

    const { to, from } = this.props;

    return (
      <div>
        <p>Hi {this.props.to} from {this.props.from}</p>

        <p>Hi {props.to} from {props.from}</p>

        <p>Hi {to} from {from}</p>
      </div>
    )
  }
}
```

## Props are Immutable?
