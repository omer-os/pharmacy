import StatCard from "@/components/blocks/cards/StatCard";
import { AiFillFlag } from "react-icons/ai";

export default {
  title: "blocks/StatCard",
  component: StatCard,
};

export const Default = () => {
  return (
    <div className="flex gap-3">
      <StatCard
        title="Total Orders"
        value="1,234"
        icon={<AiFillFlag />}
        variant="secondary"
      />
    </div>
  );
};
