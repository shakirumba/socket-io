import { useContext } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";

const PotentialChats = () => {
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex ">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div
                key={index}
                onClick={() => createChat(user._id, u._id)}
                className="mb-8  border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1"
              >
                <span
                  className={
                    onlineUsers?.some((user) => user.userId === u._id)
                      ? "text-yellow-500"
                      : ""
                  }
                >
                  {u.name}
                </span>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;
