import { HelpCircle, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="sticky inset-0 w-full bg-background shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-2">
          <Link to="/">
            <img src="/logo.svg" alt="logo" width="40" />
          </Link>

          <nav className="flex gap-2">
            <Link to="#">
              <div className="flex items-center gap-2 p-3 text-foreground bg-background rounded-md hover:bg-gray-100 hover:text-primary transition-colors">
                <User size={18} />
                <span className="text-sm font-medium">سقف من</span>
              </div>
            </Link>

            <Link to="#">
              <div className="flex items-center gap-2 p-3 text-foreground bg-background rounded-md hover:bg-gray-100 hover:text-primary transition-colors">
                <HelpCircle size={18} />
                <span className="text-sm font-medium">پشتیبانی</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
