import Sidebar from "./sidebar";

function Layout({ children }) {
    return (
      <div className="bg-white">
        <Sidebar/>
          {children}
        
      </div>
    );
  }
  
export default Layout;