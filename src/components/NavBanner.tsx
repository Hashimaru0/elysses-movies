import { useState, useRef, useEffect } from "react";
import { Decade } from "../types/types";

const BannerPage = ({ decade }: { decade: Decade }) => {
  return (
    <div className="max-w-[768px] w-screen shrink-0">
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={decade.banner}
            className="h-[400px] object-cover"
            alt="twenties"
            loading="lazy"
          />
          {decade.titleSVG}
        </div>
      </div>
    </div>
  );
};

const NavBanner = ({
  decades,
  setPageIndex,
}: {
  decades: Decade[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const mouseCoords = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const [isMouseDown, setIsMouseDown] = useState(false);

  // Sets start banner to the 80s
  useEffect(() => {
    if (!bannerRef.current) return;
    const banner = bannerRef.current;
    banner.scrollLeft = 6 * banner.offsetWidth;
  }, []);

  const handleDragStart = (e: {
    pageX: number;
    preventDefault: () => void;
  }) => {
    if (!bannerRef.current) return;
    e.preventDefault();

    const banner = bannerRef.current;

    const startX = e.pageX - banner.offsetLeft;
    const scrollLeft = banner.scrollLeft;

    mouseCoords.current = { startX, scrollLeft };
    banner.classList.remove("scroll-smooth");

    setIsMouseDown(true);
  };

  const handleDrag = (e: { pageX: number; preventDefault: () => void }) => {
    if (!isMouseDown || !bannerRef.current) return;
    e.preventDefault();
    const banner = bannerRef.current;

    const bannerMouseX = e.pageX - banner.offsetLeft;
    const xDiff = (bannerMouseX - mouseCoords.current.startX) * 2.2;

    banner.scrollLeft = mouseCoords.current.scrollLeft - xDiff;
  };

  const handleDragEnd = (e: { preventDefault: () => void }) => {
    if (!bannerRef.current) return;
    e.preventDefault();

    const banner = bannerRef.current;

    banner.classList.add("scroll-smooth");

    const pageIndex = Math.round(banner.scrollLeft / banner.offsetWidth);
    const scrollPos = pageIndex * banner.offsetWidth;

    banner.scrollLeft = scrollPos;

    setIsMouseDown(false);
    setPageIndex(pageIndex);
  };

  return (
    <div
      ref={bannerRef}
      onPointerDown={handleDragStart}
      onPointerMove={handleDrag}
      onPointerUp={handleDragEnd}
      onPointerLeave={handleDragEnd}
      className={`flex max-w-[768px] mx-auto overflow-auto hidden-scroll touch-none`}
    >
      {decades.map((decade) => (
        <BannerPage key={decade.id} decade={decade} />
      ))}
    </div>
  );
};

export default NavBanner;
