import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApplicationRef } from '@angular/core';

@Component({
  selector: 'app-date-time',
  standalone: true,
  imports: [],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.scss'
})
export class DateTimeComponent implements OnDestroy{

  time: string = '';
  amPm: string = '';
  seconds: string = '';
  date: string = '';
  private intervalId: any;

  constructor(private appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
  
    this.appRef.isStable.subscribe(isStable => {
      if (isStable) {
        this.startUpdatingTime();
      }
    });
  }

  private startUpdatingTime(): void {
    this.updateDateTime(); 
    this.intervalId = setInterval(() => {
      this.updateDateTime();
      this.cdr.detectChanges(); 
    }, 1000); 
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }

  private updateDateTime(): void {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    this.seconds = String(now.getSeconds()).padStart(2, '0');

    this.amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    this.time = `${hours}:${minutes}`;

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    this.date = now.toLocaleDateString('en-US', options);
  }
}
