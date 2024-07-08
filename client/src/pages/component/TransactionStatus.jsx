import React from "react";

export default function TransactionStatus({ status }) {
  console.log("Status:", status);
  return (
    <div
      style={{
        padding: "4px 0px",
        width: "120px",
        color: "white",
        backgroundColor:
          status == "Completed"
            ? "#33AF4F"
            : status == "Failed"
            ? "#DC3545"
            : status == "Pending" && "#347EE8",
        textAlign: "center",
        borderRadius: "999999px",
        fontSize: "14px",
        marginLeft: "auto",
      }}
    >
      {status}
    </div>
  );
}
