import { Route, Routes } from "react-router-dom";

import { MarketingLayout } from "../layouts/MarketingLayout";
import { Home } from "../pages/home";
import { Faq } from "../pages/faq";
import { About } from "../pages/about/indext";
import { MainLayout } from "../layouts/MainLayout";
import { MySaghf } from "../pages/my-saghf";

function App() {
  return (
    <Routes>
      <Route path="" element={<MarketingLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<Faq />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="my-saghf" element={<MainLayout />}>
        <Route index element={<MySaghf />} />
      </Route>
    </Routes>
  );
}

export default App;
