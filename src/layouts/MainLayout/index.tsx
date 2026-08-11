import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { Tabbar } from "./tabbar";

export function MainLayout() {
  return (
    <>
      <Header />

      <main className="relative min-h-screen bg-background">
        <div className="relative z-10 h-full">
          <div className="flex h-full max-w-8xl mx-auto px-4">
            <div className="w-3xs max-xl:hidden">
              <Sidebar />
            </div>

            <section className="flex min-w-0 flex-1 flex-col py-8 xl:pr-8">
              <Outlet />
            </section>
          </div>
        </div>
      </main>

      <Tabbar />
    </>
  );
}
