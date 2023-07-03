import { Decade } from "../types/types";

const BannerPage = ({ decade }: { decade: Decade }) => {
  return (
    <div className="max-w-[768px] w-screen shrink-0 snap-center">
      <div className="flex justify-center w-full">
        <div className="relative">
          <img
            src={decade.banner}
            className="h-[400px] object-cover"
            alt="twenties"
          />
          {decade.titleSVG}
        </div>
      </div>
    </div>
  );
};

const NavBanner = ({ decades }: { decades: Decade[] }) => {
  return (
    <div className="flex w-[768px] mx-auto overflow-auto snap-x snap-mandatory hidden-scroll">
      {decades.map((decade) => (
        <BannerPage key={decade.id} decade={decade} />
      ))}
    </div>
  );
};

export default NavBanner;
