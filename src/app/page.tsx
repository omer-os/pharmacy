import ProductCard from "@/components/blocks/cards/ProductCard";
import { db } from "@/db";

export default async function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mt-3">جميع الفئات</h1>
      <p className="text-zinc-400">حدد فئة لعرض المنتجات.</p>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 sm:p-4">
        {db.map((category, index) => {
          return (
            <ProductCard
              delay={index * 0.1}
              key={index}
              title={category.name || ""}
              description={category.subtitle || ""}
              img={category.img}
              link={"/categories/" + category.slug}
            />
          );
        })}
      </div>
    </div>
  );
}
