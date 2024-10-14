import Footer from "@/components/Footer";
import Header from "@/components/Navbar";


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
