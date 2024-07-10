import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { ChatContext } from "./ChatContext";
import { Link } from "react-router-dom";
import UserChat from "./component/chat/UserChat";
import PotentialChats from "./component/chat/PotentialChats";
import ChatBox from "./component/chat/ChatBox";

export default function Chat() {
  // const { user, logoutUser } = useContext(AuthContext);
  // const {
  //   userChats,
  //   isUserChatsLoading,
  //   userChatsError,
  //   getUserChats,
  //   updateCurrentChat,
  // } = useContext(ChatContext);
  // console.log("userChats", userChats);

  return (
    <>
      {/* <div className="text-center">
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
      </div> */}
      <div className="bg-[#282C34] flex min-h-screen p-16">
        <div className=" mx-auto flex text-white container border-4 border-gray-300 rounded-[20px] p-16">
          <div className="w-[40%]">
            <div className="flex">
              <div className="mb-8  border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
                potential chat1
              </div>
              <div className="mb-8 border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
                potential chat2
              </div>
              <div className="mb-8 border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
                potential chat3
              </div>
              <div className="mb-8 border-gray-300 border-4 rounded-full bg-gray-300 text-black p-1">
                potential chat4
              </div>
            </div>

            <div className="border-4 border-gray-300 h-96">
              <div className="bg-blue-600 mb-4 p-2">
                <div className="flex justify-between">
                  <div>name</div>
                  <div>online</div>
                </div>

                <div className="flex justify-between">
                  <div>text message</div>
                  <div>count</div>
                </div>
              </div>
              {/* <div className="bg-blue-600 mb-4">chat list</div>
              <div className="bg-blue-600 mb-4">chat list</div>
              <div className="bg-blue-600 mb-4">chat list</div> */}
            </div>
          </div>

          <div className="w-[60%] ml-4 border-4 border-gray-300">
            <div className="bg-gray-600 p-2 h-[10%]">
              <div className="mb-2">name</div>
              <div>Active </div>
            </div>
            <div className="h-[80%]">text area</div>
            <div className="h-[10%] border-4 border-gray-300 flex p-4">
              <div className="w-[80%]">
                <input className="rounded-full text-black p-1 w-full" />
              </div>
              <div className="w-[10%]">emoji</div>
              <div className="w-[10%]">send</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
