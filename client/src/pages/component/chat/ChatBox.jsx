import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";
import { useFetchRecipient } from "../../hooks/useFetchRecipient";
import moment from "moment";
import InputEmoji from "react-input-emoji";
import { IoIosSend } from "react-icons/io";

//TODO:first load error
const ChatBox = () => {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    messages,
    userMessagesError,
    isMessagesLoading,
    sendTextMessage,
    onlineUsers,
  } = useContext(ChatContext);
  const [textMessage, setTextMessage] = useState("");

  const scroll = useRef();

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const { recipientUser } = useFetchRecipient(currentChat, user);

  if (!recipientUser) return <div>No conversation selected yet</div>;

  if (isMessagesLoading) return <div>loading chat..</div>;

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  return (
    <>
      <div className="w-[60%] h-[700px] flex flex-col ml-4 border-4 border-gray-300">
        <div className="bg-gray-600 p-2 h-[10%] flex items-center">
          <div className="mb-2">{recipientUser?.name}</div>
          <div>
            {isOnline ? (
              <div className="inline-block h-4 w-4 rounded-full bg-green-500 ml-2"></div>
            ) : (
              <div></div>
            )}{" "}
          </div>
        </div>

        <div className="grow overflow-auto">
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
                      <div className="max-w-xs break-all">{message.text}</div>
                      <div>{moment(message.createdAt).calendar()}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div>
          <div className="w-full flex items-center justify-between p-2">
            <InputEmoji
              value={textMessage}
              onChange={setTextMessage}
              fontFamily="nunito"
              borderColor="gray"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendTextMessage(textMessage, user, currentChat._id);
                  setTextMessage("");
                }
              }}
            />

            <button
              className="ml-2"
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
              <IoIosSend size={30} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
