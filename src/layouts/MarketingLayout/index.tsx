import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";

export function MarketingLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
