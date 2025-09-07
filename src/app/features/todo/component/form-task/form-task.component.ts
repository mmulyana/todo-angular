import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-task',
  standalone: true,
  templateUrl: './form-task.component.html',
  imports: [FormsModule],
})
export class FormTaskComponent {
  name = '';
  @Output() taskSubmit = new EventEmitter<string>();

  onSubmit() {
    this.taskSubmit.emit(this.name);
    this.name = '';
  }
}
