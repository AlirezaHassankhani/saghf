import { LocationEdit, Search } from "lucide-react";

export function MobileHeader() {
  return (
    <>
      <div className="flex items-center bg-muted border border-gray-400 rounded-md min-w-full group">
        <input
          type="text"
          className="w-full outline-none py-2 pr-2 text-sm"
          placeholder="جستجو در همهٔ آگهی‌ها"
        />
        <div className="px-2 py-2 text-foreground group-hover:text-gray-800 transition-colors duration-200">
          <Search size={16} />
        </div>
      </div>

      <div className="relative mt-4">
        <div className="relative z-10 w-fit flex items-center gap-2 mx-auto px-4 bg-gray-100">
          <LocationEdit size={16} />
          <p className="font-semibold text-foreground">موقعیت: <span className="text-primary">کل ایران</span></p>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-gray-300"></div>
      </div>
    </>
  );
}
