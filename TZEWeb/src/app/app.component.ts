import { Component, OnInit } from '@angular/core';
import { EventsService } from './events.service';
import { Event } from './event.model';
import { GridDataResult } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'TZEWeb';
    public gridData: any;
    public events: Event[] = [];
    public gridDataResult: GridDataResult = { data: this.events, total: this.events.length };
    public startDate: Date = new Date();
    public endDate: Date = new Date();
    public format: string = 'dd.MM.yyyy HH:mm';
    public eventName = 'default title';
    public event: Event = { id:undefined, startTime: new Date(), endTime: new Date(), name: 'default name' };


    constructor(private eventsService: EventsService) {
    }

    ngOnInit(): void {
        this.eventsService.getEvents().subscribe(data => this.gridDataResult.data = data);
    }
    addEvent() {
        this.eventsService.addEvent(this.event).subscribe(data=>console.log(data));
    }
}
