import React, { useState } from "react";
import Divider from "./component/Divider";

export default function SendMoney() {
  return (
    <div
      style={{
        width: "1200px",
        backgroundColor: "gainsboro",
        minHeight: "1200px",
        padding: "20px",
      }}
    >
      <div
        style={{
          padding: "10px",
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
          <div style={{ display: "flex", gap: "10px" }}>
            <div>{"<="}</div>
            <div>
              <div style={{ fontWeight: "600", fontSize: "24px" }}>
                Send Gift
              </div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ color: "#888888" }}>Transaction Ref. No.</span>{" "}
                1221389173188123
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                padding: "4px 16px",
                width: "fit-content",
                color: "white",
                backgroundColor: "#33AF4F",
                textAlign: "center",
                borderRadius: "999999px",
                fontSize: "14px",
                marginLeft: "auto",
              }}
            >
              Completed
            </div>
            <div style={{ marginTop: "10px", color: "#888888" }}>
              14 Jun, 20 - 10:58 PM
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            height: "fit-content",
            boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ color: "#33AF4F", fontWeight: "600" }}>
            Product Details
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Mobile Number</div>
              <div style={{ fontSize: "20px" }}>{`0}`}</div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Amount / Promo</div>
              <div style={{ fontSize: "20px" }}>as</div>
            </div>
          </div>

          <Divider />

          <div style={{ marginTop: "20px" }}>
            <div style={{ color: "#888888" }}>Deposited to</div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJhAM-arwEwA7yRogSroH3cYGsSvOEVe92A&usqp=CAU"
                style={{ width: "40px", height: "40px", borderRadius: "10px" }}
              />
              <div style={{ fontSize: "20px" }}>Gold's Gym</div>
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Name</div>
              <div style={{ fontSize: "20px" }}>{`0}`}</div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Mobile Number</div>
              <div style={{ fontSize: "20px" }}>as</div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              padding: "20px",
              height: "fit-content",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
              }}
            >
              <div style={{ color: "#888888" }}>Platform</div>
              <div>Mobile</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#888888" }}>Transacting User</div>
              <div>Bertong Balibag</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#888888" }}>KYC Status</div>
              <div>Registered</div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "10px",
              padding: "20px",
              height: "fit-content",
              backgroundColor: "white",
              marginTop: "20px",
              boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
              }}
            >
              <div style={{ color: "#888888" }}>Payment Method</div>
              <div>Credit / Debit</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#888888" }}>Payment Method Particular</div>
              <div>2C2P</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#888888" }}>Amount</div>
              <div>&#8369;500.00</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ color: "#888888" }}>Convenience Fee</div>
              <div>&#8369;50.00</div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "25px",
                marginTop: "10px",
                fontWeight: "600",
              }}
            >
              <div>Total Amount</div>
              <div>&#8369;550.00</div>
            </div>
          </div>

          <PartnerResponse />
        </div>
      </div>
    </div>
  );
}

function PartnerResponse() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          padding: "20px",
          height: "fit-content",
          backgroundColor: "white",
          marginTop: "20px",
          boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div
            style={{
              color: "#888888",
            }}
          >
            Partner Response Code and Description
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            0, Success
            <div>></div>
          </div>
        </div>

        {isOpen && (
          <div style={{ marginTop: "20px" }}>
            heck node_modules into git for things you deploy, such as websites
            and apps. Do not check node_modules into git for libraries and
            modules intended to be reused. Use npm t
          </div>
        )}
      </div>
    </>
  );
}
