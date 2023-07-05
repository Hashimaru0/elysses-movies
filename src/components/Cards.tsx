import Card from "./Card";
// Types
import { Movie } from "../types/types";

const Cards = ({ data }: { data: Movie[] }) => {
  return (
    <>
      <div className="relative flex justify-center flex-col md:flex-row max-w-[768px] gap-5 flex-wrap px-5 mt-[1rem] mx-auto z-10">
        {data.map((movie) => {
          return (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date.split("-")[0]}
              desc={movie.overview}
              poster={movie.poster_path}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
