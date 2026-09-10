import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  selector: 'app-ng',
  styleUrl: './ng.scss',
  templateUrl: './ng.html',
})
export class Ng {
  readonly myName = signal('Paula Mitchel Ng');
  readonly imagePath = signal('assets/ngg.jpg');
  readonly isBioVisible = signal(false);

  toggleBio(): void {
    this.isBioVisible.update((isVisible) => !isVisible);
  }
}