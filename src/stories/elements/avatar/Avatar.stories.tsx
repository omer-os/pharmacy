import Avatar from "@/components/elements/avatar/Avatar";
import { AiFillFlag } from "react-icons/ai";

export default {
  title: "Elements/Avatar",
  component: Avatar,
};

export const Default = () => {
  return (
    <Avatar
      alt="omar chatin"
      // src="https://randomuser.me/api/portraits/med/women/26.jpg"
      size={"md"}
      variant={"secondary"}
    >
      <AiFillFlag />
    </Avatar>
  );
};
