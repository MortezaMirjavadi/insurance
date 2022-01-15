import {
  createStore as buildReduxStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import reducers from "./rootReducer";

export function createStore({ initialState = {}, thunkArguments = {} }) {
  const middlewares = compose(
    applyMiddleware(thunk.withExtraArgument(thunkArguments)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  );

  return buildReduxStore(reducers, initialState, middlewares);
}
