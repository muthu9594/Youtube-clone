import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      console.log("API POLING");

      dispatch(
        addMessage({ name: generateRandomName(), message: randomMessage(20) })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("message", liveMessage);
          dispatch(
            addMessage({
              name: "mukesh",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-96"
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button type="submit" className="px-2 mx-2 bg-green-100">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
