export interface PersonModel {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  gender: string;
  cluster: number;
  passport: PassportModel;
  actualJob: JobModel;
  loans: LoanModel[];
  contacts: ContactModel[];
}

export interface PassportModel {
  series: string;
  number: string;
  issuedBy: string;
  issueDate: Date;
  departmentNumber: string;
  birthDate: Date;
}

export interface JobModel {
  companyName: string;
  position: string;
  salaryAmount: number;
  startDate: Date;
}

export interface LoanModel {
  creditType: string;
  amount: number;
  startDate: Date;
  endDate: Date;
}

export interface ContactModel{
  phoneNumber: string;
}
