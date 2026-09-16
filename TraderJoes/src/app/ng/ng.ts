import { Component } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-ng',
  styleUrl: './ng.scss',
  templateUrl: './ng.html',
})
export class Ng {
  readonly name = 'Paula Ng';
  readonly imagePath = 'assets/ngg.jpg';
  readonly role = '4th Year IT Student • Web Development';
  readonly skills = ['Angular', 'React', 'Node.js'];
  readonly bio =
    "  Hi, I'm Paula, a 4th year IT student focused on web development" + 
    " I enjoy turning clean designs into responsive, reusable components and" + 
    " figuring out how each part of an application connects to the next.";
}