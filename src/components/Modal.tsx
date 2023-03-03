import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  createTodos: any;
}

const Modal = ({ isOpen, setIsOpen, createTodos }: Props) => {
  const [input, setInput] = useState<string>("");
  const closeModal = () => {
    setIsOpen(false);
  };

  const doCreateTodos = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = document.getElementById("title") as HTMLInputElement;
    let id: number = Math.floor(Math.random() * (99999 - 1000) + 1000);

    createTodos({ userId: 2, id, title: input.value, completed: false });
    setInput("");
    setIsOpen(false);
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in"
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
                  <div className="mt-4 text-sm text-white">
                    <form onSubmit={doCreateTodos}>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Write your todo"
                        className="w-full px-2 outline-none border h-10 rounded-md text-black"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setInput(e.target.value)
                        }
                      />
                      <div className="flex justify-end">
                        <button
                          className="bg-sky-600 mt-4 px-4 rounded-md p-1"
                          disabled={input.length === 0 ? true : false}
                        >
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
