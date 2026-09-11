import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyCards from "./components/TechnologyCards";
import type { ITechnologyType } from "./Types/ITechnologyType";
import Footer from "./components/Footer";
const technologyFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  const technologyPromise = technologyFetch();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback = {<h2 className="text-center font-bold text-2xl">Loading......</h2>}>
        <TechnologyCards technologyPromise = {technologyPromise}></TechnologyCards>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
