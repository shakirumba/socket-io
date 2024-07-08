import React, { useState } from "react";
import { sendGiftMockData } from "./data/sendGift";
import { formatDateTransactions } from "./utils/formatDateTransactions";
import TransactionStatus from "./component/TransactionStatus";
import { convertToStarFormat } from "./utils/convertToStarFormat";

export default function SendGift() {
  const mockData = sendGiftMockData;

  const { created_at, transaction_ref_no, status, platform } =
    mockData?.row_details || {};

  const {
    mobile: senderMobileNumber,
    kyc_status: senderKycStatus,
    fname: senderFirstName,
    lname: senderLastName,
  } = mockData?.row_details?.sender_user_details || {};

  const {
    convenience_fee,
    total_amount,
    service_fee,
    orig_amount,
    amount_wo_conv,
  } = mockData?.row_details?.json?.transaction_addons || {};

  const {
    account_number: senderAccountNumber,
    account_name: senderAccountName,
    transaction_type_desc: senderTransactionTypeDesc,
    partner_name: senderPartnerName,
    note: senderNote,
  } = mockData?.row_details?.sender_payment_methods || {};

  const groupedProducts = mockData?.row_details?.grouped_products || {};

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
                {formatDateTransactions(created_at)}
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
              <TransactionStatus status={status} />
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

          {Object.keys(groupedProducts).map((productName, index) => {
            return (
              <React.Fragment key={index}>
                <div>
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ color: "#888888" }}>Merchant</div>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      {/* <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnJhAM-arwEwA7yRogSroH3cYGsSvOEVe92A&usqp=CAU"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                    /> */}
                      <div style={{ fontSize: "20px" }}>{productName}</div>
                    </div>

                    {groupedProducts[productName]?.map((cardData, index) => {
                      const {
                        partner_name,
                        amount_orig_price,
                        image_url,
                        product_desc,
                        fullname,
                        mobile,
                        quantity,
                        user_image_url,
                      } = cardData;
                      return (
                        <React.Fragment key={index}>
                          <div
                            style={{
                              marginTop: "20px",
                              display: "flex",
                              gap: "10px",
                            }}
                          >
                            <img
                              src={image_url}
                              style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "10px",
                                border: "1px solid gainsboro",
                              }}
                            />
                            <div style={{ flex: "1" }}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div style={{ fontSize: "20px" }}>
                                  {product_desc}
                                </div>
                                <div>x{quantity}</div>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: "15px",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    gap: "10px",
                                  }}
                                >
                                  <img
                                    src={user_image_url}
                                    onError={(e) => {
                                      e.currentTarget.src =
                                        "https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png";
                                    }}
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      borderRadius: "10px",
                                      border: "1px solid gainsboro",
                                    }}
                                  />
                                  <div>
                                    <div>{fullname}</div>
                                    <div
                                      style={{
                                        color: "#888888",
                                        marginTop: "7px",
                                      }}
                                    >
                                      {mobile}
                                    </div>
                                  </div>
                                </div>

                                <div
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {amount_orig_price}
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <Divider />
              </React.Fragment>
            );
          })}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Subtotal</div>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>
              &#8369;{amount_wo_conv}
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
                {senderPartnerName === "2C2P"
                  ? senderPartnerName
                  : `${senderPartnerName} ${convertToStarFormat(
                      senderAccountNumber
                    )}`}
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

          {/* <PartnerResponse /> */}
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "2px",
        backgroundColor: "gainsboro",
        width: "100%",
        margin: "15px 0px",
      }}
    ></div>
  );
}
