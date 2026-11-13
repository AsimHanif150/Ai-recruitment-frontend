import{Outlet} from "react-router-dom";
import Navbar from  "../Components/common/Navbar";
import Footer from  "../Components/common/Footer";

function MainLayout() {
    return(
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar />
        <main className="flex-1">
            <Outlet />
            </main>
            <Footer />
            </div>
        </>
    );

}
export default MainLayout;