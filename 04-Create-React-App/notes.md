# Introducing Create React App

## Goals

- Understand what Create React App is and how to use it
- Use ES2015 modules to share code across files
- Compare default vs. non-default exports

## Create React App

- **create-react-app** is a utility script that:
- Creates a skeleton react project
- Sets it up so that JS files are run through Babel automatically
- Lets us use super-modern Javascript features/idioms
- Makes testing & deployment much easier

## Ways of installing CRA

- Node.js
- `node -v`
- `npm -v`

- `npm install -g create-react-app`
- `create-react-app app_name`

- `npx create-react-app app_name`

## To Default or Not?

- Conventionally, default exports are used when there's a 'most likely' thing to exporting.
- For example, in a React component file, it's common to have the component be the defalut export.
- You never **need** to make a default export, but it can e helpful to indicate the most important thing in a file.

## CRA and Componets

Good style:

- Eeach React component goes in separate file
  - **src/Car.js** for **Car** component
  - **src/House.js** fro **House** componet
- Components extends Component (imported from React)
  - Export the component as the default object
- Skeleton assumes top object is **App** in **App.js**
  - Best to keep this

## Assets and CRA

- `import './App.css`;
- Make a CSS file for each React component
  - **House.css** for **House** component
- Import it at the top of **House.js**
  - Create-React-App will automaticlly load that CSS
- Conventional to add `className="House"` onto House div
  - And use that as prefix for sub-ittems to style:
  ```js
  <div className="House">
    <p className="House-title">{this.props.title}</p>
    <p className="House-address">{this.props.addr}</p>
  </div>
  ```

## Images

- Store images in **src/**folder with the components
- Load them where needed, and use imported name where path should go:

```js
import puppy from './puppy.jpg';

class Animal extends React.Component {
  render() {
    return (
      <div>
        <img src={puppy} alt="Cute puppy!" />
      </div>
    );
  }
}
```
