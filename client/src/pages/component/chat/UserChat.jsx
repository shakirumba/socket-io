import { useFetchRecipient } from "../../hooks/useFetchRecipient"; // Correct import statement

const UserChat = ({ chat, user, onlineUsers }) => {
  const { recipientUser } = useFetchRecipient(chat, user); // Correct usage of useFetchRecipient

  return (
    <>
      <div className="bg-blue-600 mb-4 p-2">
        <div className="flex justify-between">
          <div>{recipientUser?.name}</div>
          {onlineUsers?.some((user) => user?.userId === recipientUser?._id) ? (
            <div className="text-yellow-400">online</div>
          ) : (
            <div>offline</div>
          )}
        </div>

        <div className="flex justify-between">
          <div>text message</div>
          <div>count</div>
        </div>
      </div>
    </>
  );
};

export default UserChat;
