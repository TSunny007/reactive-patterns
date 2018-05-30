import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-events',
  templateUrl: './browser-events.component.html',
  styleUrls: ['./browser-events.component.css']
})
export class BrowserEventsComponent implements OnInit {

  hoverSection: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', ev => {
      console.log(ev);
    })
  }
}
