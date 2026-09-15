import { Component } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-sabino',
  styleUrl: './sabino.scss',
  templateUrl: './sabino.html',
})
export class Sabino {
  readonly name = 'Matthew Ryan Sabino';
  readonly imagePath = 'assets/sabino.jpeg';
  readonly role = '4th Year IT Student • Web Development';
  readonly skills = ['Angular', 'TypeScript', 'Node.js'];
  readonly bio =
    'Hi, Im Matthew, an aspiring software engineer passionate about ' +
    'modern web technologies. I love crafting responsive interfaces, solving ' +
    'real-world development challenges, and building seamless user ' +
    'experiences with modern frameworks like Angular.';
}
