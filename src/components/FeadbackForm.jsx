import { useState } from "react";
export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");

  // Pretend to send a message.

  function sendMessage() {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await sendMessage(text);
    setStatus("sent");
  }
  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return (
      <h1 className="text-2xl py-10 text-center text-green-400 font-bold ">
        Thanks for feedback!
      </h1>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-2xl py-10 mx-10">
        How was your stay at The Prancing Pony?
      </p>
      <textarea
        className="w-auto h-auto mx-20 p-4 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        className="px-6 my-10 py-2 mx-20  bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p className="text-2xl py-10 mx-10">Sending...</p>}
    </form>
  );
}
