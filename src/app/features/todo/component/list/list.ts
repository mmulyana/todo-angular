import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
  standalone: true,
})
export class List {
  data = [
    { id: 1, name: 'Learning angular', checked: false },
    { id: 2, name: 'Sleep', checked: true },
    { id: 3, name: 'Drink coffee', checked: true },
  ];
  todoName = '';

  toggle(todo: any) {
    todo.checked = !todo.checked;
  }

  onSubmit = () => {
    this.data.push({ id: this.data.length, name: this.todoName, checked: false });
    this.todoName = '';
  };
}
