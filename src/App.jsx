import { useState } from "react";
import Home from "./page/Home";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}

export default App
