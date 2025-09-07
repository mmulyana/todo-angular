import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  SquareCheckBig,
  CheckCheck,
  Calendar1,
  Inbox,
  Folder,
} from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
})
export class Sidebar {
  readonly Check2Icon = CheckCheck;
  readonly CalendarOneIcon = Calendar1;
  readonly SquareCheckIcon = SquareCheckBig;
  readonly InboxIcon = Inbox;
  readonly FolderIcon = Folder;

  activeClass = '!text-white bg-[#272B33]';
}
