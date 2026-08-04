import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollToHash from '../../hooks/useScrollToHash';

const Layout = () => {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
