import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { newQuote, randomNamegenerate } from "../utils/helper";

const LiveChat = () => {
  const [chat, setChat] = useState();
  const liveMessage = useSelector((store) => store.Chat.liveChat);

  const dispatch = useDispatch();

  const chatHandler = (e) => {
    e.preventDefault();
    console.log(chat);
    dispatch(
      addChat({
        name: "Sumit",
        message: chat,
      })
    );
    setChat("");
  };

  useEffect(() => {
    //api polling
    let clear = setInterval(() => {
      //  console.log("Api polling")
      dispatch(
        addChat({
          name: randomNamegenerate(),
          message: newQuote(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(clear);
    };
  }, []);
  return (
    <div className="">
      <div>
        {liveMessage &&
          liveMessage.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
      </div>
      <div className="flex">
        <input
          type="text"
          name=""
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          placeholder="Chat"
          id=""
          className="border border-black w-full px-2 py-1 shadow-lg "
        />
        <button
          className=" px-2 py-1 border border-black bg-gray-100"
          onClick={chatHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
