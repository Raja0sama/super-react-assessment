import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// List of model your want to attach to your store would go here.
const models = {
  app: require("../models/app").default,
};

const getAllSlices = () => {
  const slices = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const slice = createSlice(model);
    acc[`${key}`] = slice;
    return acc;
  }, {});

  return slices;
};

const thunkWrapper = (name: string, func: any) =>
  createAsyncThunk("users/fetchByIdStatus", async (...props: any) => {
    func(...props);
  });

const getAllEffects = () => {
  const effects = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const effects = model.effects;

    const _effects = Object.entries(effects).map((effect: any) => ({
      [effect[0]]: () =>
        thunkWrapper(`${key}/${effect[0]}`, (...p: any) => {
          // console.log();
          return effect[1](p[0], p[1]);
        }),
    }));

    acc[`${key}`] = _effects.reduce((acc: any, curr: any) => {
      return { ...acc, ...curr };
    }, {});

    return acc;
  }, {});

  console.log({ ...effects });
  return effects;
};

const subscriptions = (dispatch: any) => {
  console.log({ dispatch });
  const subscribers = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const subscriptions = model?.subscriptions;
    acc = { ...acc, ...subscriptions };
    return acc;
  }, {});

  Object.values(subscribers).forEach((e: any) => {
    console.log({ e });
    Promise.resolve(e({ dispatch }));
  });

  console.log(subscribers);
};

const init = () => {
  const effects = getAllEffects();
  const slices = getAllSlices();
  const { _reducer, _action } = Object.entries(slices).reduce(
    (acc: any, curr: any) => {
      const [key, slice] = curr;
      acc._reducer[`${key}`] = slice.reducer;
      acc._action[`${key}`] = slice.actions;
      return acc;
    },
    { _reducer: {}, _action: {} }
  );

  return {
    store: configureStore({ reducer: _reducer }),
    actions: _action,
    effects: effects,
    subscribers: subscriptions,
  };
};

const { store, actions, effects, subscribers } = init();
export default store;
export { actions, effects, subscribers };
