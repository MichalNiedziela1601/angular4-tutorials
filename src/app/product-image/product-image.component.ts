import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = "media-left";
  constructor() { }

  ngOnInit() {
  }

}
