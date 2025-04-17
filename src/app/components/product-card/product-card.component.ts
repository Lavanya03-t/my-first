import { Component, Input } from '@angular/core';
import { Product } from '../../services/product-list.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product! : Product;

}
