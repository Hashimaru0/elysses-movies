import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import NavBanner from "./components/NavBanner";

import s1920 from "./assets/imgs/1920s.jpg";
import s1930 from "./assets/imgs/1930s.jpg";
import s1940 from "./assets/imgs/1940s.jpg";
import s1950 from "./assets/imgs/1950s.jpg";
import s1960 from "./assets/imgs/1960s.jpg";
import s1970 from "./assets/imgs/1970s.jpg";
import s1980 from "./assets/imgs/1980s.jpg";
import s1990 from "./assets/imgs/1990s.jpg";
import s2000 from "./assets/imgs/2000s.jpg";
import s2010 from "./assets/imgs/2010s.jpg";
import s2020 from "./assets/imgs/2020s.jpg";

import Y1920 from "./components/titles/Y1920";
import Y1930 from "./components/titles/Y1930";
import Y1940 from "./components/titles/Y1940";
import Y1950 from "./components/titles/Y1950";
import Y1960 from "./components/titles/Y1960";
import Y1970 from "./components/titles/Y1970";
import Y1980 from "./components/titles/Y1980";
import Y1990 from "./components/titles/Y1990";
import Y2000 from "./components/titles/Y2000";
import Y2010 from "./components/titles/Y2010";
import Y2020 from "./components/titles/Y2020";

// Types
import { Decade, Movie } from "./types/types";

const decades: Decade[] = [
  {
    id: 0,
    year: 1920,
    titleSVG: <Y1920 />,
    banner: s1920,
    backgroundColor: "#1a0a0a",
  },
  {
    id: 1,
    year: 1930,
    titleSVG: <Y1930 />,
    banner: s1930,
    backgroundColor: "#15181e",
  },
  {
    id: 2,
    year: 1940,
    titleSVG: <Y1940 />,
    banner: s1940,
    backgroundColor: "#000",
  },
  {
    id: 3,
    year: 1950,
    titleSVG: <Y1950 />,
    banner: s1950,
    backgroundColor: "#1D141B",
  },
  {
    id: 4,
    year: 1960,
    titleSVG: <Y1960 />,
    banner: s1960,
    backgroundColor: "#000",
  },
  {
    id: 5,
    year: 1970,
    titleSVG: <Y1970 />,
    banner: s1970,
    backgroundColor: "#000",
  },
  {
    id: 6,
    year: 1980,
    titleSVG: <Y1980 />,
    banner: s1980,
    backgroundColor: "#1E1E25",
  },
  {
    id: 7,
    year: 1990,
    titleSVG: <Y1990 />,
    banner: s1990,
    backgroundColor: "#1E1E25",
  },
  {
    id: 8,
    year: 2000,
    titleSVG: <Y2000 />,
    banner: s2000,
    backgroundColor: "#281E28",
  },
  {
    id: 9,
    year: 2010,
    titleSVG: <Y2010 />,
    banner: s2010,
    backgroundColor: "#1E1E25",
  },
  {
    id: 10,
    year: 2020,
    titleSVG: <Y2020 />,
    banner: s2020,
    backgroundColor: "#1E1E25",
  },
];

function App() {
  const [pageIndex, setPageIndex] = useState(6);
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    //if (data[pageIndex] !== undefined) return;

    const fetchData = async (year: number, page: number) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=###&page=${page}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${
          year + 9
        }-12-31`
      );
      const json = await data.json();
      setData(json.results);
    };

    fetchData(decades[pageIndex].year, 1).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  useEffect(() => {
    //console.log(data);
  }, [data]);

  return (
    <div
      style={{ backgroundColor: decades[pageIndex].backgroundColor }}
      className="transition min-h-[100dvh]"
    >
      <NavBanner decades={decades} setPageIndex={setPageIndex} />
      <Cards data={data} />
    </div>
  );
}

export default App;
