import { useState } from "react";
// import components
import Header from "@/components/Header";
import TodoItem from "@/components/TodoItem";
import Pagination from "@/components/Pagination";
import Modal from "@/components/Modal";

// import icon
import { Plus } from "react-feather";

import { wrapper } from "@/lib/store";
import {
  getRunningQueriesThunk,
  getTodos,
  useCreateTodosMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
} from "@/lib/reducer";

// import type
import { Props, Todos } from "./_app";

const Home = ({ page }: Props) => {
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();
  const [createTodos] = useCreateTodosMutation();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [startData, setStartData] = useState<number>(page);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: todos } = useGetTodosQuery(startData);

  const nextPage = (): boolean | void => {
    if (currentPage == 20) {
      return false;
    } else {
      setStartData(startData + 10);
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = (): boolean | void => {
    if (startData > 0) {
      setStartData(startData - 10);
      setCurrentPage(currentPage - 1);
    }
  };

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
          {todos?.map((todo) => (
            <TodoItem
              key={String(todo.id)}
              todo={todo}
              updateTodos={updateTodos}
              deleteTodos={deleteTodos}
            />
          ))}
        </section>

        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />

        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          createTodos={createTodos}
        />
      </main>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const page = 0;
  store.dispatch(getTodos.initiate(page));

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: { page },
  };
});
export default Home;
