import {
  Bookmark,
  Home,
  MessageCircleMore,
  PlusCircle,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/my-saghf", title: "آگهی ها", svg: <Home size={16} /> },
  { to: "/b", title: "نشان ها", svg: <Bookmark size={16} /> },
  { to: "/r", title: "ثبت آگهی", svg: <PlusCircle size={16} /> },
  { to: "/c", title: "چت و تماس", svg: <MessageCircleMore size={16} /> },
  { to: "/s", title: "دیوار من", svg: <User size={16} /> },
];

export function Tabbar() {
  return (
    <nav className="flex items-center justify-evenly fixed z-40 shadow-md bottom-0 w-full py-4 text-xs sm:text-sm font-medium xl:hidden bg-gray-100">
      {items.map((item) => (
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-foreground"
          }
        >
          <div className="flex max-md:flex-col items-center gap-2">
            {item.svg}
            <span>{item.title}</span>
          </div>
        </NavLink>
      ))}
    </nav>
  );
}
