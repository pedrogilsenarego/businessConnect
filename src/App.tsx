import JoyStick from "./modules/JoyStick";
import { useState, lazy, Suspense } from "react"
import type { LazyExoticComponent, ComponentType } from 'react'

function App() {
  const [page, setPage] = useState<"home" | "whoWeAre" | undefined>("home")

  type LazyComponentType = LazyExoticComponent<ComponentType<any>>
  const loader = (Component: LazyComponentType) => (props: any) =>
  (
    <Suspense
      fallback={
        <>A carregar...</>
      }
    >
      <Component {...props} />
    </Suspense>
  )

  const WhoWeAre = loader(lazy(() => import("./modules/WhoWeAre")))
  const Home = loader(lazy(() => import("./modules/Home")))

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
