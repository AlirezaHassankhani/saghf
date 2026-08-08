import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const cities = [
  "تهران",
  "مشهد",
  "کرج",
  "شیراز",
  "اصفهان",
  "اهواز",
  "تبریز",
  "کرمانشاه",
  "قم",
  "رشت",
];

export function Home() {
  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto">
        <img src="/logo.svg" alt="logo" width="60" className="mx-auto" />

        <nav className="flex justify-evenly border-b border-border my-8 text-foreground text-sm pb-3">
          <Link to="#">ثبت آگهی</Link>
          <Link to="#">درباره دیوار</Link>
          <Link to="#">دریافت برنامه</Link>
          <Link to="#">اتاق خبر</Link>
          <Link to="#">پشتیبانی</Link>
        </nav>

        <div className="mb-8 text-center text-foreground space-y-2">
          <p className="font-medium">سقف، پایگاه خرید و فروش بی واسطه!</p>
          <p className="text-sm">
            اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته بندی ها به دنبالش
            بگرد. اگه هم میخوای چیزی بفروشی، چندتا عکس خوب ازش بگیر و آگهیت رو
            بچسبون به دیوار.
          </p>
        </div>

        <div className="border border-border rounded-md flex items-center pr-2 mb-8">
          <Search size={18} />
          <input
            type="text"
            className="w-full py-2 mr-2 outline-none"
            placeholder="جستجوی شهر"
          />
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-center font-medium">شهرهای پربازدید</p>

          <ul className="flex flex-wrap justify-center font-medium">
            {cities.map((items) => (
              <li className="block w-4/12">
                <Link
                  to="#"
                  className="w-full block text-center p-4 text-foreground hover:text-primary transition-colors"
                >
                  {items}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
