# 🛒 E-commerce MVP Specification (Single Product Funnel)

## 🎯 Project Goal
Build a **simple, high-converting single-product e-commerce website** focused on fast sales and easy deployment.

This is NOT a marketplace or multi-vendor system.
This is a **lean MVP for personal use**.

---

## 🧠 Core Concept
- Sell **ONE main product** (can expand later)
- Funnel-style website
- Focus on **conversion, not complexity**

---

## ⚙️ Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Backend: Next.js API Routes
- Database: MongoDB
- Deployment: Vercel (frontend) + MongoDB Atlas

---

## 📦 Features (MVP Scope Only)

### 1. Landing Page
- Hero section (headline + product image)
- Problem → Solution section
- Product benefits
- Testimonials / social proof
- Pricing section
- CTA buttons (Buy Now / WhatsApp)

### 2. Product Section
- Product name
- Description
- Price
- Images

### 3. Cart (Optional - Simple)
- Add to cart button
- Quantity selector

### 4. Checkout Page
Form fields:
- Full Name
- Phone Number
- Address

Function:
- Submit order
- Save to database
- Optional: redirect to WhatsApp

### 5. Order System
- Save order into MongoDB

Order schema:
- name
- phone
- address
- product
- quantity
- timestamp

---

## 🔄 User Flow
1. User clicks ad
2. Lands on landing page
3. Clicks "Buy Now"
4. Goes to checkout page
5. Fills details
6. Submits order
7. Order saved in database

Optional:
8. Redirect to WhatsApp with pre-filled message

---

## 📁 Suggested Folder Structure

```
/app
  /page.tsx (Landing Page)
  /checkout/page.tsx

/components
  Hero.tsx
  ProductSection.tsx
  Testimonial.tsx
  CTA.tsx

/lib
  mongodb.ts

/pages/api
  /orders.ts

/models
  Order.ts
```

---

## 🧩 API Design

### POST /api/orders
Create new order

Request body:
```
{
  name: string,
  phone: string,
  address: string,
  product: string,
  quantity: number
}
```

Response:
```
{
  success: true,
  message: "Order created"
}
```

---

## 🎨 UI/UX Guidelines
- Mobile-first design
- Clean, modern layout
- Big CTA buttons
- Fast loading
- Minimal distractions

---

## 💬 WhatsApp Integration (Optional)

After checkout:
Redirect user to:
```
https://wa.me/<number>?text=Order%20Details%3A%20...
```

Include:
- Name
- Product
- Quantity

---

## 🚀 Future Improvements (NOT for MVP)
- Payment gateway (ToyyibPay / Stripe)
- Admin dashboard
- Multiple products
- Inventory system
- Email notifications

---

## ❗ Important Notes for AI (DeepSeek)
- Keep code **simple and readable**
- Avoid overengineering
- Focus on **working MVP first**
- Use functional components
- Use best practices but do not overcomplicate

---

## 🧠 Development Strategy
1. Build UI with dummy data
2. Add state (cart / form)
3. Connect API
4. Save to database
5. Test full flow

---

## ✅ Definition of Done
- Landing page loads
- User can click Buy
- Checkout form works
- Order saved in database

---

## 🔥 Priority
Speed > Perfection

Get it live FAST, then improve.

