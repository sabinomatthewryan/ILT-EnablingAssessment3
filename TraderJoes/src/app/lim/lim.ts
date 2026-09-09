import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lim',
  styleUrl: './lim.scss',
  templateUrl: './lim.html',
})
export class Lim {
    readonly myName = signal('Jereign Lim');
      readonly imagePath = signal('assets/lim.png');

}