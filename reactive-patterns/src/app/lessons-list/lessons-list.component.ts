import { Component, OnInit } from '@angular/core';
import { Observer, globalEventBus } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[] = [];
  
  constructor() { 
    console.log('Lesson list is registered as an observer');
    globalEventBus.registerObserver(this);
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }

}
