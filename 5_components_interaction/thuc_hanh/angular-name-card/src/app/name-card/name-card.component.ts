import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  // @ts-ignore
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;

  constructor() { }

  ngOnInit(): void {
  }

}
