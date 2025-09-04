import { Routes } from '@angular/router';
import { MyDayPages } from './features/todo/pages/my-day.pages';

export const routes: Routes = [
  {
    path: '',
    component: MyDayPages,
  },
  {
    path: 'inbox',
    component: MyDayPages,
  },
  {
    path: 'completed',
    component: MyDayPages,
  },
];
