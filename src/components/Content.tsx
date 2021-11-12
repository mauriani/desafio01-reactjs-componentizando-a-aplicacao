import { MovieCard } from "./MovieCard";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Props {
  title: string;
  movie: MovieProps[];
}

export function Content(props: Props) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {props.movie.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
