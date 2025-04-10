// src/components/Header.jsx
import { Link, useRouterState } from '@tanstack/react-router';

const Header = () => {
  const { location } = useRouterState();

  const isActive = (path) => location.pathname === path;

  // Static color classes to avoid Tailwind purging issues
  const colorMap = {
    '/': {
      base: 'bg-blue-600',
      hover: 'hover:bg-blue-500',
      ring: 'ring-blue-400',
    },
    '/about': {
      base: 'bg-emerald-600',
      hover: 'hover:bg-emerald-500',
      ring: 'ring-emerald-400',
    },
    '/help': {
      base: 'bg-purple-600',
      hover: 'hover:bg-purple-500',
      ring: 'ring-purple-400',
    },
  };

  const linkStyle = (path) => {
    const { base, hover, ring } = colorMap[path];

    return isActive(path)
      ? `px-5 py-2 rounded-xl font-semibold text-white ${base} ring-2 ${ring} scale-105 shadow-lg transition-all duration-300 ease-in-out`
      : `px-5 py-2 rounded-xl font-semibold text-white bg-white/10 ${hover} hover:scale-105 hover:shadow-lg hover:ring-2 ${ring} transition-all duration-300 ease-in-out`;
  };

  return (
    <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md backdrop-blur-lg bg-opacity-80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg tracking-wide">
          🚀 <span className="text-blue-400">CodeX</span> Editor
        </h1>
        <nav className="flex gap-4">
          <Link to="/" className={linkStyle('/')}>
            Compiler
          </Link>
          <Link to="/about" className={linkStyle('/about')}>
            About
          </Link>
          <Link to="/help" className={linkStyle('/help')}>
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
