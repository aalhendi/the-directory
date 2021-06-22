import { DataDetailWrapper } from "../styles.js";
import { useParams, Redirect, Link } from "react-router-dom";
import movies from "../data.js";

const DataDetail = () => {
  const movieSlug = useParams().movieSlug;
  const movie = movies.find((movie) => movie.slug === movieSlug);

  if (!movie) {
    return <Redirect to="/movies" />;
  }
  return (
    <DataDetailWrapper>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.genre}</p>
      <p>{movie.runtime}</p>
      <p>{movie.plot}</p>
      <Link to="/movies">
        <button>Back</button>
      </Link>
    </DataDetailWrapper>
  );
};

export default DataDetail;
