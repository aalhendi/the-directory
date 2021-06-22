import { SearchBarStyled } from "../styles.js";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(e) => props.setQuery(e.target.value)}
      placeholder="Search Movies"
    ></SearchBarStyled>
  );
};

export default SearchBar;
