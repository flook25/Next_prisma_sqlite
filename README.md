# 🌐 Next.js Business Website Template

เทมเพลตเว็บไซต์ธุรกิจที่ทันสมัย สร้างด้วย Next.js 15, TypeScript และ Tailwind CSS พร้อมระบบ Navigation Menu แบบ Dropdown, ระบบ Stock Management และหน้าบริการครบครัน

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

## ✨ คุณสมบัติหลัก

### 🎯 หน้าเว็บไซต์หลัก
- **หน้าแรก** - Landing Page พร้อม Hero Section และ Call-to-Action
- **เกี่ยวกับเรา** - ข้อมูลบริษัทและทีมงาน
- **ติดต่อเรา** - ฟอร์มติดต่อและข้อมูลการติดต่อ
- **นโยบายความเป็นส่วนตัว** - Privacy Policy
- **เงื่อนไขการใช้งาน** - Terms of Service
- **นโยบายคุกกี้** - Cookie Policy

### 🛠️ ระบบบริการ (Services)
- **บริการหลัก** - หน้าแสดงบริการทั้งหมด
- **ออกแบบเว็บไซต์** - Web Development Services
  - Modern Technology Stack
  - Responsive Design
  - Performance Optimization
  - Security & SEO
- **ออกแบบกราฟฟิก** - Graphic Design Services
  - Logo Design & Brand Identity
  - Print & Digital Design
  - Illustration & Social Media
- **การตลาดดิจิทัล** - Digital Marketing Services
  - SEO & SEM
  - Social Media Marketing
  - Email Marketing & Analytics

### 🔐 ระบบ Authentication
- **หน้าเข้าสู่ระบบ** - รองรับ Social Login
- **หน้าสมัครสมาชิก** - ฟอร์มครบถ้วนพร้อม Validation
- **ระบบบทบาทผู้ใช้** - ผู้ใช้ทั่วไป และ ผู้ดูแลระบบ

### 📊 ระบบ Admin Dashboard
- **หน้าแดชบอร์ด** - ภาพรวมข้อมูลสำคัญ
- **จัดการสต็อก** - ระบบจัดการสินค้าคงคลังแบบครบครัน
- **รายงาน** - สถิติและรายงานต่างๆ
- **การตั้งค่า** - จัดการระบบ
- **โปรไฟล์** - จัดการข้อมูลส่วนตัว

### 🏪 ระบบ Stock Management (ใหม่!)
- **📈 Dashboard Overview** - สถิติภาพรวมสินค้าคงคลัง
  - จำนวนสินค้าทั้งหมด
  - สินค้าใกล้หมด (Low Stock Alert)
  - สินค้าหมดสต็อก
  - มูลค่าสต็อกรวม
- **🔍 ระบบค้นหาและกรอง**
  - ค้นหาแบบ Real-time พร้อม Debounce (800ms)
  - กรองตามหมวดหมู่สินค้า
  - กรองตามสถานะสต็อก
  - ปุ่มเคลียร์การค้นหา (Clear X)
- **📋 จัดการสินค้า**
  - แสดงรายการสินค้าแบบตาราง
  - Pagination แบบ Server-side
  - แสดงระดับสต็อกแบบ Progress Bar
  - Status Badge (มีสินค้า/ใกล้หมด/หมดสต็อก)
- **🔄 API Integration**
  - RESTful API Routes
  - CRUD Operations ครบครัน
  - Error Handling และ Loading States
  - TypeScript Types ครบถ้วน

### 🎨 UI/UX Features
- **Navigation Menu** - Dropdown Menu พร้อม Sub-menu
- **Dark/Light Mode** - สลับธีมได้ตามต้องการ
- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Font Optimization** - รองรับฟอนต์ไทย (Anuphan) และอังกฤษ (Inter)
- **Accessibility** - ปฏิบัติตามมาตรฐาน WCAG
- **Modern UI** - ดีไซน์สวยงามและใช้งานง่าย
- **Smooth Animations** - เอฟเฟกต์การเคลื่อนไหวที่ลื่นไหล
- **Loading States** - แสดงสถานะการโหลดที่สวยงาม

