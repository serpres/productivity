import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import {
  HabitsManagePage,
  HabitsPage,
  HabitsStatisticsPage,
} from '@/pages/HabitsPage';
import { MainPage } from '@/pages/MainPage';
import { TasksHistoryPage, TasksPage } from '@/pages/TasksPage';
import { TimerPage, TimerPomodoroPage } from '@/pages/TimerPage/';
import {
  HABITS_PATH,
  MANAGE_PATH,
  POMODORO_PATH,
  STATISTICS_PATH,
  TIMER_PATH,
} from '@/shared/consts/paths';
import { HISTORY_PATH, TASKS_PATH } from '@/shared/consts/paths';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<MainPage />} />
        <Route path={TIMER_PATH}>
          <Route index element={<TimerPage />} />
          <Route path={POMODORO_PATH} element={<TimerPomodoroPage />} />
        </Route>
        <Route path={HABITS_PATH}>
          <Route index element={<HabitsPage />} />
          <Route path={STATISTICS_PATH} element={<HabitsStatisticsPage />} />
          <Route path={MANAGE_PATH} element={<HabitsManagePage />} />
        </Route>
        <Route path={TASKS_PATH}>
          <Route index element={<TasksPage />} />
          <Route path={HISTORY_PATH} element={<TasksHistoryPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
