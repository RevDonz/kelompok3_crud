import { ReactNode } from 'react';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-slate-600 min-h-screen relative'>
      <Navbar />
      <div className='max-w-6xl mx-auto h-full px-2 md:px-3 pt-20 pb-10 flex flex-col'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
