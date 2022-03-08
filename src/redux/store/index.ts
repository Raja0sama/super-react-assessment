import { init } from "../../services/redux";

// List of model your want to attach to your store would go here.
export const models = {
  app: require("../models/app").default,
};

const { store, actions, effects, subscribers } = init();
export default store;
export { actions, effects, subscribers };
