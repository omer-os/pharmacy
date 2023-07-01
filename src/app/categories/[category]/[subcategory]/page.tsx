import ProductCard from "@/components/blocks/cards/ProductCard";
import GoBack from "@/components/elements/button/GoBack";
import { Subcategory, db } from "@/db";

export default async function page({
  params,
}: {
  params: {
    category: string;
    subcategory: string;
  };
}) {
  const Selectedcategory = db.filter(
    (item) => item.slug === params.category
  )[0];

  const SelectedSubcategory = Selectedcategory?.items.filter(
    (item) => item.slug === params.subcategory
  )[0] as Subcategory;

  return (
    <div>
      <GoBack />
      <h1 className="text-2xl font-bold mt-3">{SelectedSubcategory?.name}</h1>
      <p className="text-zinc-400">{SelectedSubcategory?.subtitle}</p>

      <div className="grid lg:grid-cols-4 mt-4 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:p-4">
        {SelectedSubcategory?.items.map((item, index) => (
          <ProductCard
            delay={index * 0.1}
            key={index}
            title={item.name + item._type || ""}
            description={item.subtitle || ""}
            img={item.img}
            link={`/product/${item.slug}`}
            type={item._type}
          />
        ))}
      </div>
    </div>
  );
}
