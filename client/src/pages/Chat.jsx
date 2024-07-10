import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";
import { Link } from "react-router-dom";
import UserChat from "./component/chat/UserChat";
import PotentialChats from "./component/chat/PotentialChats";
import ChatBox from "./component/chat/ChatBox";
import Notification from "./component/chat/Notification";

export default function Chat() {
  const { user, logoutUser } = useContext(AuthContext);
  const {
    userChats,
    isUserChatsLoading,
    userChatsError,
    getUserChats,
    updateCurrentChat,
    onlineUsers,
  } = useContext(ChatContext);

  return (
    <>
      <div className="bg-[#282C34] flex min-h-screen p-16">
        <div>
          <button className="border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
            <Link onClick={logoutUser} to="/login">
              logout
            </Link>
          </button>
        </div>
        <div>
          <Notification />
        </div>
        <div className=" mx-auto flex text-white container border-4 border-gray-300 rounded-[20px] p-16">
          <div className="w-[40%]">
            <div className="flex">
              <div className="mb-8">
                <PotentialChats />
              </div>
            </div>

            <div className="border-4 border-gray-300 h-96 overflow-auto">
              {userChats?.map((chat, index) => {
                return (
                  <div key={index} onClick={() => updateCurrentChat(chat)}>
                    <UserChat
                      chat={chat}
                      user={user}
                      onlineUsers={onlineUsers}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <ChatBox />
        </div>
      </div>
    </>
  );
}
