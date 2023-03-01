import { useState } from "react";
// import components
import Header from "@/components/Header";
import TodoItem from "@/components/TodoItem";

// import icon
import { Plus } from "react-feather";
import Modal from "@/components/Modal";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="lg:px-40 xl:px-[400px] 2xl:px-[800px]">
      <Header />
      <main className="bg-[#EEEEEE] pb-5">
        <section className="flex justify-between items-center text-sm p-3">
          <h1 className="w-[75%] font-semibold">
            What do you want to get done today?
          </h1>
          <button
            className="w-10 h-10 btn bg-gradient-to-r from-sky-500 to-indigo-500 p-1 rounded-full text-white text-4xl flex items-center justify-center shadow-md"
            onClick={() => setIsOpen(true)}
          >
            <Plus size={30} color="white" />
          </button>
        </section>
        <section className="flex flex-col gap-3 mx-3 pb-5">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </section>

        <Pagination />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
    </div>
  );
}
