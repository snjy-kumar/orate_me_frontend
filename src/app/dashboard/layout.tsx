import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

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
