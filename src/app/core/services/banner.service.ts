import { Injectable } from '@angular/core';
import { BANNERS, POPUPS } from '../../data/mock/mock-data';
@Injectable({providedIn:'root'}) export class BannerService { banners(){return BANNERS;} popups(){return POPUPS;} // TODO API
}
