import { DataItemWrapper } from "../styles.js";
import { Link } from "react-router-dom";

const dataItem = (props) => {
  const movie = props.movie;
  return (
    <div>
      <DataItemWrapper>
        <h3>{movie.title}</h3>
        <Link to={`movies/${movie.slug}`}>
          <img src={movie.poster} alt={movie.title} width="150px" />
        </Link>
        <p>{movie.released}</p>
        <p>{movie.runtime}</p>
      </DataItemWrapper>
    </div>
  );
};

export default dataItem;
