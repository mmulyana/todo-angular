import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  data = [
    { id: 1, name: 'Learning angular', checked: false },
    { id: 2, name: 'Sleep', checked: true },
    { id: 3, name: 'Drink coffee', checked: true },
  ];

  toggle(todo: any) {
    todo.checked = !todo.checked;
  }
}
