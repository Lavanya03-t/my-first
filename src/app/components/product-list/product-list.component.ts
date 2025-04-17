import { Component, OnInit } from '@angular/core';
import {ProductListService, Product} from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
constructor(private ps: ProductListService){}

ngOnInit(): void {
  this.ps.getProducts().subscribe(data => {
    this.products = data;
  });
}
}
