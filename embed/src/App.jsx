import useGetScriptAttributes from "@/hooks/useScriptAttributes";
import useSessionId from "@/hooks/useSessionId";
import useOpenChat from "@/hooks/useOpen";
import Head from "@/components/Head";
import OpenButton from "@/components/OpenButton";
import ChatWindow from "./components/ChatWindow";
import { useEffect, useState, useCallback } from "react";

export default function App() {
  const { isChatOpen, toggleOpenChat } = useOpenChat();
  const embedSettings = useGetScriptAttributes();
  const sessionId = useSessionId();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  useEffect(() => {
    setIsFullscreen(embedSettings.isFullscreen === 'true');
  }, [embedSettings.isFullscreen]);
  useEffect(() => {
    if (embedSettings.openOnLoad === "on") {
      toggleOpenChat(true);
    }
  }, [embedSettings.loaded]);
  const position = embedSettings.position || "bottom-right";
  const positionClasses = {
    "bottom-left": isFullscreen
      ? "allm-bottom-0 allm-left-0"
      : "allm-bottom-0 allm-left-0 allm-ml-4",
    "bottom-right": isFullscreen
      ? "allm-bottom-0 allm-right-0 "
      : "allm-bottom-0 allm-right-0 allm-mr-4",
    "top-left": isFullscreen
      ? "allm-top-0 allm-left-0"
      : "allm-top-0 allm-left-0 allm-ml-4 allm-mt-4",
    "top-right": isFullscreen
      ? "allm-top-0 allm-right-0"
      : "allm-top-0 allm-right-0 allm-mr-4 allm-mt-4",
  };
  const getClassName = useCallback(() => {
    const tmpClassName = positionClasses[position];
    return isFullscreen
      ? tmpClassName
      : `allm-mb-4 allm-md:mr-4 ${tmpClassName}`;
  }, [isFullscreen, position]);

  if (!embedSettings.loaded) return null;

  const windowWidth = embedSettings.windowWidth ?? "400px";
  const windowHeight = embedSettings.windowHeight ?? "700px";
  const getContainerClassName = () => {
    return embedSettings.isFixed === 'true' ? "allm-fixed allm-z-50" : "allm-relative allm-z-50";
  };
  return (
    <>
      <Head />
      <div
        id="anything-llm-embed-chat-container"
        className={`${getContainerClassName()} allm-inset-0 ${isChatOpen ? "allm-block" : "allm-hidden"}`}
      >
        <div
          style={{
            maxWidth: isFullscreen ? "100vw" : windowWidth,
            maxHeight: isFullscreen ? "100vh" : windowHeight,
          }}
          className={`allm-h-full allm-w-full allm-bg-white allm-fixed allm-bottom-0 allm-right-0 allm-rounded-2xl ${getClassName()} allm-border allm-border-gray-300 allm-shadow-[0_4px_14px_rgba(0,0,0,0.25)]`}
          id="anything-llm-chat"
        >
          {isChatOpen && (
            <ChatWindow
              isFullscreen={isFullscreen}
              toggleFullscreen={toggleFullscreen}
              closeChat={() => toggleOpenChat(false)}
              settings={embedSettings}
              sessionId={sessionId}
            />
          )}
        </div>
      </div>
      {!isChatOpen && (
        <div
          id="anything-llm-embed-chat-button-container"
          className={`allm-fixed allm-bottom-0 ${positionClasses[position]} allm-mb-4 allm-z-50`}
        >
          <OpenButton
            settings={embedSettings}
            isOpen={isChatOpen}
            toggleOpen={() => toggleOpenChat(true)}
          />
        </div>
      )}
    </>
  );
}
