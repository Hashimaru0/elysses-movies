const Card = ({
  title,
  year,
  desc,
  poster,
}: {
  title: string;
  year: string;
  desc: string;
  poster: string;
}) => {
  return (
    <div className="flex text-white w-[45%] h-[180px] gap-2 tracking-wide">
      <img
        className="border-[3px]"
        src={`https://image.tmdb.org/t/p/original${poster}`}
        width={120}
        alt="poster"
      />
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <h3 className="font-extrabold text-white/70 text-sm">{year}</h3>
        <p className="font-extrabold text-xs mt-2 clamped">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
