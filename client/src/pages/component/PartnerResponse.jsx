import React, { useState } from "react";

export default function PartnerResponse() {
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
            alignItems: "center",
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
            {!isOpen ? (
              <i className="__icon-xs chevron-down-blk"></i>
            ) : (
              <i className="__icon-xs chevron-up-blk"></i>
            )}
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
