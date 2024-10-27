import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Goal {
  title: string;
  hash: string;
  progress: string;
}

@Component({
  selector: 'app-quarterly-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quarterly-goals.component.html',
  styleUrls: ['./quarterly-goals.component.scss']
  

})
export class QuarterlyGoalsComponent {

  goals: Goal[] = [
    { title: 'Do well in algorithms class', hash: '#class-algorithms', progress: '4/5' },
    { title: 'Apply to all internships', hash: '#apply-internships', progress: '2/3' },
    { title: 'Technical interview prep', hash: '#interview-technical', progress: '1/2' }
  ];

  addGoal(): void {
    // Prompt the user for goal details
    const goalDescription = prompt("Enter a new quarter goal");
    const hashTag = prompt("Enter a goal hashtag");
    const progress = prompt("Enter goal completion status");

    // Ensure that all fields are filled out
    if (!goalDescription || !hashTag || !progress) {
      alert("All fields are required!");
      return;
    }

    // Create a new goal object
    const newGoal: Goal = {
      title: goalDescription,
      hash: `#${hashTag}`,
      progress: progress
    };

    // Add the new goal to the goals array
    this.goals.push(newGoal);
  }
}
