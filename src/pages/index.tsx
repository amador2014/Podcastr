import { useEffect } from "react";

export default function Home({ episodes }) {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Home</h1>
      <p>{JSON.stringify(episodes)}</p>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/episodes");
  const data = response.json();

  return {
    props: {
      episodes: data,
    },
    revalidade: 60 * 60 * 8
  };
};
