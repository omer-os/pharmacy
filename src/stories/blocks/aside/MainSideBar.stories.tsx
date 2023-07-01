import MainSideBar from "@/components/blocks/aside/MainSideBar";
import { ClientWrapper } from "@/components/templates/layout/ClientWrapper";

export default {
  title: "Blocks/Aside/MainSideBar",
  component: MainSideBar,
};

export const Primary = () => {
  return (
    <ClientWrapper>
      <MainSideBar />;
    </ClientWrapper>
  );
};
