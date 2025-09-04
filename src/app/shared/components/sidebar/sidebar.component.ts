import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  CheckCheck,
  Calendar1,
  SquareCheck,
  Inbox,
  Folder,
  SquareCheckBig,
} from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
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
