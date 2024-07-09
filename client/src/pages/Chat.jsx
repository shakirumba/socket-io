import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";
import { Link } from "react-router-dom";
import UserChat from "./component/chat/UserChat";
import PotentialChats from "./component/chat/PotentialChats";
import ChatBox from "./component/chat/ChatBox";

export default function Chat() {
  const { user, logoutUser } = useContext(AuthContext);
  const {
    userChats,
    isUserChatsLoading,
    userChatsError,
    getUserChats,
    updateCurrentChat,
  } = useContext(ChatContext);
  console.log("userChats", userChats);

  return (
    <>
      <div className="text-center">
        <Link onClick={logoutUser} to="/login">
          logout
        </Link>
        <div className="ml-16">
          <div className="mb-16">
            <PotentialChats />
          </div>

          {userChats?.map((chat, index) => {
            return (
              <div key={index} onClick={() => updateCurrentChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            );
          })}
          <div>
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
}
