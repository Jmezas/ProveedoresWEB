import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  toggle(): void {
    this.toggleSidebar.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
