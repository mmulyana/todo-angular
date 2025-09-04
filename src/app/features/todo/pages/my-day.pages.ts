import { Component } from '@angular/core';
import { List } from '../component/list/list';
import { DefaultLayout } from '../../../shared/layouts/default/default-layout.component';

@Component({
  selector: 'app-page-todo',
  imports: [List, DefaultLayout],
  templateUrl: './my-day.pages.html',
  standalone: true,
})
export class MyDayPages {}
