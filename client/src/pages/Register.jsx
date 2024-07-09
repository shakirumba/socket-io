import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Register() {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);

  return (
    <>
      <div className="text-center">
        <form onSubmit={registerUser}>
          <div>name</div>
          <div>
            <input
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, name: e.target.value })
              }
            />
          </div>
          <div>email</div>
          <div>
            <input
              onChange={(e) =>
                updateRegisterInfo({ ...registerInfo, email: e.target.value })
              }
            />
          </div>
          <div>password</div>
          <div>
            <input
              onChange={(e) =>
                updateRegisterInfo({
                  ...registerInfo,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button>
            {isRegisterLoading ? "Creating your account" : "Register"}
          </button>

          {registerError?.error && <div>{registerError?.message}</div>}
        </form>
      </div>
    </>
  );
}
