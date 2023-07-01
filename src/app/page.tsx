import ProductCard from "@/components/blocks/cards/ProductCard";
import { Database } from "@/components/interfaces/interfaces";

export default async function page() {
  const res = await fetch("http://localhost:3000/db.json");
  const data: Database = await res.json();

  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
        {data.categories.map((category, index) => {
          return (
            <ProductCard
              key={index}
              title={category.name || ""}
              description={category.subtitle || ""}
              img={category.img}
              link={`/categories/${category.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
}