## 🛠️ เทคโนโลยีที่ใช้

### Frontend Framework
- **Next.js 15** - React Framework พร้อม App Router
- **TypeScript** - Type Safety และ Developer Experience
- **React Hook Form** - จัดการฟอร์มอย่างมีประสิทธิภาพ

### Database & ORM
- **SQLite** - ฐานข้อมูลที่เบาและรวดเร็ว
- **Prisma** - Modern Database Toolkit
- **Prisma Client** - Type-safe Database Client

### Styling & UI
- **Tailwind CSS** - Utility-first CSS Framework
- **Shadcn/ui** - Component Library ที่ทันสมัย
- **Lucide React** - Icon Library ที่สวยงาม
- **Google Fonts** - Anuphan (ไทย) และ Inter (อังกฤษ)

### Navigation & Components
- **Radix UI** - Navigation Menu Components
- **React Context** - จัดการ Theme State
- **SweetAlert2** - Alert และ Modal ที่สวยงาม

### State Management & Hooks
- **Custom Hooks** - useStock สำหรับจัดการ Stock Data
- **React useState/useEffect** - State Management
- **Debounce Search** - ป้องกัน API Bombardment

## 📁 โครงสร้างโปรเจ็กต์

```
next-scale-tailwind-template/
├── 📁 src/
│   ├── 📁 app/                          # App Router (Next.js 15)
│   │   ├── 📁 api/                      # API Routes
│   │   │   └── 📁 stock/                # Stock Management API
│   │   │       ├── 📁 [id]/            # Individual Stock Item API
│   │   │       ├── 📁 overview/        # Stock Overview API
│   │   │       └── route.ts            # Main Stock API
│   │   ├── 📁 (admin)/                  # Admin Route Group
│   │   │   └── 📁 admin/
│   │   │       ├── 📁 dashboard/        # หน้าแดชบอร์ด
│   │   │       ├── 📁 stock/           # จัดการสต็อก (ใหม่!)
│   │   │       │   ├── page.tsx        # Stock Management Page
│   │   │       │   └── stock.tsx       # Stock Component
│   │   │       ├── 📁 reports/         # รายงาน
│   │   │       ├── 📁 settings/        # การตั้งค่า
│   │   │       ├── 📁 profile/         # โปรไฟล์
│   │   │       └── layout.tsx          # Admin Layout
│   │   ├── 📁 (auth)/                  # Auth Route Group
│   │   │   ├── 📁 login/               # หน้าเข้าสู่ระบบ
│   │   │   ├── 📁 register/            # หน้าสมัครสมาชิก
│   │   │   └── layout.tsx              # Auth Layout
│   │   ├── 📁 (front)/                 # Frontend Route Group
│   │   │   ├── 📁 about/               # เกี่ยวกับเรา
│   │   │   ├── 📁 contact/             # ติดต่อเรา
│   │   │   ├── 📁 home/                # หน้าแรก
│   │   │   ├── 📁 service/             # บริการ
│   │   │   │   ├── 📁 webdev/          # ออกแบบเว็บไซต์
│   │   │   │   ├── 📁 graphic/         # ออกแบบกราฟฟิก
│   │   │   │   ├── 📁 marketing/       # การตลาดดิจิทัล
│   │   │   │   ├── page.tsx            # หน้าบริการหลัก
│   │   │   │   └── service.tsx         # Service Component
│   │   │   ├── 📁 privacy-policy/      # นโยบายความเป็นส่วนตัว
│   │   │   ├── 📁 terms-of-service/    # เงื่อนไขการใช้งาน
│   │   │   ├── 📁 cookie-policy/       # นโยบายคุกกี้
│   │   │   ├── layout.tsx              # Frontend Layout
│   │   │   └── page.tsx                # หน้าแรก
│   │   ├── globals.css                 # Global Styles
│   │   ├── layout.tsx                  # Root Layout
│   │   ├── favicon.ico                 # Favicon
│   │   └── not-found.tsx               # หน้า 404
│   ├── 📁 components/                   # React Components
│   │   ├── 📁 ui/                      # Shadcn/ui Components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── navigation-menu.tsx     # Navigation Menu
│   │   │   └── theme-toggle.tsx        # Theme Toggle
│   │   ├── 📁 front/                   # Frontend Components
│   │   │   ├── Navbar.tsx              # Navigation Bar พร้อม Dropdown
│   │   │   └── Footer.tsx              # Footer Component
│   │   ├── 📁 admin/                   # Admin Components
│   │   │   ├── Header.tsx              # Header Component
│   │   │   └── Sidebar.tsx             # Sidebar Component
│   ├── 📁 contexts/                    # React Contexts
│   │   └── ThemeContext.tsx            # Theme Management
│   ├── 📁 hooks/                       # Custom Hooks (ใหม่!)
│   │   └── useStock.ts                 # Stock Management Hook
│   ├── 📁 lib/                         # Utilities
│   │   ├── prisma.ts                   # Prisma Client (ใหม่!)
│   │   └── utils.ts                    # Helper Functions
│   └── 📁 types/                       # TypeScript Types
│       ├── auth.ts                     # Authentication Types
│       ├── stock.ts                    # Stock Management Types (ใหม่!)
│       └── index.ts                    # Common Types
├── 📁 prisma/                          # Prisma Configuration (ใหม่!)
│   ├── schema.prisma                   # Database Schema
│   ├── seed.js                         # Database Seeder
│   └── dev.db                          # SQLite Database File
├── 📁 public/                          # Static Assets
│   ├── 📁 images/
│   └── favicon.ico
├── 📄 .env                             # Environment Variables (ใหม่!)
├── 📄 package.json                     # Dependencies
├── 📄 tailwind.config.ts              # Tailwind Configuration
├── 📄 tsconfig.json                   # TypeScript Configuration
├── 📄 next.config.ts                  # Next.js Configuration
└── 📄 README.md                       # คู่มือนี้
```

