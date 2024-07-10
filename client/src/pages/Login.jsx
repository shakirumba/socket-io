import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { loginInfo, loginUser, updateLoginInfo, loginError, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <div className=" mx-auto p-4 flex min-h-screen items-center bg-[#282C34] text-white">
        <div className="flex  mx-auto text-center justify-center border-4 border-gray-300 rounded-[20px] p-4 ">
          <form onSubmit={loginUser}>
            <div>Email</div>
            <div className="mb-4">
              <input
                className="rounded-full text-black p-1"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
              />
            </div>
            <div>Password</div>
            <div className="mb-6">
              <input
                className="rounded-full text-black p-1"
                onChange={(e) =>
                  updateLoginInfo({
                    ...loginInfo,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <div className="border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
              <button>{isLoginLoading ? "logging in" : "Login"}</button>
            </div>

            {loginError?.error && <div>{loginError?.message}</div>}
          </form>
        </div>
      </div>
    </>
  );
}
