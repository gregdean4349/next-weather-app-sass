import Head from "next/head";
import FamousPlaces from "../components/FamousPlaces";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next Weather App</title>
      </Head>
      <div className="home">
        <div className="container">
          <SearchBox placeholder='Search for a city or town...' />
          <FamousPlaces />
        </div>
      </div>
    </div>
  );
}
