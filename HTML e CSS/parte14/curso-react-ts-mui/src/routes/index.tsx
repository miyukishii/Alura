import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashbord } from '../pages';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/',
        label: 'Página inicial',
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Dashbord />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};