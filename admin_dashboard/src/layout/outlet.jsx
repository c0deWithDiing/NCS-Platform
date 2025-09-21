import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-6">NSC Admin</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/" className="hover:text-blue-400">Dashboard</Link>
          <Link to="/devices" className="hover:text-blue-400">Devices</Link>
          <Link to="/alerts" className="hover:text-blue-400">Alerts</Link>
          <Link to="/settings" className="hover:text-blue-400">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default outlet;