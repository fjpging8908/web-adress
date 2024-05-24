import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Requirements } from '../Models/Requerimiento';
import { AdresApiService } from '../services/adres-api.service';

const ELEMENT_DATA: Requirements[] = [
  {
    Id: 1,
    AcquisitionDate: new Date(),
    BusinessUnity: 'Business Unity',
    Enable: true,
    Document: 'Document',
    Provider: 'Provider',
    History: [],
    Number: '',
    Quantity: 1,
    TotalAmount: 0,
    Type: '',
    UnitaryValue: 0,
    version: 0,
  },
  {
    Id: 2,
    AcquisitionDate: new Date(),
    BusinessUnity: 'Business Unity 2',
    Enable: true,
    Document: 'Document',
    Provider: 'Provider',
    History: [],
    Number: '',
    Quantity: 2,
    TotalAmount: 1000,
    Type: '',
    UnitaryValue: 500,
    version: 1,
  },
  {
    Id: 2,
    AcquisitionDate: new Date(),
    BusinessUnity: 'Business Unity 2',
    Enable: true,
    Document: 'Document',
    Provider: 'Provider',
    History: [],
    Number: '',
    Quantity: 2,
    TotalAmount: 1000,
    Type: '',
    UnitaryValue: 500,
    version: 1,
  },
];

@Component({
  selector: 'app-requerimientos-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './requerimientos-list.component.html',
  styleUrl: './requerimientos-list.component.css',
})
export class RequerimientosListComponent implements OnInit {
  constructor(private adresService: AdresApiService) {}

  ngOnInit(): void {
    this.adresService.getRequirementsById(1);
  }

  displayedColumns: string[] = [
    'Id',
    'Number',
    'AcquisitionDate',
    'Type',
    'BusinessUnity',
    'Quantity',
    'UnitaryValue',
    'TotalAmount',
  ];
  dataSource = ELEMENT_DATA;
}
