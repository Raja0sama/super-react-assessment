// Button.stories.ts|tsx
import "../../assets/style.css";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";
import React from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => <Button {...args}>Button</Button>;

//👇 Each story then reuses that template
export const Primary: any = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Button",
};
