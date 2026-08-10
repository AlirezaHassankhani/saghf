import {
  CarFrontIcon,
  ChevronLeft,
  Dices,
  HomeIcon,
  LampDesk,
  LampFloorIcon,
  Laptop,
  PaintRoller,
  Toolbox,
  UsersIcon,
  Watch,
} from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { to: "", title: "املاک", svg: <HomeIcon size={20} /> },
  { to: "", title: "وسایل نقلیه", svg: <CarFrontIcon size={20} /> },
  { to: "", title: "کالای دیجیتال", svg: <Laptop size={20} /> },
  { to: "", title: "خانه و آشپزخانه", svg: <LampFloorIcon size={20} /> },
  { to: "", title: "خدمات", svg: <PaintRoller size={20} /> },
  { to: "", title: "وسایل شخضی", svg: <Watch size={20} /> },
  { to: "", title: "سرگرمی و فراغت", svg: <Dices size={20} /> },
  { to: "", title: "اجتماعی", svg: <UsersIcon size={20} /> },
  { to: "", title: "تجهیزات و صنعتی", svg: <LampDesk size={20} /> },
  { to: "", title: "استخدام و کاریابی", svg: <Toolbox size={20} /> },
];

const footerItems = [
  { to: "", title: "درباره سقف" },
  { to: "", title: "دریافت برنامه" },
  { to: "", title: "اتاق خبر" },
  { to: "", title: "سقفی شو" },
  { to: "", title: "پشتیبانی و قوانین" },
];

export function Sidebar() {
  return (
    <aside className="max-w-3xs">
      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <h6 className="text-black dark:text-white font-medium">دسته ها</h6>

        <ul className="space-y-5 font-medium text-sm">
          {items.map((item) => (
            <li>
              <Link to={item.to}>
                <div className="flex gap-2 items-start hover:text-black dark:hover:text-white transition-colors duration-200">
                  {item.svg}
                  <span className="">{item.title}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <h6 className="text-black dark:text-white font-medium">
          قیمت <span className="text-foreground mr-2">(تومان)</span>
        </h6>

        <div>
          <div className="flex items-center gap-4">
            <span>از</span>
            <input type="text" className="border outline-none p-2 rounded-md w-full" />
          </div>

          <div>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>تا</span>
            <input type="text" className="border outline-none p-2 rounded-md w-full" />
          </div>
        </div>
      </div>

      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <div className="flex items-center justify-between">
          <span className="font-medium text-black dark:text-white">
            عکس‌دار
          </span>
          <input type="checkbox" name="" id="" />
        </div>
      </div>

      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <h6 className="text-black dark:text-white font-medium">
          زمان انتشار آگهی
        </h6>

        <select className="w-full outline-none border border-border rounded-md py-1">
          <option value="">3 ساعت</option>
        </select>
      </div>

      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <button className="flex items-center justify-between w-full cursor-pointer">
          <span className="text-black dark:text-white font-medium">
            افزونه‌ها
          </span>

          <div className="flex items-center gap-2 text-foreground">
            <span className="">انتخاب</span>
            <ChevronLeft size={18} />
          </div>
        </button>
      </div>

      <div className="space-y-6 border-b border-border pb-6 mb-6">
        <nav className="flex flex-wrap justify-center text-xs font-medium gap-4">
          {footerItems.map((item) => (
            <Link to={item.to} className="hover:text-black dark:hover:text-white transition-colors duration-200">{item.title}</Link>
          ))}
        </nav>

        <div className="flex justify-center">
          <img src="/1.png" alt="badge" width="50" />
          <img src="/2.png" alt="badge" width="50" />
          <img src="/3.png" alt="badge" width="50" />
        </div>
      </div>
    </aside>
  );
}
