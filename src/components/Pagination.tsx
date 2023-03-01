import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Pagination = () => {
  return (
    <section className="flex mx-12 md:mx-20 px-5 py-3 rounded-full justify-between bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg text-white">
      <button className="flex items-center">
        <ChevronLeft /> Prev
      </button>
      <p>1</p>
      <button className="flex items-center">
        Next <ChevronRight />
      </button>
    </section>
  );
};

export default Pagination;
