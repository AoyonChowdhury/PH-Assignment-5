import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyCards from "./components/TechnologyCards";
import type { ITechnologyType } from "./Types/ITechnologyType";
const technologyFetch = async ():Promise<ITechnologyType> => {
  const res = fetch("/data.json");
  const data = (await res).json();
  return data;
};
function App() {
  const technologyPromise = technologyFetch();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback = {<p>Loading......</p>}>
        <TechnologyCards technologyPromise = {technologyPromise}></TechnologyCards>
      </Suspense>
    </>
  );
}

export default App;
