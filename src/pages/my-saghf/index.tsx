import { Product } from "../../components/product";

export function MySaghf() {
  return (
    <>
    <h6 className="text-xs font-medium mb-5 text-end">انواع آگهی‌ها و نیازمندی های کل ایران</h6>
      <div className="grid grid-cols-3 gap-4">
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}
