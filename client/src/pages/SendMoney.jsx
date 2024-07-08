import TransactionStatus from "./component/TransactionStatus";
import Divider from "./component/Divider";
import PartnerResponse from "./component/PartnerResponse";
import { convertToStarFormat } from "./utils/convertToStarFormat";
import { formatDateTransactions } from "./utils/formatDateTransactions";

// const mockData = {
//   row_details: {
//     transaction_id: "8554",
//     transaction_no: "1793839378537147",
//     transaction_ref_no: "11240307207BBBBD8B",
//     transaction_group_ref_no: null,
//     amount: "1.00",
//     created_at: "2024-03-18 13:09:03",
//     transaction_type_id: "24",
//     transaction_action_id: "2",
//     partner_service_id: "874",
//     reference_user_id: "463",
//     transaction_sequence_id: "1",
//     extra_action_type_id: "1",
//     json: {
//       data: {
//         destination_user_id: "463",
//         note: null,
//         partner_id: "3",
//         account_number: "109450542671",
//         account_name: "Tffffff",
//         partner_service_id: "874",
//         transaction_addons: {
//           total_amount: "11",
//           convenience_raw: "10",
//           amount_wo_conv: "1.0",
//           orig_amount: "1.0",
//           convenience_fee: "10",
//           service_fee: "0",
//         },
//         unread: "1",
//       },
//     },
//     transaction_type_desc: "Send Money - Via Bank Account",
//     transaction_status_id: "6",
//     status: "Completed",
//     user_id: "891",
//     created_by: "usr-891",
//     description: "Philippine Business Bank",
//     image_url: null,
//     linked_account_id: "1064",
//     type: "sender",
//     sender_user_details: {
//       fname: "Olivia",
//       lname: "Tester",
//       mobile: "9762736577",
//       kyc_status_id: "5",
//       kyc_status: "Registered",
//     },
//     receiver_user_details: {
//       fname: "Alpha",
//       lname: "Tester",
//       mobile: "9457771111",
//       kyc_status_id: "1",
//       kyc_status: "Verified",
//     },
//     platform: "Mobile",
//     partner_service: null,
//     is_linked_account: "0",
//     sender_payment_methods: {
//       account_name: "Olivia Tester Union-Bank",
//       account_number: "xxxxxxxx9318",
//       image_url:
//         "https://s3-ap-southeast-1.amazonaws.com/paychatph-assets/partner_images/unionbank.jpg",
//       transaction_type_desc: "Linked Account",
//       partner_name: "Union Bank",
//       note: null,
//     },
//     receiver_payment_methods: {
//       account_name: "Tffffff",
//       account_number: "xxxxxxxx2671",
//       image_url: null,
//       partner_name: "Philippine Business Bank",
//     },
//   },
//   other_details: {
//     transaction_id: "8553",
//     transaction_no: "1793839378544039",
//     transaction_ref_no: "11240307207BBBBD8B",
//     transaction_group_ref_no: null,
//     amount: "1.00",
//     created_at: "2024-03-18 13:09:03",
//     transaction_type_id: "6",
//     transaction_action_id: "1",
//     partner_service_id: "37",
//     reference_user_id: "0",
//     transaction_sequence_id: "1",
//     extra_action_type_id: "1",
//     json: null,
//     fname: "Olivia",
//     lname: "Tester",
//     receiverfname: null,
//     receiverlname: null,
//     transaction_type_desc: "Money Source",
//     transaction_status_id: "6",
//     status: "Completed",
//     payment_method: "Union Bank - Cash In",
//     created_by: "usr-891",
//     user_id: "891",
//     transaction_type: "Sender",
//   },
// };

