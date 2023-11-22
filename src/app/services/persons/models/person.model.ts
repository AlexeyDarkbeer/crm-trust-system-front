export interface PersonModel {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  gender: string;
  birthDate: Date;
  passport: PassportModel;
  job: JobModel;
  credits: CreditModel[];
}

export interface PassportModel {
  series: string;
  number: string;
  issuedBy: string;
  issueDate: Date;
  departmentNumber: string;
}

export interface JobModel {
  companyName: string;
  position: string;
  startDate: Date;
}

export interface CreditModel {
  creditType: string;
  amount: number;
  startDate: Date;
  endDate: Date;
}

