import React, { FC } from "react";
import { actions, effects } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Login.module.scss";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const count = useSelector((state: any) => state.app);

  const { app } = actions;
  const { app: _app } = effects;
  const dispatch = useDispatch();

  return (
    <div className={styles.Login} data-testid="Login">
      Login Component
      <button
        onClick={() => {
          dispatch(_app.increment()(count.value + 1));
        }}
      >
        Hello World {count.value}
      </button>
    </div>
  );
};

export default Login;
