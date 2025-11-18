import type { ItemState } from "../../store/types";

type Props = {
  items: ItemState[];
};

export const Table = ({ items }: Props) => {
  return (
    <div className="rounded-lg border border-neutral-200 ">
      <table className="w-full overflow-scroll">
        <thead className="header ">
          <tr className="font-bold rounded-lg">
            <th className="rounded-lg">Name</th>
            <th>Street</th>
            <th>City</th>
            <th className="rounded-lg">State</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.street}</td>
              <td>{i.city}</td>
              <td>{i.state}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan={4}>No results</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
