import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { models } from "../redux/store";

/**
 * We use React Toolkit's createSlice to create a slice for each model.
 *
 * @returns
 */
const getAllSlices = () => {
  const slices = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const slice = createSlice(model);
    acc[`${key}`] = slice;
    return acc;
  }, {});

  return slices;
};

/**
 * Thunk Injector for the effects in each model
 *
 * @param name
 * @param func
 * @returns
 */
const thunkWrapper = (name: string, func: any) =>
  createAsyncThunk("users/fetchByIdStatus", async (...props: any) => {
    func(...props);
  });

/**
 * A little helper to make each model's effects available in the store, wrapping them with thunk.
 *
 * @returns
 */
const getAllEffects = () => {
  const effects = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const effects = model.effects;

    const _effects = Object.entries(effects).map((effect: any) => ({
      [effect[0]]: () =>
        thunkWrapper(`${key}/${effect[0]}`, (...p: any) => {
          return effect[1](p[0], p[1]);
        }),
    }));

    acc[`${key}`] = _effects.reduce((acc: any, curr: any) => {
      return { ...acc, ...curr };
    }, {});

    return acc;
  }, {});

  return effects;
};

/**
 * Instant Initiator for the model's subscriptions.
 *
 * @param dispatch
 */
const subscriptions = (dispatch: any) => {
  const subscribers = Object.entries(models).reduce((acc: any, curr: any) => {
    const [key, model] = curr;
    const subscriptions = model?.subscriptions;
    acc = { ...acc, ...subscriptions };
    return acc;
  }, {});

  Object.values(subscribers).forEach((e: any) => {
    Promise.resolve(e({ dispatch }));
  });
};

/**
 * Normal Initiator function to initialize the store, effects, actions, and subscriptions.
 *
 * @returns
 */
export const init = () => {
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
