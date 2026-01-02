import { useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='font-["satoshi"] bg-zinc-900 w-screen'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
      </div>
    </>
  );
}

export default App;
