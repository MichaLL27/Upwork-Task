import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'upwork-main',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {

}
