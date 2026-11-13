import { Outlet } from "react-router-dom";
import Sidebar from "../Components/candidate/Sidebar";
import Topnavbar from "../Components/candidate/Topnavbar" ;

function CandidateLayout() {
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
export default CandidateLayout;