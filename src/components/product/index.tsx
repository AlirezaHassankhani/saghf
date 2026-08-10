import { Link } from "react-router-dom";

export function Product() {
  return (
    <Link to="#">
      <div className="flex items-center justify-between gap-4 border border-border rounded-md p-3">
        <div className="space-y-4">
          <p className="font-medium text-black dark:text-white">
            سرخ کن همه کاره
          </p>
          <div className="flex flex-col gap-1 text-sm">
            <span>نو</span>
            <span>70,000,000 تومن</span>
            <p>
              <span className="text-primary">پله شده | فروشگاه </span>ارسال از
              تهران
            </p>
          </div>
        </div>

        <div className="size-34 rounded-md overflow-hidden">
          <img src="" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </Link>
  );
}
