import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchRestrooms } from "../../store/slices/dashboardSlice";
import { FiAlertCircle } from "react-icons/fi";
import { Table } from "./table";
import Filter from "./filter";
import Pagination from "./pagination";

export const Content = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.dashboard);
  const { filter, query } = useAppSelector((state) => state.filter);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page") ?? "1");

    dispatch(fetchRestrooms(page));
  }, [dispatch]);

  // filter by city
  const uniqueCities = [...new Set(items.map((item) => item.city))];

  const filteredData = useMemo(() => {
    return items?.filter(
      (item) =>
        (item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.city?.toLowerCase().includes(query.toLowerCase()) ||
          item.street?.toLowerCase().includes(query.toLowerCase()) ||
          item.state?.toLowerCase().includes(query.toLowerCase())) &&
        (filter === "" || item.city === filter)
    );
  }, [filter, items, query]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center ">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"></div>
          <p className="">Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-2/3 p-6 flex items-center justify-center gap-4">
        <FiAlertCircle className="w-6 h-6 flex-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-3xl">Error Loading Data</h3>
          <p className="mt-1 text-xl">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-5 lg:space-y-4 mx-auto ">
      <Filter uniqueCities={uniqueCities} filter={filter} />
      <Pagination />
      <Table items={filteredData} />
      <Pagination align="center" />
    </div>
  );
};
