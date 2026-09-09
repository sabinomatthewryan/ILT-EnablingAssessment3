import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-delacruz',
  styleUrl: './delacruz.scss',
  templateUrl: './delacruz.html',
})
export class Delacruz {

readonly myName = signal('Nicko Dela Cruz');

}
