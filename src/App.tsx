import Home from "./modules/Home";
import WhoWeAre from "./modules/WhoWeAre";
import JoyStick from "./modules/JoyStick";
import { useState } from "react"

function App() {
  const [page, setPage] = useState<"home" | "whoWeAre">("home")

  const renderPage = () => {
    if (page === "home") {
      return <Home />
    }
    if (page === "whoWeAre") {
      return <WhoWeAre />
    }
  }
  return (
    < >
      <JoyStick page={page} setPage={setPage} />
      {renderPage()}
    </>
  );
}

export default App;
