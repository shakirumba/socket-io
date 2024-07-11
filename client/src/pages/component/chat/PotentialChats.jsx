import { useContext } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";

const PotentialChats = () => {
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="flex space-x-4">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div
                key={index}
                onClick={() => createChat(user._id, u._id)}
                className="  relative border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1 cursor-pointer "
              >
                {onlineUsers?.some((user) => user.userId === u._id) && (
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                )}

                {u.name}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;
