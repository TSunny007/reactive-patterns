import { Component, OnInit } from '@angular/core';
import {globalEventBus, Observer} from './event-bus';
import { Lesson } from '../shared/model/lesson';
import { testLessons } from '../shared/model/test-lessons';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.css']
})
export class EventBusExperimentsComponent implements OnInit{

  lessons: Lesson[] =[];
  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcasted all lessons');
    globalEventBus.notifyObservers(testLessons);
  }

}
