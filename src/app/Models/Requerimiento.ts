export class Requirements {
  id: number | undefined;
  number: string | undefined;
  budget: number | undefined;
  businessUnity: string | undefined;
  type: string | undefined;
  quantity: number | undefined;
  unitaryValue: number | undefined;
  totalAmount: number | undefined;
  acquisitionDate: Date | undefined;
  provider: string | undefined;
  document: string | undefined;
  enable: boolean | undefined;
  version: number | undefined;
  history: Requirements[] =[];
}
