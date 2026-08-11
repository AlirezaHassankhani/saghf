import { Product } from "../../components/product";

const categories = [
  { title: "املاک", src: "/category/real-estate.png" },
  { title: "وسایل نقلیه", src: "/category/vehicles.png" },
  { title: "کالای دیجیتال", src: "/category/electronic-devices.png" },
  { title: "خانه و آشپزخانه", src: "/category/home-kitchen.png" },
  { title: "خدمات", src: "/category/services.png" },
  { title: "وسایل شخصی", src: "/category/personal.png" },
  { title: "سرگرمی و فراغت", src: "/category/leisure-hobbies.png" },
  { title: "اجتماعی", src: "/category/community.png" },
  { title: "تجهیزات و صنعتی", src: "/category/tools-materials-equipment.png" },
  { title: "استخدام و کاریابی", src: "/category/jobs.png" },
];

export function MySaghf() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-6 xl:hidden mb-8">
        {categories.map((category) => (
          <div className="flex flex-col items-center gap-2">
            <div className="size-12 overflow-hidden">
              <img
                src={category.src}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="font-medium whitespace-nowrap text-sm">{category.title}</span>
          </div>
        ))}
      </div>

      <h6 className="text-xs font-medium mb-5 md:text-end">
        انواع آگهی‌ها و نیازمندی های کل ایران
      </h6>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array(14).fill(<Product />)}
      </div>
    </>
  );
}
