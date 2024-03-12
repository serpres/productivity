import './global.scss';

import { FC, useEffect } from 'react';

import { AppRouter } from '@/pages/AppRouter/AppRouter';
export const App: FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};
