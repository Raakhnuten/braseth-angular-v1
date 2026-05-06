import { Injectable } from '@angular/core';
import { CATEGORIES } from '../../data/mock/mock-data';
@Injectable({providedIn:'root'}) export class CategoryService { list(){ return CATEGORIES; } // TODO API
}
