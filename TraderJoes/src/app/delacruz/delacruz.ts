import { Component } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-delacruz',
  styleUrl: './delacruz.scss',
  templateUrl: './delacruz.html',
})
export class Delacruz {
  readonly name = 'Nicko Albert B. Dela Cruz';
  readonly imagePath = 'assets/delacruz.png';
  readonly role = '4th Year IT Student • Web Development';
  readonly skills = ['Angular', 'JavaScript', 'Node.js'];
  readonly bio =
  "Hi, I'm Nicko! I focus on crafting modern web applications and " +
  "database systems. Passionate about writing clean code, tackling " +
  "technical challenges, and building smooth, functional interfaces.";
}
