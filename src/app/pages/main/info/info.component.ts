import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'upwork-info',
  standalone: true, 
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {

}
