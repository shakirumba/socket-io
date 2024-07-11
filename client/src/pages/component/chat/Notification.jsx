import { useContext, useState } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotificationsFunc";
import { FaMessage } from "react-icons/fa6";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    notifications,
    userChats,
    allUsers,
    markAllNotificationAsRead,
    markNotificationAsRead,
  } = useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const modifiedNotifications = notifications.map((n) => {
    const sender = allUsers.find((user) => user._id === n.senderId);
    return {
      ...n,
      senderName: sender?.name,
    };
  });

  const toggleNotification = () => {
    setIsOpen(!isOpen);
  };

  // console.log("notifications", notifications);
  // console.log("unreadNotifications", unreadNotifications);
  // console.log("modifiedNotifications", modifiedNotifications);

  return (
    <>
      <div className="text-white flex relative cursor-pointer">
        <div onClick={toggleNotification}>
          <div className="relative">
            <FaMessage size={24} />
            {unreadNotifications?.length === 0 ? null : (
              <div className="absolute -top-2 -right-3 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">
                {unreadNotifications?.length}
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className={`absolute top-20 right-52 z-50`}>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-semibold mb-2">Notifications</p>
              <button
                className="text-lg font-semibold text-blue-500 mb-2 ml-10"
                onClick={markAllNotificationAsRead}
              >
                Mark all as read
              </button>
            </div>
            {modifiedNotifications?.length === 0 ? (
              <span className="text-gray-500">No notifications yet</span>
            ) : null}
            {modifiedNotifications &&
              modifiedNotifications.map((n, index) => (
                <div
                  key={index}
                  onClick={() => {
                    markNotificationAsRead(n, userChats, user, notifications);
                    setIsOpen(false);
                  }}
                  className="cursor-pointer mb-2"
                >
                  <span className="text-sm">{`${n.senderName} sent you a message`}</span>
                </div>
              ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Notification;
