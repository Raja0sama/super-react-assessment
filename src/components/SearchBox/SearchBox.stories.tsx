import SearchBox from "./SearchBox";
/* eslint-disable */
import StoriesWrapper from "../../utils/stories.wrapper";

export default {
  title: "SearchBox",
};

export const Default = () => (
  <StoriesWrapper>
    <SearchBox />
  </StoriesWrapper>
);

Default.story = {
  name: "default",
};
