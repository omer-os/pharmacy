import TextInput from "@/components/elements/textinput/TextInput";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Example icon. Make sure to install react-icons.

export default {
  title: "elements/TextInput",
  component: TextInput,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <TextInput
      startIcon={<FaSearch />} // Example start icon
      value={value}
      onChange={(e) => {
        console.log(e.target.value);
        setValue(e.target.value);
      }}
      placeholder="Search for items"
    />
  );
};
