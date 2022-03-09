import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import axios from "axios";
import config from "../config/config";

const { graphQLDataAdapter } = config;

/**
 * Apollo Client
 */
export const apolloClient = new ApolloClient({
  uri: "https://super-nset.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

const URL = "https://super-nset.herokuapp.com/movies/";

/**
 * A Wrapper that returns Rest Methods
 * @returns Rest Methods
 */
const getRestMethods = () => {
  console.log("🔥 Using Rest Methods");
  const getMovies = () => axios.get(`${URL}`);
  const movieDetail = (id: string) => axios.get(`${URL}${id}`);
  const searchMovies = (searchString: string) =>
    axios.get(`${URL}search?search=${searchString}`);

  return {
    getMovies,
    searchMovies,
    movieDetail,
  };
};

/*
 *  GraphQL Methods
 */
const getGraphQLMethods = () => {
  console.log("💧 Using GraphQL Methods");
  const getMovies = () => {
    return new Promise((resolve, reject) => {
      apolloClient.query({ query: DISCOVER_MOVIES }).then((e: any) => {
        if (e?.data?.movies) resolve({ data: e?.data?.movies });
      });
    });
  };
  const searchMovies = (searchString: string) => {
    return new Promise((resolve, reject) => {
      apolloClient
        .query({ query: SEARCH_MOVIES, variables: { query: searchString } })
        .then((e: any) => {
          if (e?.data?.movies) resolve({ data: e?.data?.movies });
        });
    });
  };
  const movieDetail = (id: string) => {
    return new Promise((resolve, reject) => {
      apolloClient
        .query({ query: MOVIE_DETAIL, variables: { id: id } })
        .then((e: any) => {
          if (e?.data?.movieDetail) resolve({ data: e?.data?.movieDetail });
        });
    });
  };

  return {
    getMovies,
    searchMovies,
    movieDetail,
  };
};

const useGraph = graphQLDataAdapter;
const { getMovies, searchMovies, movieDetail } = useGraph
  ? getGraphQLMethods()
  : getRestMethods();

export { getMovies, searchMovies, movieDetail };

/**
 * Below are GraphQL queries
 */

const DISCOVER_MOVIES = gql`
  {
    movies {
      title
      id
      original_title
      backdrop_path
      vote_average
      release_date
    }
  }
`;

const SEARCH_MOVIES = gql`
  query search($query: String) {
    movies(query: $query) {
      title
      id
    }
  }
`;

const MOVIE_DETAIL = gql`
  query movieDetail($id: String) {
    movieDetail(id: $id) {
      title
      genres {
        id
        name
      }
      overview
      original_title
      poster_path
      production_companies {
        name
      }
      status
      tagline
      videos {
        results {
          name
          key
        }
      }
    }
  }
`;
