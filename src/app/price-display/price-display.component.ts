import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {
  @Input() price: Number;
  constructor() { }

  ngOnInit() {
  }

}
