import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { InstitutionComponent } from './institution/institution.component';

@Component({
  selector: 'upwork-main',
  standalone: true, 
  imports: [CommonModule,  InfoComponent, InstitutionComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {


}
