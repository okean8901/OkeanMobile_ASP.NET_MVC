# Okean_Mobile

## Giới thiệu tổng quát
Okean_Mobile là một dự án web được xây dựng trên nền tảng ASP.NET MVC, phục vụ cho việc quản lý và bán hàng các sản phẩm điện thoại, phụ kiện, máy tính bảng,... Dự án hỗ trợ các chức năng như quản lý sản phẩm, danh mục, giỏ hàng, đặt hàng, quản trị viên, người dùng, thanh toán, chatbot hỗ trợ khách hàng, và nhiều tính năng khác.

## Tính năng chính
- Quản lý sản phẩm, danh mục, đơn hàng, người dùng
- Đăng ký, đăng nhập, quên mật khẩu
- Giỏ hàng và đặt hàng
- Thanh toán đơn hàng
- Quản trị viên và phân quyền
- Chatbot hỗ trợ khách hàng

## Công nghệ sử dụng
- ASP.NET MVC (.NET 8)
- Entity Framework Core
- SQL Server (hoặc SQLite cho phát triển)
- Bootstrap, jQuery, JavaScript

## Yêu cầu hệ thống
- .NET 8 SDK: https://dotnet.microsoft.com/en-us/download/dotnet/8.0
- Visual Studio 2022 trở lên (hoặc sử dụng Visual Studio Code)
- SQL Server (hoặc SQLite)

## Hướng dẫn cài đặt và chạy dự án

### 1. Clone source code

git clone <link-repo>
cd Okean_Mobile/OkeanMobile_ASP.NET_MVC/Okean_Mobile


### 2. Cài đặt các package cần thiết
Nếu sử dụng Visual Studio, các package sẽ tự động được khôi phục khi mở solution. Nếu dùng CLI:

dotnet restore


### 3. Cấu hình chuỗi kết nối database
- Mở file `appsettings.json` hoặc `appsettings.Development.json`
- Sửa lại chuỗi kết nối cho phù hợp với SQL Server của bạn:
json
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=OkeanMobileDb;Trusted_Connection=True;MultipleActiveResultSets=true"
}


### 4. Chạy migration để tạo database

dotnet ef database update


### 5. Chạy dự án

dotnet run

Hoặc nhấn F5 trong Visual Studio.

### 6. Truy cập website
Mở trình duyệt và truy cập: http://localhost:5000 hoặc http://localhost:port bạn cấu hình.

## Thông tin liên hệ
- Tác giả: <Phạm Lê Trường>
- Email: <phamletruong2001@gmail.com>

---
Nếu có bất kỳ thắc mắc hoặc lỗi phát sinh, vui lòng liên hệ để được hỗ trợ! 
