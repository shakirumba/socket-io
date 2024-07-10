import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Register() {
  // const {
  //   registerInfo,
  //   updateRegisterInfo,
  //   registerUser,
  //   registerError,
  //   isRegisterLoading,
  // } = useContext(AuthContext);

  return (
    <>
      <div className=" mx-auto p-4 flex min-h-screen items-center bg-[#282C34] text-white">
        <div className="flex  mx-auto text-center justify-center border-4 border-gray-300 rounded-[20px] p-4 ">
          <form>
            {/* <form onSubmit={registerUser}> */}
            <div>Name</div>
            <div className="mb-4">
              <input
                className="rounded-full text-black p-1"
                // onChange={(e) =>
                //   updateRegisterInfo({ ...registerInfo, name: e.target.value })
                // }
              />
            </div>
            <div>Email</div>
            <div className="mb-4">
              <input
                className="rounded-full text-black p-1"
                // onChange={(e) =>
                //   updateRegisterInfo({ ...registerInfo, email: e.target.value })
                // }
              />
            </div>
            <div>Password</div>
            <div className="mb-6">
              <input
                className="rounded-full text-black p-1"
                // onChange={(e) =>
                //   updateRegisterInfo({
                //     ...registerInfo,
                //     password: e.target.value,
                //   })
                // }
              />
            </div>
            {/* <button>
            {isRegisterLoading ? "Creating your account" : "Register"}
          </button> */}
            <div className="border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
              <button>{"Register"}</button>
            </div>

            {/* {registerError?.error && <div>{registerError?.message}</div>} */}
          </form>
        </div>
      </div>
    </>
  );
}
