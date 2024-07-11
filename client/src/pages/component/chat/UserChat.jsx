import { useContext } from "react";
import { useFetchRecipient } from "../../hooks/useFetchRecipient"; // Correct import statement
import { ChatContext } from "../../ChatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotificationsFunc";
import { useFetchLatestMessage } from "../../hooks/useFetchLatestMessage";
import moment from "moment";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipient(chat, user); // Correct usage of useFetchRecipient
  const { onlineUsers, notifications, markThisUserNotificationsAsRead } =
    useContext(ChatContext);
  const { latestMessage } = useFetchLatestMessage(chat);
  console.log(latestMessage);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const thisUserNotifications = unreadNotifications?.filter(
    (n) => n.senderId == recipientUser?._id
  );
  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  return (
    <>
      <div
        className="bg-blue-600 mb-4 p-2"
        onClick={() => {
          if (thisUserNotifications?.length !== 0) {
            markThisUserNotificationsAsRead(
              thisUserNotifications,
              notifications
            );
          }
        }}
      >
        <div className="flex justify-between">
          <div className="flex">
            <div>{recipientUser?.name}</div>
            <div className="ml-2">
              {moment(latestMessage?.createdAt).calendar()}
            </div>
          </div>

          {isOnline ? (
            <div className="inline-block h-4 w-4 rounded-full bg-green-500"></div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <div className="truncate">
              {latestMessage?.text
                ? latestMessage.text.length > 30
                  ? latestMessage.text.substring(0, 30) + "..."
                  : latestMessage.text
                : "no message"}
            </div>
          </div>

          <div className="relative inline-block">
            {thisUserNotifications?.length > 0 && (
              <div className="flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white">
                {thisUserNotifications.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserChat;
