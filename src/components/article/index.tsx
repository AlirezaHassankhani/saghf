import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Article() {
  return (
    <article className="border border-border rounded-md py-5 px-4 space-y-5">
      <p className="font-medium">چرا با اینکه پرداخت را انجام داده ام، خدمتی دریافت نکرده ام؟</p>

      <p className="text-justify text-foreground line-clamp-2">
        اگر با وجود پرداخت هزینه، خدمتی دریافت نکردید، در صورت پرداخت هزینه از
        طریق درگاه بانکی موضوع را از طریق پشتیبانی بانک پیگیری کنید اما در صورتی
        که پرداخت با استفاده از درگاه کافه بازار انجام شده با پشتیبانی بازار
        تماس بگیرید.
      </p>

      <Link to="#" className="inline-block">
        <div className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors duration-200 group">
          ادامه مقاله
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
        </div>
      </Link>
    </article>
  );
}
