import { ChevronLeft, ChevronRight } from "react-feather";

type Props = {
  prevPage: () => void;
  nextPage: () => void;
  currentPage: number;
};

const Pagination = ({ prevPage, nextPage, currentPage }: Props) => {
  return (
    <section className="flex mx-12 md:mx-20 px-5 py-3 rounded-full justify-between bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg text-white">
      <button className="flex items-center" onClick={prevPage}>
        <ChevronLeft /> Prev
      </button>
      <p>{currentPage}</p>
      <button className="flex items-center" onClick={nextPage}>
        Next <ChevronRight />
      </button>
    </section>
  );
};

export default Pagination;
