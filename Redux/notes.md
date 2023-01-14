# Redux Notes :D
## The Basics:
### What is it?
- A Complex State Management Tool with a single store as CDS

## Reducers
- Manages the State and Returns the newly updated stated

## Actions
- Actions have 2 properties type: which is a unique identifier and payload which has data

## Dispatch
- dispatch is used to send actions to update the data

## Installation:
redux core:
```
npm i redux
```

redux and react integration layer:
```
npm i react-redux
```

redux toolkit - redux development library
```
npm i @reduxjs/roolkit
```

## Usage:
documentation(redux toolkit): https://redux-toolkit.js.org/introduction/getting-started
- the `createStore` function has been deprecated and it is recommended using the `configureStore` method of the @reduxjs/toolkit package, which replaces createStore. `
configureStore` from Redux Toolkit is an improved version of `createStore` that simplifies setup and helps avoid common bugs.

- `configureStore` - return a configured redux store. Accept Parameters: reducers, middleware, devTools, preloadedState, and enhancers.
    - reducer: 

- `useSelector` - A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state. This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.

- `useDispatch` - A hook to access the redux dispatch function. The dispatch function takes in an action object, which takes in an object that contains `type` and `payload`. `type` defines the name of the action, `payload` contains the data for the action

- `createSlice` - A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state. 

## Fetching Asynchronous Data:
- reducer functions are synchronous, so we can't fetch asynchronous data via a reducer function
- 2 ways to work around this:
    - useEffect hook
    - action creators - thunks

### Thunk:
- a thunk is a function that delayed some action until later. Thnks are pattern of writing functions with logic inside that can interact with a Redux store's `dispatch` and `getState` methods. Thunks require `redux-thunk` middleware to be added to the Redux store as part of its configuration. Thunks are the standard approach for writing async logic in Redux apps, and are commonly used for data fetching. They can be used for both synchronous and asynchronous logic. 