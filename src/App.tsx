import { useState, useEffect } from "react";

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
import { Decade } from "./types/types";
import NavBanner from "./components/NavBanner";

const decades: Decade[] = [
  {
    id: 0,
    titleSVG: <Y1920 />,
    banner: s1920,
    backgroundColor: "#1a0a0a",
  },
  {
    id: 1,
    titleSVG: <Y1930 />,
    banner: s1930,
    backgroundColor: "#15181e",
  },
  {
    id: 2,
    titleSVG: <Y1940 />,
    banner: s1940,
    backgroundColor: "#000",
  },
  {
    id: 3,
    titleSVG: <Y1950 />,
    banner: s1950,
    backgroundColor: "#1D141B",
  },
  {
    id: 4,
    titleSVG: <Y1960 />,
    banner: s1960,
    backgroundColor: "#000",
  },
  {
    id: 5,
    titleSVG: <Y1970 />,
    banner: s1970,
    backgroundColor: "#000",
  },
  {
    id: 6,
    titleSVG: <Y1980 />,
    banner: s1980,
    backgroundColor: "#1E1E25",
  },
  {
    id: 7,
    titleSVG: <Y1990 />,
    banner: s1990,
    backgroundColor: "#1E1E25",
  },
  {
    id: 8,
    titleSVG: <Y2000 />,
    banner: s2000,
    backgroundColor: "#281E28",
  },
  {
    id: 9,
    titleSVG: <Y2010 />,
    banner: s2010,
    backgroundColor: "#1E1E25",
  },
  {
    id: 10,
    titleSVG: <Y2020 />,
    banner: s2020,
    backgroundColor: "#1E1E25",
  },
];

function App() {
  const [pageIndex, setPageIndex] = useState(5);

  return (
    <div className="bg-red-400">
      <NavBanner decades={decades} />
    </div>
  );
}

export default App;
