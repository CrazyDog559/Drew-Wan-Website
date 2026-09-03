import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useScrollToHash from '../../hooks/useScrollToHash';

const Layout = () => {
  useScrollToHash();

  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <Header />
      <main id="main" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
