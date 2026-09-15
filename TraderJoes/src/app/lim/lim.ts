import { Component } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  selector: 'app-lim',
  imports: [MemberPreview],
  templateUrl: './lim.html',
  styleUrl: './lim.scss',
})
export class Lim {
  readonly name = 'Jereign Lim';
  readonly imagePath = 'assets/lim.png';
  readonly role = '4th Year IT Student • Web Development';
  readonly skills = ['Angular', 'React', 'Node.js'];
  readonly bio =
    "Hi, I'm Jereign — a 4th year IT student specializing in web " +
    "development. I enjoy working across the stack, from building " +
    "clean UI components to wiring up backend logic, and I'm always " +
    "looking to pick up new frameworks.";
}