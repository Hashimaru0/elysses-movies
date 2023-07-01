import s1920 from "../assets/imgs/1920s.jpg";
import s1930 from "../assets/imgs/1930s.jpg";
import s1940 from "../assets/imgs/1940s.jpg";
import s1950 from "../assets/imgs/1950s.jpg";
import s1960 from "../assets/imgs/1960s.jpg";
import s1970 from "../assets/imgs/1970s.jpg";
import s1980 from "../assets/imgs/1980s.jpg";
import s1990 from "../assets/imgs/1990s.jpg";
import s2000 from "../assets/imgs/2000s.jpg";
import s2010 from "../assets/imgs/2010s.jpg";
import s2020 from "../assets/imgs/2020s.jpg";
import Card from "./Card";

import Y1920 from "./titles/Y1920";

const bannerImgs = [
  {
    title: <Y1920 />,
    banner: s1920,
    backgroundColor: "#1a0a0a",
  },
];

const Banner = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative">
        <img
          src={bannerImgs[0].banner}
          className="h-[400px] object-cover pointer-events-none select-none"
          alt="twenties"
        />
        {bannerImgs[0].title}
      </div>
      {/* <div className="shadow"> </div> */}
    </div>
  );
};

export default Banner;
