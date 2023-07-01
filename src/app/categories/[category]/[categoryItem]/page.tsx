import ProductCard from "@/components/blocks/cards/ProductCard";
import { Database } from "@/components/interfaces/interfaces";
import CategoryItemPage from "@/components/templates/categoryitem/CategoryItemPage";

export default async function page({
  params,
}: {
  params: {
    category: string;
    categoryItem: string;
  };
}) {
  const res = await fetch("http://localhost:3000/db.json");
  const data: Database = await res.json();

  const SelectedCategory = data.categories.find(
    (category) => category.slug === params.category
  );
  const SelectedCategoryItem = SelectedCategory?.items.find(
    (item) => item.slug === params.categoryItem
  );

  return (
    <div>
      <CategoryItemPage />
    </div>
  );
}
