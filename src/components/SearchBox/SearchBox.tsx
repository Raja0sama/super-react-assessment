import React, { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { effects } from "../../redux/store";
import styles from "./SearchBox.module.scss";
import { useDispatch } from "react-redux";

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { app } = effects;
  const dispatch = useDispatch();
  useEffect(() => {
    if (search) {
      dispatch(app.searchMovies()({ search, onSuccess }));
    } else {
      setSearchData([]);
      setSearch("");
    }
  }, [search]);

  const onSuccess = (data: any) => {
    setSearchData(data);
  };

  return (
    <div
      data-testid="SearchBox"
      className="flex border-2 hover:border-4 border-glow p-1 rounded-lg flex justify-center items-center relative shadow-md shadow-glow"
    >
      <input
        type="email"
        className="bg-bg w-96 text-white h-10 pl-4"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchData.length ? (
        <div className="absolute inset-0  min-h-fit mt-14 text-black">
          {searchData.map((item: any) => (
            <Link to={`/movie/${item.id}`}>
              <p className="p-2 bg-white mb-2 rounded text-xl">{item.title}</p>
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBox;
