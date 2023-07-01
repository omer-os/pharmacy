import CategoryItemPage from "@/components/templates/categoryitem/CategoryItemPage";

export default async function page({
  params,
}: {
  params: {
    category: string;
    categoryItem: string;
  };
}) {
  return (
    <div>
      <CategoryItemPage />
    </div>
  );
}