## 🚀 การติดตั้งและใช้งาน

### ข้อกำหนดระบบ
- Node.js 18.0 หรือใหม่กว่า
- npm หรือ yarn
- Git

### 1. Clone Repository
```bash
git clone https://github.com/iamsamitdev/next-scale-tailwind-template.git
cd next-scale-tailwind-template
```

### 2. ติดตั้ง Dependencies
```bash
npm install
# หรือ
yarn install
```

### 3. ตั้งค่าฐานข้อมูล (ใหม่!)
```bash
# สร้างไฟล์ .env
echo 'DATABASE_URL="file:./dev.db"' > .env

# Generate Prisma Client
npx prisma generate

# สร้างฐานข้อมูลและ Seed ข้อมูล
npx prisma db push
npx prisma db seed
```

### 4. รันโปรเจ็กต์
```bash
npm run dev
# หรือ
yarn dev
```

### 5. เปิดเบราว์เซอร์
เข้าไปที่ [http://localhost:3000](http://localhost:3000)

## 📋 Scripts ที่มีให้ใช้งาน

```bash
# Development
npm run dev          # รันโปรเจ็กต์ในโหมด development
npm run build        # Build โปรเจ็กต์สำหรับ production
npm run start        # รันโปรเจ็กต์ที่ build แล้ว
npm run lint         # ตรวจสอบ code ด้วย ESLint

# Database (ใหม่!)
npx prisma generate  # Generate Prisma Client
npx prisma db push   # Push schema ไปยังฐานข้อมูล
npx prisma db seed   # Seed ข้อมูลตัวอย่าง
npx prisma studio    # เปิด Prisma Studio (Database GUI)
```

## 🎯 หน้าเว็บไซต์และเส้นทาง

### หน้าหลัก (Frontend)
- `/` - หน้าแรก
- `/about` - เกี่ยวกับเรา
- `/contact` - ติดต่อเรา
- `/service` - บริการหลัก
- `/service/webdev` - ออกแบบเว็บไซต์
- `/service/graphic` - ออกแบบกราฟฟิก
- `/service/marketing` - การตลาดดิจิทัล
- `/privacy-policy` - นโยบายความเป็นส่วนตัว
- `/terms-of-service` - เงื่อนไขการใช้งาน
- `/cookie-policy` - นโยบายคุกกี้

### หน้า Authentication
- `/login` - เข้าสู่ระบบ
- `/register` - สมัครสมาชิก

### หน้า Admin
- `/admin/dashboard` - แดชบอร์ด
- `/admin/stock` - จัดการสต็อก (ใหม่!)
- `/admin/reports` - รายงาน
- `/admin/settings` - การตั้งค่า
- `/admin/profile` - โปรไฟล์

### API Routes (ใหม่!)
- `GET /api/stock` - ดึงรายการสินค้า (พร้อม search, filter, pagination)
- `POST /api/stock` - เพิ่มสินค้าใหม่
- `GET /api/stock/overview` - ดึงสถิติภาพรวม
- `GET /api/stock/[id]` - ดึงข้อมูลสินค้าตาม SKU
- `PUT /api/stock/[id]` - อัปเดตข้อมูลสินค้า
- `DELETE /api/stock/[id]` - ลบสินค้า
- `PATCH /api/stock/[id]` - ปรับสต็อกแบบรวดเร็ว

## 🏪 ระบบ Stock Management - คู่มือการใช้งาน

### 📊 หน้า Dashboard
- **สถิติภาพรวม**: แสดงจำนวนสินค้าทั้งหมด, ใกล้หมด, หมดสต็อก, และมูลค่ารวม
- **การ์ดสถิติ**: มี icon และสีที่แตกต่างกันตามประเภท
- **Trend Indicators**: แสดงการเปลี่ยนแปลงเป็นเปอร์เซ็นต์

### 🔍 ระบบค้นหาและกรอง
- **ช่องค้นหา**: ค้นหาตามชื่อสินค้า, รหัส SKU, หมวดหมู่, หรือผู้จำหน่าย
- **Debounce Search**: รอ 0.8 วินาทีหลังพิมพ์เสร็จก่อนค้นหา
- **ปุ่มเคลียร์**: ปุ่ม X สำหรับลบข้อความค้นหา
- **กรองหมวดหมู่**: เลือกหมวดหมู่สินค้า (อิเล็กทรอนิกส์, คอมพิวเตอร์, อุปกรณ์เสริม)
- **กรองสถานะ**: เลือกสถานะสต็อก (มีสินค้า, ใกล้หมด, หมดสต็อก)

### 📋 ตารางรายการสินค้า
- **รหัสสินค้า**: แสดงเป็น monospace font
- **ชื่อสินค้า**: พร้อมชื่อผู้จำหน่าย
- **หมวดหมู่**: แสดงเป็น badge
- **สต็อกปัจจุบัน**: พร้อมข้อมูล Min/Max
- **ระดับสต็อก**: Progress bar แสดงเปอร์เซ็นต์
- **ราคา**: จัดรูปแบบเป็นสกุลเงินไทย
- **สถานะ**: Badge สีต่างกันตามสถานะ
- **การจัดการ**: ปุ่มดู, แก้ไข, ลบ

### 📄 Pagination
- **Server-side Pagination**: โหลดเฉพาะข้อมูลที่ต้องการ
- **แสดงข้อมูล**: จำนวนรายการที่แสดงและทั้งหมด
- **Navigation**: ปุ่มก่อนหน้า/ถัดไป และหมายเลขหน้า
- **Smart Pagination**: แสดงหน้าแรก, สุดท้าย, และใกล้เคียงปัจจุบัน

### 🔄 Loading States
- **Search Loading**: Spinner ในช่องค้นหา
- **Table Loading**: Loading indicator ในตาราง
- **Button Loading**: ปุ่มรีเฟรชแสดงสถานะ loading

## 🗄️ Database Schema

### StockItem Model
```prisma
model StockItem {
  id           Int         @id @default(autoincrement())
  sku          String      @unique
  name         String
  category     String
  currentStock Int
  minStock     Int
  maxStock     Int
  price        Float
  status       StockStatus
  supplier     String
  lastUpdated  DateTime    @default(now()) @updatedAt
  createdAt    DateTime    @default(now())
}

enum StockStatus {
  IN_STOCK
  LOW_STOCK
  OUT_OF_STOCK
}
```

### ข้อมูลตัวอย่าง
- **20 รายการสินค้า** ในหมวดหมู่ต่างๆ
- **สถานะที่หลากหลาย** (มีสินค้า, ใกล้หมด, หมดสต็อก)
- **ราคาและสต็อกที่สมจริง**

## 🎨 ระบบ Navigation Menu

### Desktop Navigation
- **Dropdown Menu** - เมนูแบบเลื่อนลงสำหรับบริการ
- **Hover Effects** - เอฟเฟกต์เมื่อเลื่อนเมาส์
- **Icons Integration** - ไอคอนสำหรับแต่ละบริการ
- **Responsive Design** - ปรับตัวตามขนาดหน้าจอ

### Mobile Navigation
- **Hamburger Menu** - เมนูแบบ 3 ขีด
- **Collapsible Dropdown** - เมนูย่อยที่สามารถขยายได้
- **Touch Friendly** - เหมาะสำหรับการสัมผัส

### Service Menu Items
1. **บริการหลัก** - ภาพรวมบริการทั้งหมด
2. **ออกแบบเว็บไซต์** - Web Development
3. **ออกแบบกราฟฟิก** - Graphic Design
4. **การตลาดดิจิทัล** - Digital Marketing

## 🔧 การปรับแต่งฟอนต์

### ฟอนต์ที่ใช้
- **Anuphan** - ฟอนต์ไทยจาก Google Fonts
- **Inter** - ฟอนต์อังกฤษจาก Google Fonts

### การตั้งค่าฟอนต์
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@100;200;300;400;500;600;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Font Stack */
--font-display: "Inter", "Anuphan", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Optimization
- **Font Display Swap** - ป้องกันการกะพริบของข้อความ
- **Preconnect Links** - โหลดฟอนต์เร็วขึ้น
- **Font Smoothing** - ปรับปรุงการแสดงผลบน macOS

## 🎨 การใช้งาน Dark Mode

ระบบรองรับการสลับธีมอัตโนมัติตาม:
1. **System Preference** - ตามการตั้งค่าของระบบปฏิบัติการ
2. **Manual Toggle** - สลับด้วยปุ่มใน Header
3. **Local Storage** - จดจำการตั้งค่าของผู้ใช้

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px    /* Tablet */
md: 768px    /* Desktop Small */
lg: 1024px   /* Desktop Medium */
xl: 1280px   /* Desktop Large */
2xl: 1536px  /* Desktop Extra Large */
```

## ♿ Accessibility Features

- **ARIA Labels** - ป้ายกำกับสำหรับ Screen Readers
- **Keyboard Navigation** - รองรับการใช้งานด้วยคีย์บอร์ด
- **Touch Targets** - ขนาดปุ่มเหมาะสมสำหรับการสัมผัส (44px+)
- **Color Contrast** - สีที่มี contrast ratio ตามมาตรฐาน WCAG
- **Focus Indicators** - แสดงตำแหน่งโฟกัสอย่างชัดเจน
- **Screen Reader Support** - รองรับ assistive technology

## 🔧 การปรับแต่ง

### เปลี่ยนสีธีม
แก้ไขไฟล์ `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### เพิ่ม Component ใหม่
```bash
# ใช้ Shadcn/ui CLI
npx shadcn-ui@latest add [component-name]
```

### เพิ่มบริการใหม่
1. สร้างโฟลเดอร์ใหม่ใน `src/app/(front)/service/`
2. เพิ่ม `page.tsx` และ component file
3. อัพเดท `serviceItems` ใน `Navbar.tsx`
4. เพิ่มไอคอนและข้อมูลบริการ

### เพิ่มฟีเจอร์ Stock Management
1. **เพิ่ม Model ใหม่**: แก้ไข `prisma/schema.prisma`
2. **สร้าง API Route**: เพิ่มใน `src/app/api/`
3. **สร้าง Custom Hook**: เพิ่มใน `src/hooks/`
4. **สร้าง Types**: เพิ่มใน `src/types/`
5. **สร้าง Component**: เพิ่มใน `src/app/(admin)/admin/`

## 🚀 Performance Optimizations

### Frontend
- **Code Splitting** - แยกโค้ดตาม Route
- **Image Optimization** - Next.js Image Component
- **Font Optimization** - Google Fonts Optimization
- **Bundle Analysis** - ตรวจสอบขนาด Bundle

### Database
- **Connection Pooling** - Prisma Connection Pool
- **Query Optimization** - Efficient Database Queries
- **Indexing** - Database Index สำหรับ Search
- **Pagination** - Server-side Pagination

### API
- **Debounce Search** - ป้องกัน API Bombardment
- **Error Handling** - Comprehensive Error Management
- **Type Safety** - TypeScript ทุกระดับ
- **Validation** - Input Validation และ Sanitization

## 📊 Features ที่เสร็จแล้ว ✅

- [x] **ระบบ Stock Management** - CRUD ครบครัน
- [x] **Database Integration** - SQLite + Prisma
- [x] **API Routes** - RESTful API
- [x] **Search & Filter** - Real-time Search
- [x] **Pagination** - Server-side Pagination
- [x] **Loading States** - UX ที่ดี
- [x] **Error Handling** - จัดการข้อผิดพลาด
- [x] **TypeScript Types** - Type Safety
- [x] **Custom Hooks** - Reusable Logic
- [x] **Responsive Design** - Mobile-first
- [x] **Dark Mode** - Theme Toggle

## 📊 Features ที่วางแผนไว้

- [ ] **ระบบ Authentication จริง** - JWT, OAuth
- [ ] **Database Migration** - PostgreSQL Production
- [ ] **Stock CRUD Forms** - เพิ่ม/แก้ไข/ลบสินค้า
- [ ] **Stock Reports** - รายงานสต็อก
- [ ] **Stock Alerts** - แจ้งเตือนสต็อกใกล้หมด
- [ ] **Barcode Scanner** - สแกนบาร์โค้ด
- [ ] **Export/Import** - นำเข้า/ส่งออกข้อมูล
- [ ] **Multi-location** - หลายสาขา
- [ ] **Stock Movement** - ประวัติการเคลื่อนไหว
- [ ] **Supplier Management** - จัดการผู้จำหน่าย
- [ ] **CMS Integration** - Headless CMS
- [ ] **Blog System** - บทความและข่าวสาร
- [ ] **Portfolio Gallery** - แสดงผลงาน
- [ ] **Contact Form Backend** - ส่งอีเมลจริง
- [ ] **Multi-language** - i18n Support
- [ ] **PWA Support** - Progressive Web App
- [ ] **Analytics Integration** - Google Analytics

## 🐛 การรายงานปัญหา

หากพบปัญหาหรือต้องการเสนอแนะ:
1. เปิด Issue ใน GitHub Repository
2. อธิบายปัญหาอย่างละเอียด
3. แนบ Screenshot หากจำเป็น
4. ระบุ Browser และ OS ที่ใช้
5. ระบุขั้นตอนการทำซ้ำปัญหา

## 🤝 การมีส่วนร่วม

เรายินดีรับการมีส่วนร่วมจากทุกคน:
1. Fork Repository
2. สร้าง Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

โปรเจ็กต์นี้อยู่ภายใต้ [MIT License](LICENSE)

## 👨‍💻 ผู้พัฒนา (อาจารย์ฟลุคเองให้มา 555+🐥)

- **ชื่อ:** Samit Koyom
- **Email:** samitkoyom@gmail.com
- **GitHub:** [@iamsamitdev](https://github.com/iamsamitdev)

## 🙏 ขอบคุณ

- [Next.js](https://nextjs.org/) - React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Radix UI](https://www.radix-ui.com/) - Navigation Components
- [Lucide](https://lucide.dev/) - Icon Library
- [Google Fonts](https://fonts.google.com/) - Web Fonts
- [Prisma](https://www.prisma.io/) - Database Toolkit
- [SQLite](https://www.sqlite.org/) - Database Engine

---

<div align="center">
  <p>สร้างด้วย ❤️ โดยใช้ Next.js, Tailwind CSS และ Prisma</p>
  <p>© 2024 Next.js Business Template. All rights reserved.</p>
</div>
่่# Next_prisma_sqlite
