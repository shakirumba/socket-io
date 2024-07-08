import React, { useState } from "react";
import { SendToManyMockData } from "./data/sendToMany";
import { formatDateTransactions } from "./utils/formatDateTransactions";
import TransactionStatus from "./component/TransactionStatus";
import Divider from "./component/Divider";

export default function SendToMany() {
  const mockData = SendToManyMockData;

  const {
    created_at,
    transaction_ref_no,
    transaction_type_desc,
    platform,
    status,
    amount,
  } = mockData?.row_details || {};

  const { image_url: senderImageUrl, partner_name: senderPartnerName } =
    mockData?.row_details?.sender_payment_methods || {};

  const {
    mobile: senderMobileNumber,
    kyc_status: senderKycStatus,
    fname: senderFirstName,
    lname: senderLastName,
  } = mockData?.row_details?.sender_user_details || {};

  const {
    mobile: receiverMobileNumber,
    kyc_status: receiverKycStatus,
    fname: receiverFirstName,
    lname: receiverLastName,
  } = mockData?.row_details?.receiver_user_details || {};

  const {
    transaction_type_desc: receiverTransactionTypeDesc,
    partner_name: receiverPartnerName,
    image_url: receiverImageUrl,
  } = mockData?.row_details?.receiver_payment_methods || {};

  const {
    account_number: senderAccountNumber,
    account_name: senderAccountName,
    transaction_type_desc: senderTransactionTypeDesc,
    note: senderNote,
  } = mockData?.row_details?.sender_payment_methods || {};
  const {
    account_number: receiverAccountNumber,
    account_name: receiverAccountName,
  } = mockData?.row_details?.receiver_payment_methods || {};

  const { convenience_fee, total_amount, service_fee, orig_amount } =
    mockData?.row_details?.json?.transaction_addons || {};

  const receiverData = mockData?.row_details?.receiver_payment_methods || [];

  //   const { status } = mockData?.other_details;

  const isLinkedAccount =
    mockData?.row_details?.is_linked_account == "1" ? true : false;

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
                Send To Many
              </div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ color: "#888888" }}>Transaction Ref. No.</span>{" "}
                {transaction_ref_no}
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                padding: "4px 16px",
                width: "fit-content",
                color: "white",
                textAlign: "center",
                borderRadius: "999999px",
                fontSize: "14px",
                marginLeft: "auto",
              }}
            >
              <TransactionStatus status={status} />
            </div>
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

            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {receiverData?.map((data, index) => {
            return (
              <ReceiverDetails receiverData={data} index={index} key={index} />
            );
          })}
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
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
              }}
            >
              <div style={{ color: "#888888" }}>Payment Method</div>
              <div>Linked Account</div>
            </div> */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                marginTop: "10px",
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
              <div>&#8369;{amount}</div>
            </div>

            <div
              style={{
                marginLeft: "20px",
              }}
            >
              {receiverData?.map((data, index) => {
                const { amount, fname, lname } = data;
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                    key={index}
                  >
                    <div style={{ color: "#888888" }}>
                      Recipient {index + 1} -{" "}
                      {fname && lname ? `${fname} ${lname}` : "N/A"}
                    </div>
                    <div style={{ color: "#888888" }}>{amount}</div>
                  </div>
                );
              })}
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
              <div>{convenience_fee}</div>
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
              <div>{total_amount}</div>
            </div>
          </div>

          {/* <PartnerResponse /> */}
        </div>
      </div>
    </div>
  );
}

function ReceiverDetails({ receiverData, index }) {
  const {
    amount,
    phone_number,
    fname,
    lname,
    partner_name,
    account_name,
    account_number,
  } = receiverData;

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            color: "#888888",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div style={{ color: "#33AF4F", fontWeight: "600" }}>
            Receiver {index + 1} Details
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div>></div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Name</div>
              <div style={{ fontSize: "20px", marginTop: "10px" }}>
                {fname && lname ? `${fname} ${lname}` : "N/A"}
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Mobile Number</div>
              <div style={{ fontSize: "20px", marginTop: "10px" }}>
                {phone_number}
              </div>
            </div>
          </div>

          {isOpen && (
            <>
              <Divider />

              <div style={{ marginTop: "20px" }}>
                <div style={{ color: "#888888", fontSize: "20px" }}>
                  Deposited to
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{partner_name}</div>
                </div>

                {account_name && account_number && (
                  <div style={{ display: "flex", marginTop: "20px" }}>
                    <div style={{ width: "50%" }}>
                      <div style={{ color: "#888888" }}>Account Name</div>
                      <div style={{ fontSize: "20px", marginTop: "10px" }}>
                        {account_name || "N/A"}
                      </div>
                    </div>
                    <div style={{ width: "50%" }}>
                      <div style={{ color: "#888888" }}>Account Number</div>
                      <div style={{ fontSize: "20px", marginTop: "10px" }}>
                        {account_number || "N/A"}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
