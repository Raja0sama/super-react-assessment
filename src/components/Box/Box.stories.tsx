// Button.stories.ts|tsx
import "../../assets/style.css";

import Box, { BoxProps } from "./Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import StoriesWrapper from "../../utils/stories.wrapper";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const Template = (args: BoxProps) => (
  <StoriesWrapper>
    {" "}
    <div style={{ maxWidth: 400 }} className={"text-white"}>
      <Box
        sandbox
        link={`/`}
        rating={4.5}
        title={"Welcome to Super Movie"}
        date={`25 April`}
        image={
          "https://image.tmdb.org/t/p/w500//4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg"
        }
        {...args}
      />
    </div>
  </StoriesWrapper>
);

//👇 Each story then reuses that template
export const Primary: any = Template.bind({});
Primary.args = {
  label: "Box",
};
