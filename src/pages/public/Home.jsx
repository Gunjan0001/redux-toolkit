import { useState, useRef } from "react";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

function Home() {
  const counterData = useSelector((state) => state.counterData);
  const authData = useSelector((state) => state.authData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <>
      <div>Home</div>
      {counterData.showCounter && <h1>{counterData.counter}</h1>}

      {authData.isAuthenticated && (
        <>
          <p>Welcome Mr.Vinay Sachan</p>
          <button onClick={logoutHandler}>Logout</button>
        </>
      )}

      {!authData.isAuthenticated && (
        <>
          <p>Submit Form</p>
          <button onClick={loginHandler}>Click here to Login</button>
        </>
      )}

      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
}
//
export default Home;
