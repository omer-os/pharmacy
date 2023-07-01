"use client";
import AnimateOneDir from "@/components/animations/simple/AnimateOneDir";
import GoBack from "@/components/elements/button/GoBack";
import { getItemBySlug } from "@/db";
import Button from "@components/elements/button/Button";
import { useParams } from "next/navigation";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function CategoryItemPage() {
  const slug = useParams()?.product;
  const itemData = getItemBySlug(slug);

  return (
    <div className="flex gap-10 md:flex-row flex-col">
      <AnimateOneDir direction="left">
        <div className="img md:w-[30em] md:h-[35em] h-[20em] rounded-lg">
          <img
            src={itemData?.img || ""}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </AnimateOneDir>
      <div className="flex flex-col min-h-max">
        <AnimateOneDir delay={0.1}>
          <GoBack />
          <div className="font-bold text-3xl mt-3">{itemData?.name}</div>
          <div className="text-zinc-400 text-sm mt-4">{itemData?.subtitle}</div>

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
