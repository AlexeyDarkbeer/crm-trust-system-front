export interface ScoringModel {
  name: string;
  description: string;
  parameters: ParameterModel[];
}

export interface ParameterModel {
  name: string;
  description: string;
  intervals: IntervalModel[];
}

export interface IntervalModel {
  weight: number;
  minValue: number;
  maxValue: number;
}
