<h1 align="center">
<br>
GITHOOKS
</h1>

<p align="center">Simple project used to learn React Hooks. Based on the video <a href="https://youtu.be/6WB16wZS61c">React Hooks na prática</a>, by Rocketseat.</p>

## Features

[//]: # "Add the features of your project here:"

This app is built using:

- ⚛️ **React Js** — A JavaScript library for building user interfaces

## Key observations

- **useState**

  Hook used to store a piece of state and modify it. Returns two values: the state and the function used to modify it. Receives an argument, which is the initial state.

  ```js
  const [repositories, setRepositories] = useState([]);
  ```

  In the example above, there's a state called `repositories`, which initial value is `[]`. To update it, it's necessary to call `setRepositories`, like shown below:

  ```js
  setRepositories([...repositories, { id: Math.random(), name: "New repo" }]);
  ```

- **Functions inside components**

  Since components are now written as functions instead of classes, there's no need to use **this** anymore. To use functions, simply declare them inside your component (yes! functions inside functions). In JavaScript, when a function is declared inside another function, it gets scoped inside its parent. That way, it is not possible to access it externally.

- **useEffect**

  The `useEffect` hook receives two params: (1) the function to be executed and (2) the circumstances when this function should be executed. Those circumstances are, in fact, events of variables changing. For the example below, the function will be executed every time the variable `repositories` changes.

  ```js
  useEffect(() => {}, [repositories]);
  ```

  Note: it's possible to pass more than one variable to the hook, that's why the second argument is an array.

- **How to use lifecycles?**

  Now that components are written as functions, lifecycles are used through the `useEffect` hook.

  - _componentDidMount_: executed only once, after component is mounted. To reproduce it using hooks, pass an empty array. As there is no variables passed, it will listen to nothing, never being triggered again.

  ```js
  useEffect(() => {}, []);
  ```

  - _componentDidUpdate_: executed on every component update. To reproduce it using hooks, pass one or more variables. Note that now it's possible to have several _componentDidUpdate_ behaviours, one for each state piece.

  ```js
  useEffect(() => {}, [repositories]);
  ```

  - _componentWillUnmount_: executed when component is umnounted. To reproduce it using hooks, the `useEffect` hook must return a function. Every function returned by an `useEffect` hook is executed when a component is unmounted and no longer exists. Note that now it's possible to have several _componentWillUnmount_ behaviours, one for each state piece.

  ```js
  useEffect(() => {
    // function body

    return () => {}; // function to be executed when component unmounts
  }, []);
  ```

  Example using concept of subscribing and unsubscribing listeners:

  ```js
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  ```

## Getting started

To run this project, just clone it and execute the following:

```js
yarn install            // install dependencies
yarn start              // run project
```
