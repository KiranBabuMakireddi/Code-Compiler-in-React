import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet } from '@tanstack/react-router';

const App = () => (
  <div className="flex flex-col h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 bg-gray-900 text-white p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  </div>
);

export default App;