import React from "react";
import { Trash2 } from "react-feather";

const TodoItem = () => {
  return (
    <section className="px-3 bg-gradient-to-r from-fuchsia-500 to-violet-500 py-3 rounded-lg shadow-md">
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="w-5 h-5" />
          <h1 className="text-white text-sm">Memasak bersama ibu</h1>
        </div>
        <button className="">
          <Trash2 color="white" size={20} />
        </button>
      </div>
    </section>
  );
};

export default TodoItem;
