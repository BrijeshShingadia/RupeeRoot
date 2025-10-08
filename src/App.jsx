import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const pages = {
    home: <div><h1>RupeeRoot</h1><p>Root your money, watch it grow.</p></div>,
    services: <div><h2>Services</h2><ul><li>Wealth Management</li><li>Investment Advisory</li></ul></div>,
    contact: <div><h2>Contact</h2><p>Email: contact@rupeeroot.com</p></div>
  };
  return (
    <div>
      <nav>
        {['home','services','contact'].map(p => <button key={p} onClick={() => setPage(p)}>{p}</button>)}
      </nav>
      <main>{pages[page]}</main>
    </div>
  );
}
