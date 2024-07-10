import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import moment from "moment";
import InputEmoji from "react-input-emoji";

//TODO:first load error
const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    messages,
    userMessagesError,
    isMessagesLoading,
    sendTextMessage,
  } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const { recipientUser } = useFetchRecipient(currentChat, user);

  if (!recipientUser) return <div>No conversation selected yet</div>;

  if (isMessagesLoading) return <div>loading chat..</div>;

  return (
    <>
      <div className="w-[60%] ml-4 border-4 border-gray-300">
        <div className="bg-gray-600 p-2 h-[10%]">
          <div className="mb-2">{recipientUser?.name}</div>
          <div>Active </div>
        </div>

        <div className="max-h-[60vh] overflow-auto">
          {messages &&
            messages.map((message, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    message.senderId === user?._id
                      ? "flex justify-end p-6"
                      : "flex p-6"
                  }`}
                  ref={scroll}
                >
                  <div
                    className={`${
                      message.senderId === user?._id
                        ? "border-4 border-gray-300 text-black p-1 bg-gray-300"
                        : "border-4 border-gray-300 text-black p-1 bg-blue-400"
                    }`}
                  >
                    <div>
                      <div>{message.text}</div>
                      <div>{message.createdAt}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="h-[10%]  flex ">
          <div className="w-[80%] flex p-2">
            {/* <input
              className="rounded-full text-black p-1 w-full"
              onChange={handleTextChange}
            /> */}
            <InputEmoji
              value={textMessage}
              onChange={setTextMessage}
              fontFamily="nunito"
              borderColor="gray"
            />
            <button
              onClick={() =>
                sendTextMessage(
                  textMessage,
                  user,
                  currentChat._id,
                  sendTextMessage,
                  setTextMessage("")
                )
              }
            >
              send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
