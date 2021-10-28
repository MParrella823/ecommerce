import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: Product;
  @Input() public showSaleBtn: boolean = true;
  public buttonText: string = 'Place on sale';

  constructor() { 
    this.product = new Product('', 0, '');
  }

  ngOnInit(): void {
  }

  toggleOnSale(): void {
    this.product.onsale = !this.product.onsale;
    this.product.placeOnSale();
    if (this.product.onsale) {
      this.buttonText = 'Remove from sale';
    } else {
      this.buttonText = 'Place on sale';
    }
  }

}
