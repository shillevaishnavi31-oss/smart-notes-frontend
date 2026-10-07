import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-area">
        <Sidebar />

        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;