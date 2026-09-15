import { Component, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-member-preview',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './member-preview.html',
  styleUrl: './member-preview.scss',
})
export class MemberPreview {
  name = input.required<string>();
  imagePath = input.required<string>();
  role = input('');
  skills = input<string[]>([]);
  bio = input('');

  isBioVisible = signal(false);

  protected readonly hideIcon = 'expand_less';
  protected readonly showIcon = 'expand_more';

  toggleBio() {
    this.isBioVisible.update((isVisible) => !isVisible);
  }
}