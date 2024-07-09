import { useFetchRecipient } from "../../hooks/useFetchRecipient"; // Correct import statement

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipient(chat, user); // Correct usage of useFetchRecipient
  console.log(recipientUser);

  return (
    <>
      <div className="flex mb-4 w-[30%] justify-between bg-slate-400">
        <div>
          <div>{recipientUser?.name}</div>
          <div>12/12/2022</div>
          <div>Text Message</div>
        </div>
        <div>
          <div>online</div>
          <div>notif:2</div>
        </div>

        {/* <div>_______________</div> */}
      </div>
    </>
  );
};

export default UserChat;
