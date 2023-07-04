import { useEffect, useState } from "react";

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
      className="flex text-white md:w-[45%] h-[180px] gap-2 tracking-wide bg-blue-600"
      href={`https://www.themoviedb.org/movie/${id}`}
      target="_blank"
    >
      <img
        className="border-[3px]"
        src={`https://image.tmdb.org/t/p/w154${poster}`}
        width={120}
        alt="poster"
      />
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <h3 className="font-extrabold text-white/70 text-sm">{year}</h3>
        <p className="font-extrabold text-xs mt-2 clamped">{desc}</p>
      </div>
    </a>
  );
};

export default Card;
