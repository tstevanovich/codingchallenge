import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from '@app/core/models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentValueService {
  private apiUrlPath = '/assets/static/api-response.json';
  constructor(private http: HttpClient) {}

  getJSON() {
    return this.http.get<Equipment>(this.apiUrlPath);
  }
}
