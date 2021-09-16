import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Room } from '@core/model/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms/';

  constructor(private http: HttpClient) { }

  create(room: Room): Observable<Room> {
    return this.http.post<Room>(this.baseUrl, room);
  }

  get(id: number): Observable<Room> {
    return this.http.get<Room>(this.baseUrl + id);
  }

  getList(): Observable<Room[]> {
    return this.http.get<Room[]>(this.baseUrl);
  }

  update(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(this.baseUrl + id, room);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + id);
  }
}
