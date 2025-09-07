import { Routes } from '@angular/router';
import { TodayPages } from './features/todo/pages/today.pages';

export const routes: Routes = [
  {
    path: '',
    component: TodayPages,
  },
  {
    path: 'inbox',
    component: TodayPages,
  },
  {
    path: 'completed',
    component: TodayPages,
  },
];
