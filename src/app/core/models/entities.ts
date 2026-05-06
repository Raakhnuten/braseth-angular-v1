export type Role = 'USER' | 'ADMIN' | 'MANAGER';

export interface User { id:number; email:string; firstName:string; lastName:string; role:Role; phone?:string; }
export interface Address { id:number; userId:number; label:string; line1:string; city:string; province:string; isDefault:boolean; }
export interface Category { id:number; name:string; slug:string; parentId?:number|null; imageUrl?:string; }
export interface ProductImage { id:number; productId:number; url:string; alt:string; isPrimary:boolean; }
export interface Color { id:number; name:string; hex:string; }
export interface Size { id:number; name:string; sortOrder:number; }
export interface ProductVariant { id:number; productId:number; sku:string; colorId?:number; sizeId?:number; price:number; stock:number; }
export interface ProductFeatureControl { customizationEnabled:boolean; colorSelectionEnabled:boolean; decorationMethodEnabled:boolean; artworkUploadEnabled:boolean; templateButtonEnabled:boolean; quantityInputEnabled:boolean; sizeBreakdownEnabled:boolean; instantQuoteEnabled:boolean; addToCartEnabled:boolean; priceBreakEnabled:boolean; productionTimeEnabled:boolean; }
export interface DecorationMethod { id:number; name:string; }
export interface PrintPosition { id:number; name:string; }
export interface PriceBreak { minQty:number; unitPrice:number; }
export interface ProductionTime { label:string; days:number; }
export interface Product { id:number; name:string; slug:string; description:string; categoryId:number; featured:boolean; active:boolean; basePrice:number; customizable:boolean; images:ProductImage[]; variants:ProductVariant[]; availableColorIds:number[]; availableSizeIds:number[]; featureControl:ProductFeatureControl; decorationMethods:DecorationMethod[]; printPositions:PrintPosition[]; priceBreaks:PriceBreak[]; productionTimes:ProductionTime[]; }
export interface Coupon { id:number; code:string; type:'PERCENT'|'FIXED'; value:number; active:boolean; }
export interface CartItem { id:number; productId:number; variantId?:number; quantity:number; unitPrice:number; customizations?:Record<string,unknown>; }
export interface Cart { id:number; userId?:number; items:CartItem[]; couponCode?:string; }
export type PaymentMethodType='CONTACT'|'BANK_TRANSFER'|'ABA_QR'|'COD'|'CARD';
export interface PaymentMethod { id:number; type:PaymentMethodType; name:string; enabled:boolean; instructions:string; requiresProof:boolean; qrImageUrl?:string; accountName?:string; accountNumber?:string; }
export interface Payment { id:number; orderId:number; methodId:number; status:'PENDING'|'VERIFIED'|'REJECTED'; proofImageUrl?:string; }
export interface ShippingMethod { id:number; name:string; fee:number; regionType:'PHNOM_PENH'|'PROVINCE'|'PICKUP'; enabled:boolean; }
export interface OrderItem { id:number; productId:number; variantId?:number; quantity:number; unitPrice:number; }
export interface Order { id:number; userId:number; items:OrderItem[]; status:'NEW'|'PROCESSING'|'SHIPPED'|'DELIVERED'|'CANCELLED'; paymentStatus:'PENDING'|'PAID'|'FAILED'; shippingMethodId:number; total:number; }
export interface Shipment { id:number; orderId:number; trackingCode:string; status:'PENDING'|'IN_TRANSIT'|'DELIVERED'; }
export interface Review { id:number; userId:number; productId:number; rating:number; comment:string; approved:boolean; }
export interface BannerSlider { id:number; title:string; imageUrl:string; active:boolean; }
export interface PopupBanner { id:number; title:string; imageUrl:string; active:boolean; }
