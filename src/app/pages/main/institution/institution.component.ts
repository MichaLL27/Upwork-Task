import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'upwork-institution',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstitutionComponent {
  
 filter$ = of([
    {
      name: 'הוגש',
    },
    {
      name: 'בתהליך',
    },
    {
      name: 'לא נכנס',
    },
  ]).pipe(delay(1000)); 


}
