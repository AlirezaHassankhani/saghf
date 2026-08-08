import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <section className="mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2">
          <div>
            <h3 className="font-semibold text-3xl mb-4">دربارهٔ سقف</h3>
            <p className="text-foreground">
              سقف از ۲۱ تیر ۱۳۹۱ با هدف خرید و فروش بدون واسطهٔ آنلاین آغاز به
              کار کرد. امتیاز برند سقف توسط شرکت «آگه پردازان هوشمند» (سهامی
              خاص) در همهٔ مراجع قانونی ثبت شده است.
            </p>
          </div>

          <div className="flex justify-end">
            <img src="/about.png" alt="about" width="400" />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-6xl mx-auto text-center border-b border-border pb-10">
          <h3 className="font-medium text-2xl mb-5">کتابچهٔ برند سقف</h3>

          <div className="space-y-2 text-foreground mb-5">
            <p>
              پس از دوازده سال فعالیت سقف، حالا ما بخشی از زندگی مردم خوب
              ایران شده‌ایم، آنگونه که حتی در زبان فارسی هم معنای تازه‌ای به
              واژه‌ٔ «سقف» داده‌ایم و دیگر کسی از شنیدن «در سقف بودن» تعجب
              نمی‌کند.
            </p>
            <p>
              حالا خیلی از ایرانی‌ها وقت خرید و فروش ملک، خودرو یا خدمات در
              سقفند و اولین گزینه‌یشان برای پیدا کردن کالاهای دست دوم و نو،
              سقف است. حتی در استخدام هم سقف مهم‌ترین مرجع است و وقت پیدا
              کردن کار یا کارجو، اغلب ایرانی‌ها در سقفند.
            </p>
            <p>
              برای آنکه در ذهن مخاطبان و کاربرانمان ظاهری پیوسته‌تر و متناسب‌تر
              داشته باشیم، همچنین، پویاتر و کاراتر از همیشه پیش برویم، هویت
              کلامی و بصری برند سقف را تدوین کرده‌ایم.
            </p>
          </div>

          <Link to="#">
            <div className="text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-300 inline-block">
              آشنایی با هویت کلامی و بصری سقف
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-6xl mx-auto border-b border-border pb-10">
          <h3 className="font-medium text-center text-2xl mb-10">
            همکاران تجاری سقف
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex flex-col items-center gap-2 mb-4">
                <img src="/about-2.svg" alt="about" width="40" />
                <span className="font-medium">کارنامه</span>
              </div>

              <p className="text-center text-foreground text-sm">
                کارنامه با هدف خلق تجربهٔ کاربری بهتر در خرید و فروش خودرو و
                به‌عنوان سرویس مکمل سقف، با ارائهٔ خدمات کارشناسی خودرو در محل
                و فروش سفارشی، آغاز به کار کرد.
              </p>
            </div>

            <div>
              <div className="flex flex-col items-center gap-2 mb-4">
                <img src="/about-3.svg" alt="about" width="40" />
                <span className="font-medium">پیشگامان</span>
              </div>

              <p className="text-center text-foreground text-sm">
                پیشگامان به‌عنوان شرکتی مستقل در کنار سقف همکاری می‌کند و
                به‌نوعی بازوی اصلی پشتیبانی از کاربران سقف و پل ارتباط نزدیک
                با آن‌هاست.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="#">
              <div className="text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-300 inline-block">
                بیشتر بخوانید
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-6xl mx-auto border-b border-border pb-10">
          <h3 className="font-medium text-center text-2xl mb-5">
            فرصت‌های شغلی
          </h3>

          <p className="text-foreground text-center">
            اینجا سقف است؛ جایی برای رشد و یادگیری و خلق ایده‌های جدید. در
            سقف، با هم تجربه می‌کنیم، برای چالش‌ها راه‌حل پیدا می‌کنیم و بر
            سبک زندگی میلیون‌ها نفر تأثیر می‌گذاریم. برای پیوستن به سقف،
            موقعیت‌ شغلی متناسب با توانمندی‌های خود را در این صفحه پیدا کنید.
          </p>

          <div className="text-center mt-10">
            <Link to="#">
              <div className="text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-300 inline-block">
                همهٔ فرصت‌های شغلی
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-6xl mx-auto border-b border-border pb-10">
          <h3 className="font-medium text-center text-2xl mb-5">
            درگاه تأمین خدمات و کالا به شرکت آگه‌پردازان
          </h3>

          <p className="text-foreground text-center">
            درگاه تأمین‌کنندگان سقف با هدف تسهیل، تسریع و شفاف‌سازی فرآیندهای
            خرید کالا و خدمات، و برگزاری معاملات راه‌اندازی شده است. این سامانه
            بستری یکپارچه برای مدیریت بهتر درخواست‌ها، ارتباط با تأمین‌کنندگان و
            اجرای فرآیندهای معاملاتی فراهم می‌کند.
          </p>

          <div className="text-center mt-10">
            <Link to="#">
              <div className="text-primary font-medium px-4 py-2 rounded-md hover:bg-primary/10 transition-colors duration-300 inline-block">
                درگاه تأمین‌کنندگان سقف
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-medium text-center text-2xl mb-5">
            ارتباط با سقف
          </h3>

          <div className="text-center text-foreground space-y-2">
            <p>
              مشکلات سقف یا انتقادها و پیشنهادهای خود را به پشتیبانی سقف
              بگویید.
            </p>
            <p>اگر با مزاحمت روبرو شدید، موضوع را از پلیس فتا پی بگیرید.</p>
            <p>شمارهٔ پلیس فتای محل سکونت خود را در سایت پلیس فتا بیابید.</p>
          </div>

          <div className="space-y-2 text-center mt-5">
            <p>
              آدرس پستی: تهران، اوین، بلوار دانشجو، ساختمان دانشگاه شهید بهشتی،
              ساختمان پارک علم و فناوری(برج نوآوری)، طبقهٔ ۲
            </p>
            <p>صندوق پستی: ۶۰۰۵۰-۱۹۸۳۹</p>
          </div>

          <div className="bg-pink-100 rounded-lg p-4 my-10">
            تیم‌های فنی ما در این آدرس هستند، اما متأسفانه نمی‌توانیم پذیرای
            مراجعان حضوری باشیم.
          </div>
        </div>
      </section>
    </>
  );
}
