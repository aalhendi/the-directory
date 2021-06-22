import { useState } from "react";
import { DataListWrapper } from "../styles.js";
import SearchBar from "./searchBar.js"
import DataItem from "./dataItem.js";
import movies from "../data.js";

const DataList = () => {
  //Search query
  const [query, setQuery] = useState("");

  //Array of Item Components that filtered by search bar query
  const movieList = movies
    .filter((movie) => movie.title.toLowerCase().includes(query))
    .map((movie) => <DataItem key={movie.id} movie={movie} />);

  return (<div><SearchBar setQuery={setQuery}/><DataListWrapper>{movieList}</DataListWrapper></div>);
};

export default DataList;
