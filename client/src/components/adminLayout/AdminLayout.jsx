import React from 'react';
import Footer from '../footter/Footer';
import Header from './Header';

function AdminLayout({ children }) {
  return (
    <div>
      <Header />
      <div>AdminLayout{children}</div>
      <Footer />
    </div>
  );
}

export default AdminLayout;
