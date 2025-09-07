import { Calendar1, LucideAngularModule } from 'lucide-angular';
import { Component } from '@angular/core';

import { DefaultLayout } from '../../../shared/layouts/default/default-layout.component';
import { List } from '../component/list/list.component';
import { FormTaskComponent } from '../component/form-task/form-task.component';
import { Todo } from '../../../shared/types';

@Component({
  standalone: true,
  selector: 'app-page-todo',
  templateUrl: './today.pages.html',
  imports: [List, DefaultLayout, LucideAngularModule, FormTaskComponent],
})
export class TodayPages {
  readonly Icon = Calendar1;

  todos: Todo[] = [
    { id: 1, name: 'Learning Angular', checked: false },
    { id: 2, name: 'Sleep', checked: true },
    { id: 3, name: 'Drink coffee', checked: true },
  ];

  handleSumit(name: string) {
    this.todos = [...this.todos, { id: this.todos.length + 1, name: name, checked: false }];
  }
}
