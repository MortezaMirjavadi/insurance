import { createStore } from "./store";
import { createApiInterface } from "@App/api";

const api = createApiInterface();

const store = createStore({
  thunkArguments: {
    api,
  },
});

export { api, store };
