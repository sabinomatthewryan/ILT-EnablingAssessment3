import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sabino',
  styleUrl: './sabino.scss',
  templateUrl: './sabino.html',
})
export class Sabino {
  readonly myName = signal('Matthew Sabino');
  readonly imagePath = signal('assets/sabino.jpeg');
  readonly showBio = signal(false);

  toggleBio() {
    this.showBio.update(v => !v);
  }
}
