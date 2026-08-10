import { HelpCircle, LocationEdit, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="sticky z-40 inset-0 w-full bg-background dark:shadow-white/5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src="/logo.svg" alt="logo" width="50" />
            </Link>

            <div className="min-w-px min-h-4 bg-border"></div>

            <Link to="#">
              <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
                <LocationEdit size={18} />
                <span className="text-sm font-medium max-lg:hidden">انتخاب شهر</span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center gap-2">
            <Link to="#">
              <div className="flex items-center gap-2 p-3 rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
                <User size={18} />
                <span className="text-sm font-medium">سقف من</span>
              </div>
            </Link>

            <Link to="#" className="max-lg:hidden">
              <div className="flex items-center gap-2 p-3  rounded-md hover:bg-gray-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-white transition-colors duration-200">
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
      </header>
    </>
  );
}
