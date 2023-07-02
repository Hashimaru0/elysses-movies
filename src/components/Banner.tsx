import { Decade } from "../types/types";

const Banner = ({ decade }: { decade: Decade }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative">
        <img
          src={decade.banner}
          className="h-[400px] object-cover pointer-events-none select-none"
          alt="twenties"
        />
        <div
          style={{
            boxShadow: `inset 0 -100px 30px -60px ${decade.backgroundColor}`,
          }}
          className="shadow"
        ></div>
        {decade.titleSVG}
      </div>
    </div>
  );
};

export default Banner;
