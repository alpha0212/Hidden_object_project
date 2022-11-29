import { IntroPage, MainPage } from 'Pages';
import React from 'react';
import { Routes, Route } from 'react-router';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};
