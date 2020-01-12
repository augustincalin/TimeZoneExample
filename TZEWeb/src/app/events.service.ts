import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './event.model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventsService {
    url = 'http://localhost:5000/api/events';

    constructor(private httpClient: HttpClient) { }

    getEvents() {
        return this.httpClient.get<Event[]>(this.url).pipe(
            map(data => {
                data.map(d => {
                    d.startTime = new Date(d.startTime);
                    d.endTime = new Date(d.endTime);
                });
                return data;
            })
        );
    }

    addEvent(event: Event): Observable<Event> {
        return this.httpClient.post<Event>(this.url, event);
    }
}
