import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useAppDispatch } from "../../store/hooks";
import { fetchRestrooms } from "../../store/slices/dashboardSlice";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  align?: "center";
};

const Pagination = ({ align }: Props) => {
  const dispatch = useAppDispatch();

  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page") ?? "1");

  const handleNextPage = () => {
    const next = page + 1;
    dispatch(fetchRestrooms(next));

    params.set("page", String(next));

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const handlePrevPage = () => {
    if (page == 1) return;
    const prev = page - 1;
    dispatch(fetchRestrooms(prev));
    params.set("page", String(prev));
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const handlePage = useDebouncedCallback((p: string) => {
    const goto = parseInt(p) ?? 1;
    dispatch(fetchRestrooms(goto));
    params.set("page", String(goto));
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  }, 1000);
  return (
    <div className="space-y-3 flex justify-between px-4">
      <div className={` flex space-x-5 ${align && "w-fit mx-auto"}`}>
        <button className="pagination-link" onClick={() => handlePrevPage()}>
          <BiChevronLeft /> Prev
        </button>

        <button className="pagination-link" onClick={() => handleNextPage()}>
          <BiChevronRight /> Next
        </button>
      </div>

      {/* {enablePageSelection && ( */}
      <div className="flex items-center space-x-4 justify-end">
        <p>Go to page:</p>
        <input
          type="text"
          placeholder="page number"
          className="w-10"
          defaultValue={page}
          onChange={(e) => handlePage(e.target.value)}
        />
      </div>
      {/* )} */}
    </div>
  );
};

export default Pagination;
