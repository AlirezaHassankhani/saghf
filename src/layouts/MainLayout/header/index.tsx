import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  return (
    <header className="sticky z-40 inset-0 w-full bg-background dark:shadow-white/5 shadow-sm">
      <div className="max-xl:hidden">
        <DesktopHeader />
      </div>

      <div className="xl:hidden bg-gray-100 p-4">
        <MobileHeader />
      </div>
    </header>
  );
}
