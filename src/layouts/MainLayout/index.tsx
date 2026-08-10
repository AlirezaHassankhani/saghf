import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function MainLayout() {
  return (
    <>
      <Header />
      <main className="relative h-screen bg-background">
        <div className="relative z-10 h-full p-4">
          <div className="flex h-full max-w-8xl mx-auto p-4">
            <Sidebar />

            <section className="flex min-w-0 flex-1 flex-col">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
