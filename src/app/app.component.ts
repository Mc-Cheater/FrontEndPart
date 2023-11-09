import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from 'Services/api-caller.service';
import { Category } from 'model/category';
import { Product } from 'model/product';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SpringIntegration';
  product!: Product;
  category!: Category;
  products!: Product[];

  titre!: string;
  prix!: number;
  catLabel!: number;

  constructor(private fetcher: ApiCallerService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.fetcher
      .getAllProducts()
      .pipe(take(1))
      .subscribe((result: Product[]) => {
        this.products = result;
      });
  }

  addProduct() {
    let cat = { id: this.catLabel } as Category;
    let p = { label: this.titre, price: this.prix, category: cat } as Product;
    this.fetcher.addProduct(p).subscribe((value: Product) => {
      this.handleAddProduct(value);
    });
  }

  handleAddProduct(p: Product) {
    this.products.push(p);
  }
}
