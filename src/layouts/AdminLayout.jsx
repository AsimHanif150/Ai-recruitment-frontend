import {Outlet} from "react-router-dom";
import Sidebar from "../Components/admin/Sidebar";
import Topnavbar from "../Components/admin/Topnavbar";

function AdminLayout() {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topnavbar />
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
        </main>
      </div>
      </div>
    )
}

export default AdminLayout;