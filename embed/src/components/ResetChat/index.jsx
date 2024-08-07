import ChatService from "@/models/chatService";
import { ArrowCounterClockwise } from "@phosphor-icons/react";
import Modal from "../Modal";
import { useModal } from "@/hooks/useModal";
export default function ResetChat({
  className,
  setChatHistory,
  settings,
  sessionId,
}) {
  const { isOpen, openModal, closeModal } = useModal();
  const handleChatReset = async () => {
    openModal();
  };
  const handleConfirm = async () => {
    await ChatService.resetEmbedChatSession(settings, sessionId);
    setChatHistory([]);
    closeModal();
  };
  return (
    <>
      <div
        className={
          "allm-flex allm-justify-center" + className ? ` ${className}` : ""
        }
      >
        <button
          style={{ color: "#7A7D7E" }}
          className="allm-flex allm-gap-2 allm-items-center hover:allm-cursor-pointer allm-border-none allm-text-sm allm-bg-transparent hover:allm-opacity-80 hover:allm-underline"
          onClick={() => handleChatReset()}
        >
          <ArrowCounterClockwise size={24} />
          <span>重置</span>
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="确认操作"
        message="确认要清空当前的记录吗？"
        confirmText="确认"
        cancelText="取消"
        onConfirm={handleConfirm}
      />
    </>
  );
}
