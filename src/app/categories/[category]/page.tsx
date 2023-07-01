import ProductCard from "@/components/blocks/cards/ProductCard";
import { Database } from "@/components/interfaces/interfaces";
import Link from "next/link";
import Button from "@components/elements/button/Button";
import { FiArrowLeft } from "react-icons/fi";
import GoBack from "@/components/elements/button/GoBack";

export default async function page({
  params,
}: {
  params: {
    category: string;
  };
}) {
  const res = await fetch("http://localhost:3000/db.json");
  const data: Database = await res.json();

  const SelectedCategory = data.categories.find(
    (category) => category.slug === params.category
  );

  return (
    <div>
      <GoBack />
      <h1 className="text-2xl font-bold mt-3">{SelectedCategory?.name}</h1>
      <p className="text-zinc-400">{SelectedCategory?.subtitle}</p>

      <div className="grid lg:grid-cols-4 mt-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
        {SelectedCategory?.items.map((item, index) => (
          <ProductCard
            key={index}
            title={item.name || ""}
            description={item.subtitle || ""}
            img={item.img}
            link={`/categories/${params.category}/${item.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
