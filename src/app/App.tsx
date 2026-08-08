import { Route, Routes } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home";
import { Faq } from "../pages/faq";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
      </Route>

      <Route path="my-sagf"></Route>
    </Routes>
  );
}

export default App;
