import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { Requirements } from '../Models/Requerimiento';
import { AdresApiService } from '../services/adres-api.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { RequerimientosDetailComponent } from '../requerimientos-detail/requerimientos-detail.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-requerimientos-list',
  standalone: true,
  imports: [MatTableModule, FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule, MatDividerModule, MatIconModule,    CommonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './requerimientos-list.component.html',
  styleUrl: './requerimientos-list.component.css',
})
export class RequerimientosListComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<Requirements>;
  public filterOptions!: FormGroup;
  public filterData!: Requirements;
  public requirementDetail: Requirements= new Requirements();  

  constructor(private readonly formBuilder: FormBuilder, private adresService: AdresApiService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.filterOptions = this.formBuilder.group({

      acquisitionDate: [''],
      businessUnity: [''],
      type: [''],
      provider: [''],
      number: ['']
    });
    this.filterOptions.patchValue(new Requirements());
    this.OnBuscar();

  }
 
  OnBuscar(): void {
    if (!this.filterOptions.invalid) {
      var filter = this.filterOptions.getRawValue();

      this.adresService.getAlRequirements(filter).subscribe(data => {
        if (data) {
          this.dataSource = data;
          this.table.renderRows();
        }
      });
    }
  }

  OnAgregar(): void {
    this.requirementDetail= new Requirements();
    this.requirementDetail.id=0;
    this.openDialog();
}

  OnDetail(Id: any): void {
      this.adresService.getRequirementsById(Id).subscribe(data => {
        if (data) {
          this.requirementDetail=data;
          this.openDialog();
        }
      });    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequerimientosDetailComponent, {
      data: this.requirementDetail,      
      width: '1000px',
      maxWidth: '100%',
      panelClass: 'requerimientos-detail',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
      this.OnBuscar();
    });
  }


  displayedColumns: string[] = [    
    'number',
    'acquisitionDate',
    'budget',
    'type',
    'businessUnity',
    'quantity',
    'unitaryValue',
    'totalAmount',
    'provider',
    'document',
    'actions'
  ];
  public dataSource: Requirements[] = [];
}
