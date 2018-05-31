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
    this.hoverSection.addEventListener('mousemove', this.mouseMove);
    this.hoverSection.addEventListener('click', this.onClick);
  }

  unsuscribe() {
    console.log("Unsuscribe called");
    this.hoverSection.removeEventListener('mousemove', this.mouseMove);
  }

  mouseMove(mouseEvent: MouseEvent) {
    console.log("move", mouseEvent);
  }

  onClick(mouseEvent: MouseEvent) {
    console.log("click", mouseEvent);
  }
}
