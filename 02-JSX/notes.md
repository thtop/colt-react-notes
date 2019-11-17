# Introfucing JSX

## JavaScript + HTML

- JSX isn't legal JavaScript
  - It has to be 'transpiled' to JavaScropt

```js
class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementByIt("root"));
```

## Embedding JavaScript JSX

```js
function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.rando() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Moos is : {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementByIt("root"));
```

## Conditionals in JSX

```js
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;

    if (num === 7 ) {
      msg =
        <div>
          <h2>CONGRATS YOU WIN!</h2>
          <img src="url"/>
        </div>
    } else {
      msg = <p>Sorry You Lose!</p>;
    }

    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{num === 7 ? "Congrats" : "Unlucky"}</p>

        {num === 7 ? <img src="url"> : null}

        {num === 7 && <img src="url">}

        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
```

## Standard React App Layout

- 1 component per file
- index.js
- App.js
- Hello.js

- It's convertional for the top-level component to be named **App**.
- This renders the other componetns:
- This way, readers of code know where to start
- This is usually the only thing rendered in **index.js**

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Greetings!</h1>
        <Hello />
        <Googbye />
      </div>
    );
  }
}
```
