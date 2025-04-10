// src/components/Sidebar.jsx
import { Link, useRouterState } from '@tanstack/react-router';

const Sidebar = () => {
  const { location } = useRouterState();

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive(path)
        ? 'bg-blue-600 text-white font-semibold shadow-md'
        : 'hover:bg-blue-500 hover:text-white text-gray-300'
    }`;

  return (
    <aside className="w-64 h-screen bg-[#1e293b] text-white p-6 shadow-xl sticky top-0">
      <h2 className="text-2xl font-bold mb-8">⚙️ Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className={linkStyle('/')}>
            💻 Compiler
          </Link>
        </li>
        <li>
          <Link to="/docs" className={linkStyle('/docs')}>
            📚 Documentation
          </Link>
        </li>
        <li>
          <Link to="/settings" className={linkStyle('/settings')}>
            🛠️ Settings
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
