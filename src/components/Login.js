import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: "Hashir ", age: 22, email: "hashir@gmail.com" })
          );
        }}
      >
        <b>Login</b>
      </button>
    </div>
  );
}

export default Login;
