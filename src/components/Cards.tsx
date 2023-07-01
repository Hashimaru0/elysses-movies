import Card from "./Card";
import movieData from "../assets/data.json";

const Cards = () => {
  return (
    <div className="flex gap-5 flex-wrap mt-10 ">
      {movieData.results.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.title}
            year={movie.release_date.split("-")[0]}
            desc={movie.overview}
            poster={movie.poster_path}
          />
        );
      })}
    </div>
  );
};

export default Cards;
