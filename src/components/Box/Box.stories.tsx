// Button.stories.ts|tsx
import "../../assets/style.css";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "./Box";
import React from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => (
  <div style={{ maxWidth: 400 }} className={"text-white"}>
    <Box
      sandbox
      link={`/`}
      rating={4.5}
      title={"Welcome to Super Movie"}
      date={`25 April`}
      image={"https://image.tmdb.org/t/p/w500//4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"}
      {...args}
    />
  </div>
);

//👇 Each story then reuses that template
export const Primary: any = Template.bind({});
Primary.args = {
  label: "Box",
};
