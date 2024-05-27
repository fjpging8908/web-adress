import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Requirements } from '../Models/Requerimiento';
import { AdresApiService } from '../services/adres-api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'requerimientos-detail',
  templateUrl: './requerimientos-detail.component.html',
  styleUrl: './requerimientos-detail.component.css',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatTableModule
  ],
  providers: [
    provideNativeDateAdapter(),
    {
      provide: MatDialogContent,
      useValue: { overlayPanelClass: 'cdk-overlay-pane.mat-mdc-dialog-panel' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
})
export class RequerimientosDetailComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<Requirements>;
  public RequirementGroup!: FormGroup;
  public isNewItem: boolean = true;
  displayedColumns: string[] = [
    'budget',
    'type',
    'businessUnity',
    'quantity',
    'unitaryValue',
    'totalAmount',
    'provider',
    'document',
    'version'
  ];
  public dataSource: Requirements[] = [];

  constructor(
    public dialogRef: MatDialogRef<RequerimientosDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirements,
    private readonly formBuilder: FormBuilder, private adresService: AdresApiService,
  ) {
    this.isNewItem = data.id == 0 ? true : false;
    this.RequirementGroup = this.formBuilder.group({
      budget: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)])],
      acquisitionDate: ['', Validators.required],
      businessUnity: ['', Validators.required],
      type: ['', Validators.required],
      provider: ['', Validators.required],
      document: ['', Validators.required],
      quantity: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)])],
      unitaryValue: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1)])],      
      totalAmount: [''],
      number: [''],
      version: [''],
    });   

  }
  ngOnInit(): void {
    if (!this.isNewItem) {
      this.RequirementGroup.patchValue(this.data);      
      this.dataSource=this.data.history;
      //this.table.renderRows();
    }
  }

  OnAgregar(): void {
    var item = this.RequirementGroup.getRawValue();
    if (this.isNewItem) {
      this.adresService.postAlRequirements(item).subscribe(data => {
        if (data) {
          this.dialogRef.close();
        }
      });
    }
    else {
      item.id = this.data.id;
      this.adresService.putAlRequirements(item).subscribe(data => {
        if (data) {
          this.dialogRef.close();
        }
      });
    }
  }

  OnInputCalculateTotal() {
    if (this.RequirementGroup.value.quantity && this.RequirementGroup.value.unitaryValue) {
      this.RequirementGroup.patchValue({ totalAmount: this.RequirementGroup.value.quantity * this.RequirementGroup.value.unitaryValue });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
