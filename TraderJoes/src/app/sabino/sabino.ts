import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
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
