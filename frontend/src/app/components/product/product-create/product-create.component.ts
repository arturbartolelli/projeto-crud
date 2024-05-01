import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router,
     private productService: ProductService){}

  ngOnInit(): void {  
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.productService.showMessage('Operação Cancelada')
    this.router.navigate(['/products'])
  }
}
