import { getMovies, movieDetail, searchMovies } from "./movies";

it("To Return Movies ", async () => {
  const movies: any = await getMovies();
  const condition = Array.isArray(movies.data);
  expect(condition).toBe(true);
});
it("To Return Movie By Id", async () => {
  const movie: any = await movieDetail("634649");
  const condition = movie.data.title ? true : false;
  expect(condition).toBe(true);
});
it("To Search Movie", async () => {
  const movies: any = await searchMovies("super");
  const condition = Array.isArray(movies.data);
  expect(condition).toBe(true);
});
