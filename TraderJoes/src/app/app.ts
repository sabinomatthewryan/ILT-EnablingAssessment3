import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Lim } from './lim/lim';
import { Sabino } from './sabino/sabino';
import { Delacruz } from './delacruz/delacruz';
import { Ng } from './ng/ng';

@Component({
  imports: [RouterOutlet, Lim, Sabino, Delacruz, Ng, MatIconModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
