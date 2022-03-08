import React, { FC } from "react";

import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Layout from "../../../components/Layout/Layout";
import SearchBox from "../../../components/SearchBox/SearchBox";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

interface HomeProps {}
//
const Home: FC<HomeProps> = () => {
  const movies = useSelector((state: any) => state.app.movies);

  return (
    <Layout>
      <div
        className={"max-w-screen-lg m-auto p-5 flex justify-center flex-col "}
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl mb-5">
            <p>Hello Mom == Hello World</p>
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type
          </p>
        </div>
        <div className="flex justify-center mb-10 ">
          <SearchBox />
        </div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3">
          {movies.map((e: any) => {
            const d = new Date(e.release_date);
            const year = d.getFullYear();
            const monthName = new Intl.DateTimeFormat("en-US", {
              month: "long",
            }).format(d);
            return (
              <Box
                key={e.original_title}
                link={`/movie/${e.id}`}
                rating={e.vote_average}
                title={e.original_title}
                date={`${monthName} ${year}`}
                image={"https://image.tmdb.org/t/p/w500/" + e.backdrop_path}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
