import { HomeIcon, ShoppingCartIcon, ChartBarIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // adding to change color for selected tab..

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
      <nav className="space-y-2">
        <Link
          to="/stores"
          className={`flex items-center p-2 rounded ${location.pathname === "/stores" ? "bg-gray-300" : "bg-gray-100"}`}
        >
          <HomeIcon className="h-5 w-5 mr-2" /> Store
        </Link>
        <Link
          to="/sku"
          className={`flex items-center p-2 rounded ${location.pathname === "/sku" ? "bg-gray-300" : "bg-gray-100"}`}
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" /> SKU
        </Link>
        <Link
          to="/planning"
          className={`flex items-center p-2 rounded ${location.pathname === "/planning" ? "bg-gray-300" : "bg-gray-100"}`}
        >
          <TableCellsIcon className="h-5 w-5 mr-2" /> Planning
        </Link>
        <Link
          to="/charts"
          className={`flex items-center p-2 rounded ${location.pathname === "/charts" ? "bg-gray-300" : "bg-gray-100"}`}
        >
          <ChartBarIcon className="h-5 w-5 mr-2" /> Charts
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
