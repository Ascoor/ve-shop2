

import React from 'react';

import 'tailwindcss/tailwind.css';

import './App.css';
const LandingPage = React.lazy(() => import('./components/Guest/LandingPage'));

export default function App() {

  return (
 
    <div className="App" dir="rtl">

      <LandingPage />
  </div>
  );
}