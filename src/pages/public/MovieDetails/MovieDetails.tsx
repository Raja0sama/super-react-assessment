import React, { FC, useEffect, useState } from "react";

import Button from "../../../components/Button/Button";
import Layout from "../../../components/Layout/Layout";
import YouTube from "react-youtube";
import { effects } from "../../../redux/store";
import styles from "./MovieDetails.module.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

interface MovieDetailsProps {}

const MovieDetails: FC<MovieDetailsProps> = () => {
  const { id } = useParams<"id">();
  const { app } = effects;
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState<any>();
  const [currentVideo, setCurrentVideo] = useState<any>();

  useEffect(() => {
    dispatch(app.movieById()({ id, onSuccess }));
  }, []);

  const onSuccess = (data: any) => {
    setPageData(data);
  };
  if (!pageData) return <div>Loading...</div>;

  const genre = pageData?.genres?.map((item: any) => item.name).join(", ");
  return (
    <Layout back data-testid="MovieDetails">
      <div
        className={"max-w-screen-lg m-auto p-5 flex justify-center flex-col "}
      >
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
          <div className=" w-full">
            <img
              src={`https://image.tmdb.org/t/p/w500/${pageData?.poster_path}`}
            />
          </div>
          <div className="flex w-full flex-col justify-center">
            <p className="text-5xl">Movie details</p>
            <br />
            <h1 className="text-2xl">{pageData?.original_title}</h1>
            <p>
              {pageData?.tagline} ⭐️ {pageData?.vote_average} (Vote count{" "}
              {pageData?.vote_count})
            </p>
            <p>
              <b>GENRE : </b>
              {genre}
            </p>
            <br />

            <div>
              <Button type="secondary">{pageData?.status}</Button>
            </div>
            <br />
            <p>{pageData?.overview}</p>
            <br />
            <h1 className="text-3xl">Videos</h1>
            <p>
              The below boxes are the videos and content regarding the movies
              and clickable
            </p>
            <br />
            <div className="flex flex-wrap">
              {pageData?.videos.results.map((video: any) => (
                <a
                  href="#video"
                  onClick={() => setCurrentVideo(video)}
                  className="cursor-pointer p-2 border m-2"
                  key={video.id}
                >
                  {video.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <br />
        <div>
          <h1 className="text-xl text-center">Production Company </h1>
          <div className="flex flex-wrap justify-center">
            {pageData?.production_companies.map((video: any) => (
              <div
                // onClick={() => setCurrentVideo(video)}
                className="cursor-pointer p-2 border m-2"
                key={video.id}
              >
                {video.name}
              </div>
            ))}
          </div>
        </div>
        <div id="video">
          {currentVideo && (
            <div>
              <hr style={{ margin: "20px 0" }} />
              <h1 className="text-3xl">Videos : {currentVideo.name}</h1>

              <YouTube
                videoId={currentVideo.key}
                opts={{
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetails;
