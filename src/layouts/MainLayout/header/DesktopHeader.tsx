import { ChevronDown, HelpCircle, LocationEdit, MessageCircleMoreIcon, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

export function DesktopHeader() {
  return (
    <div className="max-xl:hidden max-w-8xl mx-auto flex justify-between items-center py-2 px-4">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/logo.svg" alt="logo" width="50" />
          </Link>

          <div className="min-w-px min-h-4 bg-border"></div>

          <Link to="#">
            <div className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
              <LocationEdit size={18} />
              <span className="text-sm font-medium max-lg:hidden">
                انتخاب شهر
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <span className="text-sm font-medium">دسته ها</span>
            <ChevronDown size={18} />
          </button>

          <div className="flex items-center border border-border focus-within:text-black dark:focus-within:text-white focus-within:border-primary transition-colors duration-200 rounded-md min-w-md group">
            <input
              type="text"
              className="w-full outline-none py-2 pr-2 text-sm"
              placeholder="جستجو در همهٔ آگهی‌ها"
            />
            <div className="px-2 py-2 text-foreground group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200">
              <Search size={16} />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-2">
        <Link to="#">
          <div className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
            <User size={18} />
            <span className="text-sm font-medium">سقف من</span>
          </div>
        </Link>

        <Link to="#">
          <div className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
            <MessageCircleMoreIcon size={18} />
            <span className="text-sm font-medium">چت و تماس</span>
          </div>
        </Link>

        <Link to="#" className="max-lg:hidden">
          <div className="flex items-center gap-2 py-2.5 px-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
            <HelpCircle size={18} />
            <span className="text-sm font-medium">پشتیبانی</span>
          </div>
        </Link>

        <Link to="#">
          <span className="text-white bg-primary hover:bg-primary/90 transition-colors duration-200 px-3 py-2 rounded-md">
            ثبت آگهی
          </span>
        </Link>
      </nav>
    </div>
  );
}
