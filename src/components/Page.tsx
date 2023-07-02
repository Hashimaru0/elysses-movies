import Banner from "./Banner";
import Cards from "./Cards";
import { Decade } from "../types/types";

const Page = ({ decade }: { decade: Decade }) => {
  return (
    <div className="max-w-[768px]">
      <Banner decade={decade} />
      <Cards />
    </div>
  );
};

export default Page;
