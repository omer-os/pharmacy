import ProductCard from "@/components/blocks/cards/ProductCard";

export default {
  title: "blocks/ProductCard",
  component: ProductCard,
};

export const Default = () => {
  return (
    <div className="grid grid-cols-4">
      <ProductCard />
    </div>
  );
};
