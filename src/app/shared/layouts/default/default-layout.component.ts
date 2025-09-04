import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'default-layout',
  templateUrl: './default-layout.component.html',
  standalone: true,
  imports: [Sidebar],
})
export class DefaultLayout {}
