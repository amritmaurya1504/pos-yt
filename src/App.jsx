import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold text-red-800 underline">Hello world!</h1>
    </>
  );
}

export default App;
