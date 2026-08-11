import { useEffect, useRef, useState } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const [isTop, setIsTop] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entity]) => {
      setIsTop(entity.isIntersecting);
    });

    if (sentinelRef.current) observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky z-40 inset-0 w-full bg-background dark:shadow-white/5 shadow-sm">
        <div className="max-xl:hidden">
          <DesktopHeader />
        </div>

        <div className="xl:hidden bg-gray-100 dark:bg-background p-4">
          <MobileHeader isTop={isTop} />
        </div>
      </header>

      <div ref={sentinelRef} />
    </>
  );
}
