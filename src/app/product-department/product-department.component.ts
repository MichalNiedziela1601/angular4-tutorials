import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.scss']
})
export class ProductDepartmentComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
