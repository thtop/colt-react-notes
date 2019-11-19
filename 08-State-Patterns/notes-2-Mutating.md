## Mutating State the Safe Way

- Until now, we've been setting to primitives: mainly numbers and string.
- But component state also commonly includes object, array, and arrays of objects.

```js
this.state = {
  // store an array of todo objects
  todos: [
    { task: 'do the dishes', done: false, id: 1}
    { task: 'vacuum the floor', done: true, id: 2}
  ]
}
```

## Mutable Date Structures

- You have to be extra careful modifying your array of objects!

```js
completeTodo(id) {
  const theTodo = this.state.todos.find(t => t.id === id);
  theTodo.done = true; // NOOOOO
}

this.setState({
  todos: this.state.todos // bad
})

```

- Why? It's a long story...
- Mutating nested data structures in your state can cause problem w/ React. (A lot of the time it'll be fine, but that doesn't matter. Just don't do it!)

## Immutable State Updates

- A much better way is to make a new copy of the data structure in question. We can use any **pure function to do this...**

```js
completeTodo(id) {
  // Array.prototypes.map returns a new array
  const newTodos = this.state.todos.map(todo => {
    if (todo.id === id) {
      // make a copy of the todo object with done -> true
      return { ...todo, done: true };
    }
    return todo; // old todos can pass through
  });

  this.setState({
    todos: newTodos // setState to the new array
  });
}
```

- Pure function such as **.map**, **.filter**, and **.reduce** are your friends. So is the **...spread operator**.

- There is a slight efficiency cost due to the O(N) space/time required to make a copy, but it's almost always worth it to ensure that your app doesn't have extremely difficult to detect bugs due to mischevious side effects.

## Immutable State Summary

- While it sounds like an oxymoron, immutable state just means that there is an old state object and a new state object that are both snapshots in time.
- The safest way to update state is to make a copy of it, and then call **this.setState** with the new copy.
- This pattern is a good habit to get into for React apps and required for usng Redux.
  
  