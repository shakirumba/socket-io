import { useContext, useState } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotificationsFunc";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const { notifications, userChats, allUsers } = useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const modifiedNotifications = notifications.map((n) => {
    const sender = allUsers.find((user) => user._id === n.senderId);
    return {
      ...n,
      senderName: sender?.name,
    };
  });

  console.log("notifications", notifications);
  console.log("unreadNotifications", unreadNotifications);
  console.log("modifiedNotifications", modifiedNotifications);

  return (
    <div className="text-white flex">
      <div>
        <div>Notifications</div>
        <div>
          {unreadNotifications.length === 0 ? null : (
            <span>{unreadNotifications.length}</span>
          )}
        </div>
        {isOpen ? (
          <div>
            <div className="border-gray-300 border-4 ">notifications</div>
            <div className="border-gray-300 border-4 ">mark all as read</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Notification;
