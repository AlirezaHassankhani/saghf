import { ChevronLeft, Stars } from "lucide-react";
import { Article } from "../../components/article";
import { Link } from "react-router-dom";

export function Faq() {
  return (
    <>
      <section className="relative bg-primary mb-10">
        <div className="space-y-5 max-w-2xl mx-auto py-6">
          <div className="flex items-center gap-2 bg-white/20 rounded-full text-white w-fit px-3 py-1">
            <Stars size={12} />
            <span className="font-semibold text-xs">پشتیبانی هوشمند سقف</span>
          </div>

          <div>
            <h3 className="text-white font-semibold text-3xl mb-2">
              چطور می‌تونم کمکت کنم؟
            </h3>
            <p className="text-muted text-sm">
              در چند ثانیه پاسخ هر سوالی که داری رو می‌گیری!
            </p>
          </div>

          <div className="flex items-center bg-white w-full rounded-xl">
            <input
              type="text"
              className="w-full outline-none py-6 pr-4 font-medium placeholder:text-foreground"
              placeholder="هر سوالی داری بپرس ..."
            />
            <div className="px-4">
              <button
                type="button"
                className="size-10 rounded-full bg-gray-200 text-foreground flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
            </div>
          </div>

          <span className="text-xs text-muted">
            اگه نیاز به بررسی بیشتر باشه، وصل می‌شی به کارشناس پشتیبان.
          </span>
        </div>

        <Stars
          size={100}
          className="absolute text-muted/40 top-1/2 left-1/5 -translate-y-1/2"
        />
      </section>

      <section className="mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center">
            <span className="font-semibold text-xl bg-white px-4">
              شاید برای شما هم سؤال باشد
            </span>
            <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center">
            <span className="font-semibold text-xl bg-white px-4">
              با دیوار بیشتر آشنا شوید
            </span>
            <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <Link to="#">
              <div className="flex items-center justify-between gap-2 border border-border rounded-md p-4 group">
                <div className="flex items-center gap-4">
                  <img src="/user-account.png" alt="user-account" width="80" />

                  <div>
                    <p className="font-medium">حساب کاربری در سقف</p>
                    <p className="line-clamp-1 text-foreground text-sm">
                      ساخت حساب کاربری، ورود و خروج از حساب کاربری، سقف من
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-full group-hover:bg-gray-200 transition-colors duration-300 size-10">
                  <ChevronLeft size={16} />
                </div>
              </div>
            </Link>

            <Link to="#">
              <div className="flex items-center justify-between gap-2 border border-border rounded-md p-4 group">
                <div className="flex items-center gap-4">
                  <img src="/user-account.png" alt="user-account" width="80" />

                  <div>
                    <p className="font-medium">حساب کاربری در سقف</p>
                    <p className="line-clamp-1 text-foreground text-sm">
                      ساخت حساب کاربری، ورود و خروج از حساب کاربری، سقف من
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-full group-hover:bg-gray-200 transition-colors duration-300 size-10">
                  <ChevronLeft size={16} />
                </div>
              </div>
            </Link>

            <Link to="#">
              <div className="flex items-center justify-between gap-2 border border-border rounded-md p-4 group">
                <div className="flex items-center gap-4">
                  <img src="/user-account.png" alt="user-account" width="80" />

                  <div>
                    <p className="font-medium">حساب کاربری در سقف</p>
                    <p className="line-clamp-1 text-foreground text-sm">
                      ساخت حساب کاربری، ورود و خروج از حساب کاربری، سقف من
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-full group-hover:bg-gray-200 transition-colors duration-300 size-10">
                  <ChevronLeft size={16} />
                </div>
              </div>
            </Link>

            <Link to="#">
              <div className="flex items-center justify-between gap-2 border border-border rounded-md p-4 group">
                <div className="flex items-center gap-4">
                  <img src="/user-account.png" alt="user-account" width="80" />

                  <div>
                    <p className="font-medium">حساب کاربری در سقف</p>
                    <p className="line-clamp-1 text-foreground text-sm">
                      ساخت حساب کاربری، ورود و خروج از حساب کاربری، سقف من
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center rounded-full group-hover:bg-gray-200 transition-colors duration-300 size-10">
                  <ChevronLeft size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center">
            <span className="font-semibold text-xl bg-white px-4">
              پرتکرارترین سؤالات کاربران دیوار
            </span>
            <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-gray-200"></div>
          </div>

          <div>
            
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center">
            <span className="font-semibold text-xl bg-white px-4">
              ارتباط با پشتیبانی دیوار
            </span>
            <div className="-z-10 absolute top-1/2 -translate-y-1/2 w-full h-[0.5px] bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <div className="border border-border space-y-6 p-4">
              <div className="text-center">
                <p className="font-medium mb-2">گفتگوی آنلاین با پشتیبانی</p>
                <p className="text-foreground">
                  ۲۴ ساعته، در کمتر از یک دقیقه به سوالات شما پاسخ می‌دهیم.
                </p>
              </div>

              <div className="flex justify-center">
                <Link to="#">
                  <div className="text-white bg-primary hover:bg-primary/90 px-4 py-2 font-semibold rounded-md transition-colors duration-300">
                    شروع گفتگو آنلاین
                  </div>
                </Link>
              </div>
            </div>

            <div className="border border-border space-y-6 p-4">
              <div className="text-center">
                <p className="font-medium mb-2">گفتگوی آنلاین با پشتیبانی</p>
                <p className="text-foreground">
                  ۲۴ ساعته، در کمتر از یک دقیقه به سوالات شما پاسخ می‌دهیم.
                </p>
              </div>

              <div className="flex justify-center">
                <Link to="#">
                  <div className=" text-primary border border-primary hover:text-white hover:bg-primary px-4 py-2 font-semibold rounded-md transition-colors duration-300">
                    شروع گفتگو آنلاین
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
