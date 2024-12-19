import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const DashboardLayout = () => {
  const page = location.pathname.split("/")[1];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#F1F1F1] flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        page=""
      />
      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)} // Close sidebar when overlay is clicked
        ></div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header page={page} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 overflow-y-auto pt-5 pb-20 bg-[#F1F1F1] h-full px-3 md:px-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
