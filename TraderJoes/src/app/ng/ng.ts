import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ng',
  styleUrl: './ng.scss',
  templateUrl: './ng.html',
})
export class Ng {
  readonly myName = signal('Paula Mitchel Ng');
  readonly imagePath = signal('assets/ngg.jpg');
  readonly showBio = signal(false);

  toggleBio() {
    this.showBio.update(v => !v);
  }
}