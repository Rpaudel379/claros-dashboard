import { Dashboard } from "./components/dashboard/dashboard";

export const App = () => {
  return (
    <div>
      <Dashboard>
        <Dashboard.Sidebar>
          <h2 className="font-bold text-lg mb-4 cursor-pointer select-none">
            Dashboard
          </h2>
          <ul className="space-y-2">
            <li className="link">
              <a href="#home">Home</a>
            </li>
            <li className="link">
              <a href="#data">Data</a>
            </li>
          </ul>
        </Dashboard.Sidebar>

        <Dashboard.Main>
          <header className="flex items-center gap-2 mb-4">
            <Dashboard.Toggle />
            <h1 className="text-2xl font-semibold">Dashboard</h1>
          </header>

          <div>
            <h1 className="text-4xl font-medium my-3">Refuge Restrooms</h1>
            <p className="text-neutral-800">
              Refuge Restrooms is a web application that seeks to provide safe
              restroom access for transgender, intersex, and gender
              nonconforming individuals. Users can search for restrooms by
              proximity to a search location, add new restroom listings, as well
              as comment and rate existing listings.
            </p>
          </div>
        </Dashboard.Main>
      </Dashboard>
    </div>
  );
};
