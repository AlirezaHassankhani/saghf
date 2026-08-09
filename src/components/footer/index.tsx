import { Link } from "react-router-dom";

const navItems = [
  { title: "درباره سقف", to: "#" },
  { title: "قوانین و پشتیبانی", to: "#" },
  { title: "اتاق خبر", to: "#" },
  { title: "ارتباط با پشتیبانی", to: "#" },
];

export function Footer() {
  return (
    <>
      <footer className="border-t border-border py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <nav className="flex text-sm font-medium divide-x divide-foreground/30">
            {navItems.map((item) => (
              <Link to={item.to} className="hover:text-primary transition-colors duration-200 px-4">{item.title}</Link>
            ))}
          </nav>

          <div className="flex justify-between gap-4">
            <img src="/1.png" alt="test" width="40" />
            <img src="/2.png" alt="test" width="40" />
            <img src="/3.png" alt="test" width="40" />
          </div>
        </div>
      </footer>
    </>
  );
}
