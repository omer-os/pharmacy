import Counter from "@/components/blocks/counter/Counter";
import { useState } from "react";

export default {
  title: "blocks/Counter",
  component: Counter,
};

export const Default = () => {
  const [value, setValue] = useState(0);

  return <Counter State={value} setState={setValue} />;
};
