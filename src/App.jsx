import { useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='font-["satoshi"] bg-zinc-900 w-screen h-screen'>
        <Navbar />
        <Work />
        <Stripes />
      </div>
    </>
  );
}

export default App;
