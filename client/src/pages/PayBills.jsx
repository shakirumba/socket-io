import React, { useState } from "react";
import TransactionStatus from "./component/TransactionStatus";
import { formatDateTransactions } from "./utils/formatDateTransactions";
import { payBillsMockData } from "./data/payBills";
import { convertPaymentMethodName } from "./utils/convertPaymentMethodName";
import { convertToStarFormat } from "./utils/convertToStarFormat";

export default function PayBills() {
  const mockData = payBillsMockData;

  const {
    created_at,
    transaction_ref_no,
    transaction_type_desc,
    platform,
    status,
    amount,
  } = mockData?.row_details || {};

  const { account_name, account_number, image_url, partner_name } =
    mockData?.row_details?.biller_details || {};
  const {
    fname: senderFirstName,
    lname: senderLastName,
    kyc_status: senderKycStatus,
  } = mockData?.row_details?.sender_user_details || {};

  const { orig_amount, convenience_fee, total_amount } =
    mockData?.row_details?.json?.data?.transaction_addons || {};

  const {
    partner_name: senderPartnerName,
    account_number: senderAccountNumber,
  } = mockData?.row_details?.sender_payment_methods || {};

  console.log(status);

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
                {transaction_type_desc}
              </div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ color: "#888888" }}>PayChat Ref. No.</span>{" "}
                {transaction_ref_no}
              </div>
            </div>
          </div>

          <div>
            <TransactionStatus status={status} />
            <div style={{ marginTop: "10px", color: "#888888" }}>
              {formatDateTransactions(created_at)}
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
            Biller Details
          </div>

          <div style={{ marginTop: "20px" }}>
            <div style={{ color: "#888888" }}>Biller</div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img
                src={image_url}
                style={{ width: "40px", height: "40px", borderRadius: "10px" }}
              />
              <div style={{ fontSize: "20px" }}>{partner_name}</div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <div style={{ color: "#888888" }}>Account Number</div>
              <div style={{ fontSize: "20px", marginTop: "10px" }}>
                {account_number}
              </div>
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
              <div>{platform}</div>
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
              <div>
                {senderFirstName} {senderLastName}
              </div>
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
              <div>{senderKycStatus}</div>
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
              <div>
                {`${convertPaymentMethodName(
                  senderPartnerName
                )}  ${convertToStarFormat(senderAccountNumber)}`}
              </div>
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
              <div>&#8369;{orig_amount}</div>
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
              <div>&#8369;{convenience_fee}.00</div>
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
              <div>&#8369;{total_amount}.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
