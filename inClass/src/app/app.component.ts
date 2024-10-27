import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inClass';
}
