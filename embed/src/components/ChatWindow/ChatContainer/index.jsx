import React, { useState, useEffect } from "react";
import ChatHistory from "./ChatHistory";
import PromptInput from "./PromptInput";
import handleChat from "@/utils/chat";
import ChatService from "@/models/chatService";

export default function ChatContainer({
  sessionId,
  settings,
  knownHistory = [],
}) {
  const [message, setMessage] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [chatHistory, setChatHistory] = useState(knownHistory);

  // Resync history if the ref to known history changes
  // eg: cleared.
  useEffect(() => {
    if (knownHistory.length !== chatHistory.length)
      setChatHistory([...knownHistory]);
  }, [knownHistory]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const checkWords = async (cnt) => {
    return await ChatService.checkWords(
      cnt,
      settings,
      (checkResult) => {
        if (checkResult.message) {
          setCheckMessage(checkResult.message);
          return  false;
        } else {
          return true;
        }
      }
    );
  };
  const handleCloseCheckMessage = () => {
    setCheckMessage("");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!message || message === "") return false;
    const checkResult = await checkWords(message);
    if(!checkResult) return false;
    const prevChatHistory = [
      ...chatHistory,
      { content: message, role: "user" },
      {
        content: "",
        role: "assistant",
        pending: true,
        userMessage: message,
        animate: true,
      },
    ];
    setChatHistory(prevChatHistory);
    setMessage("");
    setLoadingResponse(true);
  };

  useEffect(() => {
    async function fetchReply() {
      const promptMessage =
        chatHistory.length > 0 ? chatHistory[chatHistory.length - 1] : null;
      const remHistory = chatHistory.length > 0 ? chatHistory.slice(0, -1) : [];
      var _chatHistory = [...remHistory];

      if (!promptMessage || !promptMessage?.userMessage) {
        setLoadingResponse(false);
        return false;
      }

      await ChatService.streamChat(
        sessionId,
        settings,
        promptMessage.userMessage,
        (chatResult) =>
          handleChat(
            chatResult,
            setLoadingResponse,
            setChatHistory,
            remHistory,
            _chatHistory
          )
      );
      return;
    }

    loadingResponse === true && fetchReply();
  }, [loadingResponse, chatHistory]);

  return (
    <div className="allm-h-full allm-w-full allm-flex allm-flex-col">
      <div className="allm-flex-grow allm-overflow-y-auto">
        <ChatHistory settings={settings} history={chatHistory} />
      </div>
      {checkMessage ? (
        <div
          class="allm-bg-red-100 allm-border allm-border-red-400 allm-text-red-700 allm-px-4 allm-py-3 allm-rounded allm-relative"
          role="alert"
        >
          <span class="allm-block allm-sm:inline">{checkMessage}</span>
          <span
            class="allm-absolute allm-top-0 allm-bottom-0 allm-right-0 allm-px-4 allm-py-3"
            onClick={handleCloseCheckMessage}
          >
            <svg
              class="allm-fill-current allm-h-4 allm-w-4 allm-text-red-500 allm-cursor-pointer"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : null}
      <PromptInput
        checkMessage={checkMessage}
        message={message}
        submit={handleSubmit}
        onChange={handleMessageChange}
        inputDisabled={loadingResponse}
        buttonDisabled={loadingResponse}
      />
    </div>
  );
}
