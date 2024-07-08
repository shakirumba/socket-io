import React from "react";

export default function Reviews() {
  const jsonString =
    '{"ResponseStatus":"Successful","MessageCollection":[],"Payroll":{"PayrollName":"112406032F2898","PayrollID":18242,"StatusID":10},"eWalletBalance":439885.99}';

  const parseString = JSON.parse(jsonString);

  console.log(parseString);

  // console.log(parseString);

  return (
    <div
      style={{
        width: "1200px",
        backgroundColor: "gainsboro",
        minHeight: "1200px",
        padding: "20px",
      }}
    >
      {/* <div
        style={{
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex gap-4">
            <div className="text-5xl font-semibold">1.0</div>
            <div className="flex justify-center flex-col">
              <div className="flex gap-2 ">
                <div className="w-4 h-4 bg-red-300"></div>
                <div className="w-4 h-4 bg-red-300"></div>
                <div className="w-4 h-4 bg-red-300"></div>
                <div className="w-4 h-4 bg-red-300"></div>
                <div className="w-4 h-4 bg-red-300"></div>
              </div>
              <div className="font-semibold text-gray-400">(Reviews)</div>
            </div>
          </div>

          <div>
            <div className="rounded-xl [&>*]:px-4 flex items-center [&>*]:flex [&>*]:items-center [&>*]:gap-2 [&>*]:py-1 text-lg font-semibold overflow-hidden cursor-pointer">
              <div className="!px-6 !border-[#33AF4F] border-2 z-20 rounded-tl-xl rounded-bl-xl text-[#33AF4F]">
                All
              </div>
              <div className="border-t-2 border-b-2 border-r-2">
                5 <div className="w-4 h-4 bg-red-300"></div>
              </div>
              <div className="border-t-2 border-b-2">
                4<div className="w-4 h-4 bg-red-300"></div>
              </div>
              <div className="border-2">
                3 <div className="w-4 h-4 bg-red-300"></div>
              </div>
              <div className="border-t-2 border-b-2">
                2 <div className="w-4 h-4 bg-red-300"></div>
              </div>
              <div className="border-2 rounded-tr-xl rounded-br-xl">
                1 <div className="w-4 h-4 bg-red-300"></div>
              </div>
            </div>

            <div className="flex w-[200px] justify-between items-center ml-auto mr-4 mt-4">
              <div>Sort By</div>
              <div className="w-4 h-4 bg-red-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-4 items-center w-full">
              <img
                src="https://pbs.twimg.com/media/FsjFOdeacAU05Rj.jpg:large"
                className="!w-[40px] rounded-full mb-auto "
              ></img>

              <div className="grow">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex gap-1 items-center">
                        <span className="font-bold">Hanni Pham</span>
                        <span className="text-[#888888]">-</span>
                        <span className="text-[12px] text-[#888888]">
                          29 May. 2021
                        </span>
                      </div>
                      <div className="text-[12px] text-[#888888]">
                        &#8369;5,100.00 for 60 days
                      </div>
                    </div>
                    <div className="flex gap-2 mb-auto items-center mt-2">
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                    </div>
                  </div>
                </div>

                <div>
                  I don't have access to real-time data or the ability to browse
                  the internet. However, as of my last update in January 2022, I
                  I don't have access to real-time data or the ability to browse
                  the internet. However, as of my last update in January 2022, I
                  I don't have access to real-time data or the ability to browse
                  the internet. However, as of my last update in January 2022, I
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div className="flex items-center justify-between my-2">
            <div className="flex gap-4 items-center w-full">
              <img
                src="https://pbs.twimg.com/media/FsjFOdeacAU05Rj.jpg:large"
                className="!w-[40px] rounded-full mb-auto "
              ></img>

              <div className="grow">
                <div>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex gap-1 items-center">
                        <span className="font-bold">Hanni Pham</span>
                        <span className="text-[#888888]">-</span>
                        <span className="text-[12px] text-[#888888]">
                          29 May. 2021
                        </span>
                      </div>
                      <div className="text-[12px] text-[#888888]">
                        &#8369;5,100.00 for 60 days
                      </div>
                    </div>
                    <div className="flex gap-2 mb-auto items-center mt-2">
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                      <div className="w-4 h-4 bg-red-300"></div>
                    </div>
                  </div>
                </div>

                <div>
                  I don't have access to real-time data or the ability to browse
                  the internet. However, as of my last update in January 2022, I
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      Test
    </div>
  );
}

function Divider() {
  return <div className="h-[1px] w-full bg-gray-400 my-4"></div>;
}
