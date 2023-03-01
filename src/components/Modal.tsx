import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Modal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal = ({ isOpen, setIsOpen }: Modal) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add your todo😃
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-white">
                    <form>
                      <input
                        type="text"
                        placeholder="Write your todo"
                        className="w-full px-2 outline-none border h-10 rounded-md text-black"
                      />
                      <div className="flex justify-end">
                        <button className="mt-2 px-2 rounded-md bg-violet-500 p-1">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
