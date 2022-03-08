/**
 * Each module state should be handled separately
 */

import { getMovies, movieDetail, searchMovies } from "../../services/movies";

import { actions } from "../store";
import axios from "axios";

const name = "app";

export default {
  name,
  initialState: {
    value: 0,
    movies: [],
    loading: 0,
  },
  effects: {
    movieById(_: any, { dispatch }: any) {
      console.log({ _ });
      movieDetail(_.id).then((e) => {
        _.onSuccess(e.data);
      });
    },
    searchMovies(_: any, { dispatch }: any) {
      searchMovies(_.search).then((e) => {
        _.onSuccess(e.data);
      });
    },
  },
  subscriptions: {
    hello: ({ dispatch }: any) => {
      getMovies().then((e) => {
        dispatch(actions.app.setState({ movies: e.data }));
      });
    },
  },
  reducers: {
    setState: (state: any, acton: any) => {
      console.log(actions);
      Object.entries(acton.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    setLoading: (state: any, acton: any) => {
      state.loading = acton.payload;
    },
  },
};
