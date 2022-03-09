import Header from "./Header";
/* eslint-disable */
import StoriesWrapper from "../../utils/stories.wrapper";

export default {
  title: "Header",
};

export const Default = () => (
  <StoriesWrapper>
    <Header />
  </StoriesWrapper>
);

Default.story = {
  name: "default",
};
