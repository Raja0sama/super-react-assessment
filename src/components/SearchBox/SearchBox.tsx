import React, { FC, useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import { effects } from "../../redux/store";
import { useDispatch } from "react-redux";

interface SearchBoxProps {}

const SearchBox: FC<SearchBoxProps> = () => {
  const [searchData, setSearchData] = useState([]);
  const { app } = effects;
  const dispatch = useDispatch();

  const onSuccess = (data: any) => {
    setSearchData(data);
  };

  const changeHandler = ({ target }: any) => {
    const search = target.value;
    if (search) {
      dispatch(app.searchMovies()({ search, onSuccess }));
    } else {
      setSearchData([]);
    }
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  return (
    <div
      data-testid="SearchBox"
      className="flex border-2 hover:border-4 border-glow p-1 rounded-lg flex justify-center items-center relative shadow-md shadow-glow"
    >
      <input
        onChange={debouncedChangeHandler}
        type="email"
        className="bg-bg w-96 text-white h-10 pl-4"
        placeholder="Search"
        // onChange={(e) => setSearch(e.target.value)}
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
