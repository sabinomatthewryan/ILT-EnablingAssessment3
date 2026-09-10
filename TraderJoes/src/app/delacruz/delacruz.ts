import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  selector: 'app-delacruz',
  styleUrl: './delacruz.scss',
  templateUrl: './delacruz.html',
})
export class Delacruz {
  readonly myName = signal('Nicko Delacruz');
  readonly imagePath = signal('assets/delacruz.png');
  readonly isBioVisible = signal(false);

  toggleBio(): void {
    this.isBioVisible.update((isVisible) => !isVisible);
  }
}
