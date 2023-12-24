import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ScoringOutputModel} from "./models/scoringOutput.model";
import {ScoringModel} from "./models/scoring.model";

@Injectable({
  providedIn: 'root',
})
export class ScoringService {
  private baseUrl: string = 'http://localhost:5067/api/';

  constructor(private httpClient: HttpClient) {}

  getScoringResults(): Observable<ScoringOutputModel[]> {
    const url = `${this.baseUrl}Scoring/GetPersonScores`; // Предположим, что такой URL для получения результатов скоринга
    return this.httpClient.get<ScoringOutputModel[]>(url);
  }

  getScorings(): Observable<ScoringModel[]> {
    const url = `${this.baseUrl}Scoring/GetScorings`; // Предположим, что такой URL для получения результатов скоринга
    return this.httpClient.get<ScoringModel[]>(url);
  }

  addScoringResult(scoringResult: ScoringOutputModel): Observable<ScoringOutputModel> {
    const url = `${this.baseUrl}Scoring/Add`; // Предположим, что такой URL для добавления результата скоринга
    return this.httpClient.post<ScoringOutputModel>(url, scoringResult);
  }
}
