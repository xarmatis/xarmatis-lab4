import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { QuarterlyGoalsComponent } from './quarterly-goals/quarterly-goals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetingComponent, DateTimeComponent, QuarterlyGoalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inClass';
}
