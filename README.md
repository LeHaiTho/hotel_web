# Hotel Booking System

## Overview
Hotel Booking System là một nền tảng đặt phòng khách sạn toàn diện, cung cấp giải pháp cho cả khách hàng và chủ khách sạn. Hệ thống được phát triển với 3 thành phần chính: Web App, Mobile App và Backend API.

## Features

### 1. Trang Chủ
![Trang Chủ](https://github.com/user-attachments/assets/6a3ca1d7-18d7-4ec7-834a-4282a675bfa3)

Trang chủ cung cấp giao diện thân thiện với người dùng, cho phép:
- Tìm kiếm khách sạn theo vị trí, ngày, số người
- Xem danh sách khách sạn nổi bật
- Lọc và sắp xếp kết quả tìm kiếm
- Xem bản đồ vị trí khách sạn

### 2. Quản Lý Khách Sạn
![Quản Lý Khách Sạn](https://github.com/user-attachments/assets/d652f9d2-94a9-4ee0-bd86-4ba10d5cde88)

Dashboard quản lý khách sạn cung cấp:
- Tổng quan về hoạt động kinh doanh
- Quản lý đặt phòng
- Thống kê doanh thu
- Quản lý phòng và giá

### 3. Điều Chỉnh Giá Ngày Đặc Biệt
![Điều Chỉnh Giá](https://github.com/user-attachments/assets/bbb87a43-23f7-463b-9be0-fe922dcd1f07)

Tính năng cho phép chủ khách sạn:
- Thiết lập giá đặc biệt cho từng ngày
- Áp dụng giá theo mùa
- Quản lý lịch giá động

### 4. Quản Lý Khuyến Mãi
![Khuyến Mãi](https://github.com/user-attachments/assets/2a812ad2-fdea-4e79-a711-5ec094034e76)

Hệ thống quản lý khuyến mãi với các tính năng:
- Tạo và quản lý mã giảm giá
- Thiết lập điều kiện áp dụng
- Theo dõi hiệu quả khuyến mãi

### 5. Đánh Giá Khách Hàng
![Đánh Giá](https://github.com/user-attachments/assets/f9324297-9658-42ba-ac29-8a4f80139416)

Quản lý đánh giá và phản hồi:
- Xem và phản hồi đánh giá
- Thống kê điểm đánh giá
- Quản lý báo cáo vi phạm

### 6. Báo Cáo Doanh Thu
![Báo Cáo](https://github.com/user-attachments/assets/70cd0d6b-376c-45b7-b426-d410daca3a2c)

Hệ thống báo cáo tài chính:
- Báo cáo doanh thu theo thời gian
- Đối soát thanh toán
- Xuất báo cáo chi tiết

## Technology Stack

### Backend
- Node.js + TypeScript
- Express.js
- PostgreSQL + Sequelize
- JWT Authentication
- Nodemailer
- Multer

### Web App
- React 18 + TypeScript
- Redux Toolkit
- Ant Design
- Chart.js
- Leaflet Maps

### Mobile App
- React Native
- TypeScript
- React Navigation
- Firebase Auth
- Zustand

## Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL
- React Native development environment

### Installation

1. Clone repository:
```bash
git clone https://github.com/your-username/hotel-booking.git
cd hotel-booking
```

2. Install dependencies:
```bash
# Backend
cd server_hotelbooking
npm install

# Web App
cd ../hotelbooking_web
npm install

# Mobile App
cd ../mobile
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env` in each project directory
- Update the configuration values

4. Start development servers:
```bash
# Backend
cd server_hotelbooking
npm run dev

# Web App
cd ../hotelbooking_web
npm run dev

# Mobile App
cd ../mobile
npm run android # or npm run ios
```

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
