import AnimateOneDir from "@/components/animations/simple/AnimateOneDir";
import GoBack from "@/components/elements/button/GoBack";
import Button from "@components/elements/button/Button";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function CategoryItemPage() {
  return (
    <div className="flex gap-10 md:flex-row flex-col">
      <AnimateOneDir direction="left">
        <div className="img sm:min-w-[30em] md:h-[35em] h-[20em] rounded-lg">
          <img
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/13833/46dce299-d88d-4712-b708-c27227d238b8.jpg"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </AnimateOneDir>
      <div className="flex flex-col min-h-max">
        <AnimateOneDir delay={0.1}>
          <GoBack />
          <div className="font-bold text-3xl mt-3">مسترخي الاعصاب</div>
          <div className="text-zinc-400 text-sm mt-4">
            استمتع بلحظات من الاسترخاء وتهدئة الأعصاب مع مسترخي الأعصاب العشبي.
            تم تصميم هذا المنتج بعناية لتوفير الدعم الطبيعي للجهاز العصبي وتخفيف
            التوتر والقلق. استمتع بمزيج فريد من الأعشاب الهادئة التي تساعد في
            تحقيق الاسترخاء العميق وتعزيز الهدوء الداخلي
          </div>

          <div className="mt-6">
            <table>
              <tbody>
                <tr>
                  <td>المكونات الرئيسية :</td>
                  <td className="font-bold ps-4">
                    البابونج، العرقسوس، الشمر، النعناع.
                  </td>
                </tr>
                <tr>
                  <td>الوزن :</td>
                  <td className="font-bold ps-4">30g</td>
                </tr>
                <tr>
                  <td>السعر :</td>
                  <td className="font-bold ps-4">20,000 IQD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap sm:flex-row flex-col  gap-4 mt-20">
            <Button className="min-w-[10em] sm:w-max w-full">
              <HiOutlineShoppingCart />
              اضافة الى السلة
            </Button>
            <Button
              outlined
              variant={"success"}
              className="min-w-[10em] sm:w-max w-full"
            >
              اطلب الان
            </Button>
          </div>
        </AnimateOneDir>
      </div>
    </div>
  );
}
