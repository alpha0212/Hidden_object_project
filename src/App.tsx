import { IntroPage, OneExam, TwoExam } from 'Pages';
import React from 'react';
import { Routes, Route } from 'react-router';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<IntroPage />} />
      <Route path="/oneexam" element={<OneExam />} />
      <Route path="/twoexam" element={<TwoExam />} />
    </Routes>
  );
};
