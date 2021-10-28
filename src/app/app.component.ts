import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  public mockData: Product[] = [];

  ngOnInit(): void {
    this.createMockData();
  }

  createMockData(): void {
    let i = 1;
    while (i < 11) {
      if (i % 2 == 0){
        let newProduct =  new Product(
          'Test Product ' + i,
          19.99,
          'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487?k=20&m=163208487&s=612x612&w=0&h=TZ5XnBejf_EAnGjMPfsRf3zu-8G9DYHIFyTiyrnwFms='
        );
        this.mockData.push(newProduct); 
        i++;
      } else {        
      let newProduct =  new Product(
        'Test Product ' + i,
        39.99,
        'https://cdn.luxe.digital/media/2020/10/01123242/best-winter-coats-men-budget-amazon-essentials-puffer-review-luxe-digital.jpg'
      );
      this.mockData.push(newProduct); 
      i++;
      }
    }
  }

}

