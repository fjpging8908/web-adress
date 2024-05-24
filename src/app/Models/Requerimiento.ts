export class Requirements {
  Id: number | undefined;
  Number: string | undefined;
  BusinessUnity: string | undefined;
  Type: string | undefined;
  Quantity: number | undefined;
  UnitaryValue: number | undefined;
  TotalAmount: number | undefined;
  AcquisitionDate: Date | undefined;
  Provider: string | undefined;
  Document: string | undefined;
  Enable: boolean | undefined;
  version: number | undefined;
  History: Requirements[] | undefined;
}
