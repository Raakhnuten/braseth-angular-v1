import { Injectable, computed, signal } from '@angular/core';
import { PRODUCTS } from '../../data/mock/mock-data';
@Injectable({providedIn:'root'})
export class ProductService {
  private products = signal(PRODUCTS);
  products$ = computed(()=>this.products());
  getBySlug(slug:string){ return this.products().find(p=>p.slug===slug); }
  // TODO: integrate HttpClient GET /api/products and /api/products/{slug}
}
