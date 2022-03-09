/* eslint-disable */
import Layout from "./Layout";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Layout",
};

export const Default = () => (
  <Router>
    <Layout />
  </Router>
);

Default.story = {
  name: "default",
};
