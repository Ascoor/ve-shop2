

import React from 'react';

import 'tailwindcss/tailwind.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
const LandingPage = React.lazy(() => import('./components/Guest/LandingPage'));

export default function App() {

  return (
 
    <div className="App" dir="rtl">

      <LandingPage />
  </div>
  );
}