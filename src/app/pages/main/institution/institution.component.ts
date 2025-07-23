import { CommonModule } from '@angular/common';
import { HttpClient,  } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of } from 'rxjs';
import { schoolsData } from '../../../shared/data/schools.data';
import { ISchool } from '../../../shared/data/interface';
import * as XLSX from 'xlsx';


@Component({
  selector: 'upwork-institution',
  standalone: true, 
  imports: [CommonModule, ],
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstitutionComponent {

  private originalSchools = schoolsData;
  private schoolsDataSubject = new BehaviorSubject<ISchool[]>(this.originalSchools);
  schoolsData$ = this.schoolsDataSubject.asObservable().pipe(delay(1000));

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



  filterItem(item: string): void {
    const filtered = this.originalSchools.filter(school => school.formStatus === item);
    this.schoolsDataSubject.next(filtered);
  }

getStatusStyle(status: string): { [klass: string]: any } {
  switch (status) {
    case 'לא נכנס':
      return { color: '#D75E9F', 'font-weight': 'bold' };
    case 'הוגש':
      return { color: '#1EB8D0', 'font-weight': 'bold' };
    case 'בתהליך':
      return { color: '#FAB514', 'font-weight': 'bold' };
    default:
      return {};
   }
 }

 resetFilter(): void {
  this.schoolsDataSubject.next(this.originalSchools);
}

downloadTableAsExcel(): void {
  const table = document.querySelector('.institution__table') as HTMLTableElement;
  if (!table) return;

  const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
  const workbook: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Schools');

  XLSX.writeFile(workbook, 'schools-data.xlsx');
}

}
