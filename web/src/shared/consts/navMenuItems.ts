import {
  HABITS_PATH,
  HISTORY_PATH,
  MANAGE_PATH,
  POMODORO_PATH,
  STATISTICS_PATH,
  TASKS_PATH,
  TIMER_PATH,
} from '@/shared/consts/paths';
import { MenuItem } from '@/shared/ui/NavMenu/types';

export const NAV_MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'timer',
    path: TIMER_PATH,
    childItems: [
      {
        id: '1.1',
        title: 'pomodoro',
        path: `${TIMER_PATH}/${POMODORO_PATH}`,
      },
    ],
  },
  {
    id: '2',
    title: 'habits',
    path: HABITS_PATH,
    childItems: [
      {
        id: '2.1',
        title: 'statistics',
        path: `${HABITS_PATH}/${STATISTICS_PATH}`,
      },
      {
        id: '2.2',
        title: 'manage',
        path: `${HABITS_PATH}/${MANAGE_PATH}`,
      },
    ],
  },
  {
    id: '3',
    title: 'tasks',
    path: TASKS_PATH,
    childItems: [
      {
        id: '3.1',
        title: 'history',
        path: `${TASKS_PATH}/${HISTORY_PATH}`,
      },
    ],
  },
];
