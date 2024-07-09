import { useContext } from "react";
import { ChatContext } from "../../ChatContext";
import { AuthContext } from "../../AuthContext";

const PotentialChats = () => {
  const { potentialChats, createChat } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="flex ">
        {potentialChats &&
          potentialChats.map((u, index) => {
            return (
              <div key={index} onClick={() => createChat(user._id, u._id)}>
                {u.name}{" "}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PotentialChats;
