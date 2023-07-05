export type Decade = {
  id: number;
  year: number;
  titleSVG: JSX.Element;
  banner: string;
  backgroundColor: string;
};

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
};
