import ProductCard from "@/components/blocks/cards/ProductCard";
import { Database } from "@/components/interfaces/interfaces";
import Link from "next/link";
import Button from "@components/elements/button/Button";
import { FiArrowLeft } from "react-icons/fi";
import GoBack from "@/components/elements/button/GoBack";
import { db } from "@/db";

export default async function page({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const SelectedCategory = db.filter(
    (item) => item.slug === params.category
  )[0];

  return (
    <div>
      <GoBack />
      <h1 className="text-2xl font-bold mt-3">{SelectedCategory?.name}</h1>
      <p className="text-zinc-400">{SelectedCategory?.subtitle}</p>

      <div className="grid lg:grid-cols-4 mt-4 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:p-4">
        {SelectedCategory?.items.map((item, index) => (
          <ProductCard
            delay={index * 0.1}
            key={index}
            title={item.name || ""}
            description={item.subtitle || ""}
            img={item.img}
            link={
              item._type === "subcategory"
                ? `/categories/${params.category}/${item.slug}`
                : `/product/${item.slug} `
            }
          />
        ))}
      </div>
    </div>
  );
}
