import React, { useState } from "react";
import classes from "./AuthForm.module.css";
import * as AiIcons from "react-icons/ai";

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <section className={classes.auth}>
      <button onClick={props.onClose} className={classes.close}>
        <AiIcons.AiOutlineClose />
      </button>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            onClick={switchAuthModeHandler}
            className={classes.toggle}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
