import React from "react";

const Modal = ({ isOpen, onClose, title, message, cancelText, confirmText, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="allm-fixed allm-w-screen allm-h-screen allm-top-0 allm-left-0 allm-z-[9999]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="allm-fixed allm-inset-0 allm-bg-gray-500 allm-bg-opacity-75 allm-transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      ></div>

      <div className="allm-fixed allm-inset-0 allm-z-10 allm-w-screen allm-overflow-y-auto">
        <div className="allm-flex allm-min-h-full allm-items-center allm-justify-center allm-p-4 allm-text-center allm-sm:allm-items-center allm-sm:p-0">
          <div className="allm-relative allm-min-w-96 allm-transform allm-overflow-hidden allm-rounded-lg allm-bg-white allm-text-left allm-shadow-xl allm-transition-all allm-sm:allm-my-8 allm-sm:allm-w-full allm-sm:allm-max-w-lg">
            <div className="allm-bg-white allm-px-4 allm-pb-4 allm-pt-5 allm-sm:allm-p-6 allm-sm:allm-pb-4">
              <div className="allm-sm:allm-flex allm-sm:allm-items-start">
                <div className="allm-mx-auto allm-flex allm-h-12 allm-w-12 allm-flex-shrink-0 allm-items-center allm-justify-center allm-rounded-full allm-bg-red-100 allm-sm:allm-mx-0 allm-sm:allm-h-10 allm-sm:allm-w-10">
                  <svg
                    className="allm-h-6 allm-w-6 allm-text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="allm-mt-3 allm-text-center allm-sm:allm-ml-4 allm-sm:allm-mt-0 allm-sm:allm-text-left">
                  <h3
                    className="allm-text-base allm-font-semibold allm-leading-6 allm-text-gray-900"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="allm-mt-2">
                    <p className="allm-text-sm allm-text-gray-500">{message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="allm-bg-gray-50 allm-px-4 allm-py-3 allm-flex allm-justify-end allm-gap-4 allm-sm:allm-flex-row-reverse allm-sm:allm-px-6">
              <button
                type="button"
                className="allm-border-none allm-mt-3 allm-cursor-pointer allm-inline-flex allm-justify-center allm-rounded-md allm-bg-white allm-px-3 allm-py-2 allm-text-sm allm-font-semibold allm-text-gray-900 allm-shadow-sm allm-ring-1 allm-ring-inset allm-ring-gray-300 allm-hover:bg-gray-50 allm-sm:allm-mt-0 allm-sm:allm-w-auto"
                onClick={onClose}
              >
                {cancelText}
              </button>
              <button
                type="button"
                className="allm-border-none allm-mt-3 allm-cursor-pointer allm-inline-flex allm-justify-center allm-rounded-md allm-bg-red-600 allm-px-3 allm-py-2 allm-text-sm allm-font-semibold allm-text-white allm-shadow-sm allm-hover:bg-red-500 allm-sm:allm-ml-3 allm-sm:allm-w-auto"
                onClick={onConfirm}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
