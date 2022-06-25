import { FCC } from "types/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const Layout: FCC = ({ children }) => {
    return (
        <div className="bg-slate-100 min-h-screen text-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
