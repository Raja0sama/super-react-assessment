import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../redux/store";

export default ({ children }: any) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-bg h-screen w-full text-white p-5">{children}</div>
      </Router>
    </Provider>
  );
};
