import { useEffect } from "react";
import { GetStaticProps } from "next";

type Episode = {
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  description: string;
  file: {
    url: string;
    type: string;
    duration: number;
  };
};

interface HomeProps {
  episodes: Episode[];
}

export default function Home(props: HomeProps) {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes?_limit=12&_sort=published_at&order=desc");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
};
