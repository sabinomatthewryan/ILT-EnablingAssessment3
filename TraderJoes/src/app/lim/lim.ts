import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  selector: 'app-lim',
  styleUrl: './lim.scss',
  templateUrl: './lim.html',
})
export class Lim {
  readonly myName = signal('Jereign Lim');
  readonly imagePath = signal('assets/lim.png');
  readonly isBioVisible = signal(false);

  toggleBio(): void {
    this.isBioVisible.update((isVisible) => !isVisible);
  }
}