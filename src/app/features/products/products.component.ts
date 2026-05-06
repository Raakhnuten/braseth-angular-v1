import { Component } from '@angular/core';
@Component({standalone:true,selector:'app-products',template:`<section class="container"><h1>Products</h1><p>Filters: category, price, color, size, search, sort.</p></section>`,styles:[`.container{padding:1rem;max-width:1200px;margin:0 auto;}`]})
export class ProductsComponent{}
