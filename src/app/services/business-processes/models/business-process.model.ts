export interface BusinessProcess {
  id: string;
  name: string;
  description?: string;
  stage?: RecoveryStage;
}

export interface RecoveryStage {
  id: string;
  name: string;
  description?: string;
  startDate?: Date;
  updateDate?: Date; // Новое поле
  status?: RecoveryStageStatus;
}

export interface RecoveryStageStatus {
  id: string;
  name: string;
  description?: string;
}
