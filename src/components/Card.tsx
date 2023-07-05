const Card = ({
  id,
  title,
  year,
  desc,
  poster,
}: {
  id: number;
  title: string;
  year: string;
  desc: string;
  poster: string;
}) => {
  return (
    <a
      className="flex text-white md:w-[45%] h-[225px] gap-2 tracking-wide drop-shadow"
      href={`https://www.themoviedb.org/movie/${id}`}
      target="_blank"
    >
      <img
        className=" rounded-xl"
        src={`https://image.tmdb.org/t/p/w185${poster}`}
        width={150}
        alt="poster"
      />
      <div>
        <h2 className="font-bold text-xl clamped-2">{title}</h2>
        <h3 className="font-extrabold text-white/70 text-sm">{year}</h3>
        <p className="font-extrabold text-xs mt-2 clamped-4">{desc}</p>
      </div>
    </a>
  );
};

export default Card;
