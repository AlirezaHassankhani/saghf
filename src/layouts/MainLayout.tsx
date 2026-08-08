import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="my-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
