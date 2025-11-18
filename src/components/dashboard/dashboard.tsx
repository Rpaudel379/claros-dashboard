import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
} from "react";
import { BiBookContent } from "react-icons/bi";

type DashboardContextProps = {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
};

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

const useDashboard = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("Dashboard components must be inside <Dashboard>");
  return ctx;
};

type Props = {
  children: ReactNode;
};

export const Dashboard: FC<Props> & {
  Sidebar: FC<SidebarProps>;
  Main: FC<MainProps>;
  Toggle: FC;
} = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <DashboardContext
      value={{ isCollapsed, setIsCollapsed, mobileOpen, setMobileOpen }}
    >
      <div className="flex min-h-screen">{children}</div>
    </DashboardContext>
  );
};

/* sidebar */
type SidebarProps = {
  children?: ReactNode;
};

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const { isCollapsed, mobileOpen, setMobileOpen } = useDashboard();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static z-30 top-0 left-0 bottom-0 bg-neutral-50 shadow-md
          transition-all duration-300
          ${isCollapsed ? "w-0" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          overflow-hidden
        `}
      >
        <div className="p-4">{children}</div>
      </aside>
    </>
  );
};

/* main content area of the dashboard */
type MainProps = {
  children?: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="flex-1 p-4 md:ml-0 ml-0 transition-all duration-300">
      {children}
    </main>
  );
};

const Toggle: FC = () => {
  const { isCollapsed, setIsCollapsed, setMobileOpen } = useDashboard();

  return (
    <button
      onClick={() => {
        if (window.innerWidth < 768) {
          setMobileOpen(true);
        } else {
          setIsCollapsed(!isCollapsed);
        }
      }}
      className="p-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer"
    >
      <BiBookContent className="text-2xl" />
    </button>
  );
};

Dashboard.Sidebar = Sidebar;
Dashboard.Main = Main;
Dashboard.Toggle = Toggle;
