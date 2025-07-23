import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'upwork-info',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
 information$ = of([
    {
      name: 'סה״כ הגשות שאלון',
      number: 259,
    },
    {
      name: 'סה״כ כניסות לשאלון',
      number: 259,
    },
    {
      name: 'סה״כ בתי ספר',
      number: 504,
    },
  ]).pipe(delay(1000)); // thats a imitaion of a real API call
}
