import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { loginInfo, loginUser, updateLoginInfo, loginError, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <div className="text-center">
        <form onSubmit={loginUser}>
          <div>email</div>
          <div>
            <input
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
          </div>
          <div>password</div>
          <div>
            <input
              onChange={(e) =>
                updateLoginInfo({
                  ...loginInfo,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button>{isLoginLoading ? "logging in" : "Login"}</button>

          {loginError?.error && <div>{loginError?.message}</div>}
        </form>
      </div>
    </>
  );
}
