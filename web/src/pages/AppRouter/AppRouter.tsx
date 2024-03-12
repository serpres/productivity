import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { MainPage } from '@/pages/MainPage';
import { TimerPage, TimerPomodoroPage } from '@/pages/TimerPage/';
import { POMODORO_PATH, TIMER_PATH } from '@/shared/consts/paths';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<MainPage />} />
        <Route path={TIMER_PATH}>
          <Route index element={<TimerPage />} />
          <Route path={POMODORO_PATH} element={<TimerPomodoroPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