const mockData = {
  row_details: {
    transaction_id: "8557",
    transaction_no: "1793844667815090",
    transaction_ref_no: "11240378147D27D0CC",
    transaction_group_ref_no: null,
    amount: "1.00",
    created_at: "2024-03-18 14:33:07",
    transaction_type_id: "1",
    transaction_action_id: "1",
    partner_service_id: "37",
    reference_user_id: "602",
    transaction_sequence_id: "1",
    extra_action_type_id: "1",
    json: {
      data: {
        destination_user_id: "602",
        note: "Ito na josh",
        partner_id: null,
        loan_transfer: null,
        transaction_addons: {
          total_amount: "11",
          convenience_raw: "10",
          amount_wo_conv: "1.0",
          orig_amount: "1.0",
          convenience_fee: "10",
          service_fee: "0",
        },
        unread: "1",
        receiver_default_linked_account: {
          linked_account_id: "453",
          partner_id: "5",
          la_json:
            '{"account_number":"xxxxxx0001","account_name":"Boston Donut"}',
        },
      },
    },
    transaction_type_desc: "Send Money",
    transaction_status_id: "4",
    status: "Failed",
    user_id: "891",
    created_by: "usr-891",
    description: "Union Bank - Cash In",
    image_url:
      "https://s3-ap-southeast-1.amazonaws.com/paychatph-assets/partner_images/unionbank.jpg",
    linked_account_id: "1064",
    type: "sender",
    sender_user_details: {
      fname: "Olivia",
      lname: "Tester",
      mobile: "9762736577",
      kyc_status_id: "5",
      kyc_status: "Registered",
    },
    receiver_user_details: {
      fname: "Boston",
      lname: "Donut",
      mobile: "9999000002",
      kyc_status_id: "1",
      kyc_status: "Verified",
    },
    platform: "Mobile",
    partner_service: {
      description: "Demo Bank - Cash Out to Bank Account",
    },
    is_linked_account: "1",
    sender_payment_methods: {
      account_name: "Olivia Tester Union-Bank",
      account_number: "xxxxxxxx9318",
      image_url:
        "https://s3-ap-southeast-1.amazonaws.com/paychatph-assets/partner_images/unionbank.jpg",
      transaction_type_desc: "Linked Account",
      partner_name: "Union Bank",
      note: "Ito na josh",
    },
    receiver_payment_methods: null,
  },
  other_details: null,
};

const viewType = "sender";

const isSender = viewType === "sender" ? true : false;

export default function SendMoney() {
  const {
    created_at,
    transaction_ref_no,
    transaction_type_desc,
    platform,
    status,
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
    mockData?.row_details?.json?.data?.transaction_addons || {};

  //   const { status } = mockData?.other_details;

  const isLinkedAccount =
    mockData?.row_details?.is_linked_account == "1" ? true : false;

  return (
    <>
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
            <i className="__icon-xs ic_back_grn"></i>
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
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            height: "fit-content",
            boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ color: "#33AF4F", fontWeight: "600" }}>
            Receiver Details
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Name</div>
              <div style={{ fontSize: "20px" }}>
                {`${receiverFirstName} ${receiverLastName}`}
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ color: "#888888" }}>Mobile Number</div>
              <div style={{ fontSize: "20px" }}>
                {`0${receiverMobileNumber}`}
              </div>
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
              {/* <img
                src={
                  receiverImageUrl ||
                  "https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png"
                }
                style={{ width: "40px", height: "40px", borderRadius: "10px" }}
              /> */}
              <div style={{ fontSize: "20px" }}>
                {!isLinkedAccount ? receiverPartnerName : "Linked Account"}
              </div>
            </div>
          </div>

          {!isLinkedAccount ? (
            <div style={{ display: "flex", marginTop: "20px" }}>
              <div style={{ width: "50%" }}>
                <div style={{ color: "#888888" }}>Account Name</div>
                <div style={{ fontSize: "20px" }}>{receiverAccountName}</div>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ color: "#888888" }}>Account Number</div>
                <div style={{ fontSize: "20px" }}>
                  {convertToStarFormat(receiverAccountNumber)}
                </div>
              </div>
            </div>
          ) : (
            <>
              <Divider />

              <div style={{ marginTop: "20px" }}>
                <div style={{ color: "#888888" }}>Message</div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ fontSize: "20px" }}>{senderNote}</div>
                </div>
              </div>
            </>
          )}
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
              <div>{`${senderFirstName} ${senderLastName}`}</div>
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
              {/* <div>{isSender ? receiverKycStatus : senderKycStatus}</div> */}
              <div>{senderKycStatus}</div>
            </div>
          </div>

          {isSender && (
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
                <div>{senderTransactionTypeDesc}</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
              >
                <div style={{ color: "#888888" }}>
                  Payment Method Particular
                </div>
                <div>
                  {`${senderPartnerName}  ${convertToStarFormat(
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
                <div>&#8369;{`${orig_amount}0`}</div>
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
                <div>&#8369;{`${convenience_fee}.00`}</div>
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
                <div>&#8369;{`${total_amount}.00`}</div>
              </div>
            </div>
          )}

          {!isSender && (
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
                  fontSize: "25px",
                  marginTop: "10px",
                  fontWeight: "600",
                }}
              >
                <div>Amount</div>
                <div>&#8369;{`${orig_amount}0`}</div>
              </div>
            </div>
          )}

          <PartnerResponse />
        </div>
      </div>
    </>
  );
}
