import { Injectable, signal } from '@angular/core';
@Injectable({providedIn:'root'})
export class CheckoutService {
  // TODO: replace signals/mock data with HttpClient calls to Spring Boot REST API.
  state = signal<any>(null);
}
