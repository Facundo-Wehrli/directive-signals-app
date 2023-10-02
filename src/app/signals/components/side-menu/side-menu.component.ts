import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
/* The code `public menuItems = signal(<MenuItem[]>[ ... ]);` is using the `signal` function to create
an observable array of `MenuItem` objects. */
  public menuItems = signal(<MenuItem[]>[
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   {title: 'Contador', route:'counter'},
  //   {title: 'Usuario', route:'user-info'},
  //   {title: 'Mutaciones', route:'properties'},
  // ]
}
