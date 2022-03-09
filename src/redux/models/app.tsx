/**
 * Each module state should be handled separately
 */

import { getMovies, movieDetail, searchMovies } from "../../services/movies";

import { actions } from "../store";

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
      movieDetail(_.id).then((e: any) => {
        _.onSuccess(e.data);
      });
    },
    searchMovies(_: any, { dispatch }: any) {
      searchMovies(_.search).then((e: any) => {
        _.onSuccess(e.data);
      });
    },
  },
  subscriptions: {
    fetchingMovies: ({ dispatch }: any) => {
      getMovies().then((e: any) => {
        dispatch(actions.app.setState({ movies: e?.data }));
      });
    },
    SayingHello: ({ dispatch }: any) => {
      let blackBackground = [
        "font-size: 50px",
        "background-color: black",
        "color: white",
        "padding: 10px",
      ].join(" ;");

      let whiteBackground = [
        "font-size: 50px",
        "background-color: white",
        "color: black",
        "padding: 10px",
      ].join(" ;");

      console.log(
        "%cAwesome stuff is %ccoming your way",
        blackBackground,
        whiteBackground
      );
      console.log("Welcome to the World of React");
      console.log("-");
      console.log(
        "This is Raja Osama and i hope you have a wonderful day ahead of you."
      );
    },
  },
  reducers: {
    setState: (state: any, acton: any) => {
      Object.entries(acton.payload).forEach(([key, value]) => {
        state[key] = value;
      });
    },
    setLoading: (state: any, acton: any) => {
      state.loading = acton.payload;
    },
  },
};
