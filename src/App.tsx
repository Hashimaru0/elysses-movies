import { useState, useEffect, useRef } from "react";

import Banner from "./components/Banner";
import Cards from "./components/Cards";

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

// Types
import { Decade } from "./types/types";

const decades: Decade[] = [
  {
    titleSVG: <Y1920 />,
    banner: s1920,
    backgroundColor: "#1a0a0a",
  },
  {
    titleSVG: <Y1930 />,
    banner: s1930,
    backgroundColor: "#15181e",
  },
];

function App() {
  const [currentDecade, setCurrentDecade] = useState(1);

  return (
    <div className={`pb-10 bg-[${decades[currentDecade].backgroundColor}]`}>
      <div className="h-[20rem] w-[20rem] bg-red-400"></div>
      {/* <div className="relative max-w-[768px] mx-auto">
        <Banner decade={decades[currentDecade]} />
        <Cards />
      </div> */}
    </div>
  );
}

export default App;
