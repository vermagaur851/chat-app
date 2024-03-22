import React from "react";

function ChatBox({ sendChat, message, setMessage, chat }) {
  return (
    <div className="">
            <div className="min-h-20 max-w-52 overflow-y-auto max-h-40 bg-gray-500 mt-2 rounded-lg text-sm p-2 scroll-m-1">
        {chat.map((payload,index) => {
          return (
            <div key={index} className="flex flex-row min-w-24">
              
                <p className="min-w-24 overflow-x-auto"><span className="text-red-900 inline">{payload.userName}:</span>{payload.message}</p>
              
            </div>
          );
        })}
      </div>
      <form onSubmit={sendChat} className="middle mt-2 ">
        <input
          type="text"
          placeholder="Enter Text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-gray-800 rounded-sm text-white mr-1 p-1 text-sm"
        />
        <button type="submit" className="bg-blue-600 rounded-md text-sm p-1">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
