import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../store/hooks";
import { setFilter, setQuery } from "../../store/slices/filterSlice";
import { BiSearch } from "react-icons/bi";

type Props = {
  uniqueCities: string[];
  filter: string;
};

const Filter = ({ uniqueCities, filter }: Props) => {
  const dispatch = useAppDispatch();

  const handleCity = useDebouncedCallback((city: string) => {
    dispatch(setFilter(city));
  }, 500);

  const handleSearch = useDebouncedCallback((q: string) => {
    dispatch(setQuery(q));
  }, 500);

  return (
    <div className="max-w-lvh mx-auto p-5 mb-10 bg-neutral-50 rounded-lg space-y-5">
      <div className="relative lg:max-w-2/3 border border-neutral-200 bg-neutral-100 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Search anything"
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 w-full outline-none "
        />
        <BiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl" />
      </div>

      <div className="space-y-3 flex flex-col md:flex-row space-x-4 ">
        <p className="text-xl">Filter by City:</p>

        <select
          className="border p-2 rounded-lg cursor-pointer hover:bg-neutral-200"
          value={filter}
          onChange={(e) => handleCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
