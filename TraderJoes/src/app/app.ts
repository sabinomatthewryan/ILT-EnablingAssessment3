import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Lim } from './lim/lim';
import { Sabino } from './sabino/sabino';

@Component({
  imports: [RouterOutlet, Lim, Sabino, MatIconModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
