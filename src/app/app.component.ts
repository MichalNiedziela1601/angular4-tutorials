import {Component} from '@angular/core';
import {Product} from './models/product';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    products: Product[];

    constructor() {
        this.products = [new Product(
            'MYSHOES', 'Black Running Shoes', 'assets/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new Product('NEATOJACKET', 'Blue Jacket', '/assets/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new Product('NICEHAT', 'A Nice Black Hat', '/assets/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
            ];
    }

    productWasSelect(product: Product){
        console.log('Product clicked: ',product);
    }
}
