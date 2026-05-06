import { Routes } from '@angular/router';
export const appRoutes: Routes = [
{path:'',loadComponent:()=>import('./features/home/home.component').then(m=>m.HomeComponent)},
{path:'products',loadComponent:()=>import('./features/products/products.component').then(m=>m.ProductsComponent)},
{path:'products/:slug',loadComponent:()=>import('./features/product-detail/product-detail.component').then(m=>m.ProductDetailComponent)},
{path:'cart',loadComponent:()=>import('./features/cart/cart.component').then(m=>m.CartComponent)},
{path:'checkout',loadComponent:()=>import('./features/checkout/checkout.component').then(m=>m.CheckoutComponent)},
{path:'auth/:mode',loadComponent:()=>import('./features/auth/auth.component').then(m=>m.AuthComponent)},
{path:'user',loadComponent:()=>import('./features/user/user.component').then(m=>m.UserComponent)},
{path:'orders',loadComponent:()=>import('./features/orders/orders.component').then(m=>m.OrdersComponent)},
{path:'admin',loadComponent:()=>import('./features/admin/admin.component').then(m=>m.AdminComponent)}
];
