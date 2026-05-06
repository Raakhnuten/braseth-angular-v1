# Braseth Angular E-commerce Frontend

Standalone Angular frontend scaffold for a responsive e-commerce platform.

## Run
1. Install dependencies: `npm install`
2. Start dev server: `ng serve`

## Architecture
- `src/app/core`: models, services, guards, interceptors, layouts
- `src/app/shared`: reusable components/pipes/directives
- `src/app/features`: domain pages (home, catalog, cart, checkout, auth, user, admin)
- `src/app/data/mock`: realistic mock payloads emulating API responses

## API Integration Later (Spring Boot)
- Base URL configured at `src/environments/environment.ts`
- Each core service includes TODO markers where `HttpClient` calls should replace mock signals
- Keep interfaces in `core/models` aligned with backend DTO contracts

## Included Functional Scope
- Product catalog, category hierarchy, customizable product controls
- Cart and checkout flows, shipping and payment options
- Orders, payment proof UI placeholders, shipment tracking placeholders
- User dashboard and admin management screens (frontend-only)
