import { useContext } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";

//TODO:first load error
const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const { currentChat, messages, userMessagesError, isMessagesLoading } =
    useContext(ChatContext);
  console.log("user", user);
  console.log("currentChat", currentChat);

  const { recipientUser } = useFetchRecipient(currentChat, user);

  if (!recipientUser) return <div>No conversation selected yet</div>;

  if (isMessagesLoading) return <div>loading chat..</div>;
  console.log(messages);
  return (
    <>
      <div>
        <div>{recipientUser?.name}</div>
        <div>
          {messages &&
            messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    message?.senderId === user?._id
                      ? "bg-red-900"
                      : "bg-green-300"
                  }`}
                >
                  <div>{message.text}</div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
