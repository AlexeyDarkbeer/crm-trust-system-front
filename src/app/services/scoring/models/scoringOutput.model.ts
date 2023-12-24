export interface ScoringOutputModel {
  personId: string;
  fullName: string;
  loanAmount: number;
  loanMonths: number;
  personAge: number;
  currentJobMonths: number;
  currentJobSalary: number;
  score: number;
}
