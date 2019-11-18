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

ReactDOM.render(<App />, document.getElementById('root'));
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

- Properties are for configuring your component
- Properties are imutable

## Properties Requirments

- Properties are for configuring your component
- Properties are immutable
- Properties can be strings:

```js
<User name="Jane" title="CEO" />
```

- For other types, embed JS expression using the curly braces:

```js
<User name="Jane" salary={10000} nobbies={['bridge', 'reading', 'ta']} />
```

## Looping in JSX

- array.map(fn)

```js
class Messages extends React.Component {
  render() {
    const msgs = [
      { id: 1, text: 'Greetings!' },
      { id: 2, text: 'Goodbye!' }
    ];

    const lis = msgs.map(m => <li>{m.text}</li>);

    return <ul>{lis}</ul>;
  }
}
```

## Defalut Props

- Components can specify default values for missing props

```js
class Hello extends React.Component {
  static defaultProps = {
    from: 'Joel'
  };

  render() {
    return (
      <p>
        Hi {this.props.to} form {this.props.form}
      </p>
    );
  }
}
```

Set properties on element; get using **this.props.propName**.

```js
ReactDOM.render(
  <div>
    <Hello to="Students" from="Elie" />
    <Hello to="World" />
  </div>,
  document.getElementById("root");
)
```
