import { StoryFn } from "@storybook/react";
import Button from "@/components/elements/button/Button";
import { AiFillAudio } from "react-icons/ai";

export default {
  title: "Elements/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: (
    <>
      <AiFillAudio />
      Hello world
    </>
  ),
  variant: "danger",
  size: "md",
  width: "full",
  rounded: "full",
  justify: "start",
  outlined: true,
};
