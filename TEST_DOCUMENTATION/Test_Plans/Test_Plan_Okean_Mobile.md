# Test Plan - Okean Mobile E-Commerce Platform

## 1. Thông tin chung

**Tên dự án:** Okean Mobile - Nền tảng bán hàng điện tử

**Phiên bản:** v1.0

**Ngày lập:** 30/01/2026

**Người lập:** [Tester Name]

---

## 2. Mục tiêu kiểm thử

- Xác minh các chức năng chính hoạt động đúng theo yêu cầu
- Phát hiện lỗi (bug) trong hệ thống trước khi release
- Đảm bảo chất lượng người dùng (UX) trên web và mobile
- Kiểm tra hiệu năng và bảo mật cơ bản
- Xác nhận tính tương thích với các trình duyệt phổ biến

---

## 3. Phạm vi kiểm thử

### 3.1 Chức năng được kiểm thử

| Module | Chức năng |
|--------|-----------|
| **Account** | Đăng nhập, Đăng ký, Quên mật khẩu |
| **Product** | Xem danh sách sản phẩm, Tìm kiếm, Lọc danh mục, Xem chi tiết |
| **Cart** | Thêm/Xóa sản phẩm, Cập nhật số lượng, Xem giỏ hàng |
| **Order** | Tạo đơn hàng, Xem lịch sử, Hủy đơn hàng |
| **Payment** | Thanh toán VNPay |
| **Review** | Đánh giá sản phẩm, Xem đánh giá |
| **Admin** | Quản lý sản phẩm, Quản lý đơn hàng, Quản lý người dùng |
| **UI/UX** | Responsive design, Giao diện trên mobile, Desktop |

### 3.2 Chức năng KHÔNG kiểm thử

- Chatbot (chỉ kiểm thử cơ bản)
- Tích hợp cầu thủ mail (chỉ kiểm thử gửi/không gửi)
- Hiệu năng dưới 1000 users đồng thời
- Bảo mật nâng cao (penetration testing)

---

## 4. Môi trường kiểm thử

### 4.1 Máy chủ test

- **URL:** http://localhost:5000 (hoặc staging server)
- **Database:** Test DB (có dữ liệu mẫu)
- **Browser:** 
  - Chrome (v120+)
  - Firefox (v121+)
  - Edge (v120+)
  - Safari (v16+ trên Mac)

### 4.2 Thiết bị test

- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

### 4.3 Tài khoản test

| Loại | Email | Password | Ghi chú |
|------|-------|----------|---------|
| Admin | admin@okean.com | Admin@123 | Tài khoản quản trị viên |
| User | user@test.com | User@123 | Tài khoản khách hàng bình thường |
| User | test2@test.com | Test@123 | Tài khoản test thứ 2 |

---

## 5. Kế hoạch kiểm thử

### 5.1 Giai đoạn 1: Smoke Test (Ngày 1-2)
- Kiểm thử các chức năng cơ bản
- Mục tiêu: Xác nhận hệ thống hoạt động tối thiểu

### 5.2 Giai đoạn 2: Functional Test (Ngày 3-5)
- Kiểm thử chi tiết từng module
- Mục tiêu: Phát hiện lỗi logic, dữ liệu

### 5.3 Giai đoạn 3: Integration Test (Ngày 6-7)
- Kiểm thử tương tác giữa các module
- Mục tiêu: Xác minh flow từ đặt hàng đến thanh toán

### 5.4 Giai đoạn 4: UAT (Ngày 8)
- Kiểm thử với người dùng thực
- Mục tiêu: Xác nhận sản phẩm đáp ứng nhu cầu

### 5.5 Giai đoạn 5: Regression Test (Ngày 9)
- Kiểm thử lại sau khi fix bug
- Mục tiêu: Đảm bảo fix không gây lỗi mới

---

## 6. Công cụ kiểm thử

| Công cụ | Mục đích |
|---------|---------|
| Google Sheets | Quản lý Test Case, Bug Report, Tiến độ |
| Google Docs | Viết Test Plan, Test Report |
| Postman | API testing (nếu có) |
| Dev Tools (F12) | Debug, kiểm tra Network, Console |
| BrowserStack | Test trên các trình duyệt khác nhau (nếu cần) |

---

## 7. Tiêu chí chấp nhận

### 7.1 Pass criteria (Có thể Release)

- Tất cả High priority test case PASS
- Tối thiểu 90% Medium priority test case PASS
- Tối thiểu 80% Low priority test case PASS
- Không có bug Critical
- Tối đa 5 High priority bug

### 7.2 Fail criteria (Không được Release)

- Chức năng đăng nhập/đăng ký không hoạt động
- Không thể tạo đơn hàng
- Thanh toán bị lỗi
- Mất dữ liệu người dùng

---

## 8. Nhân sự tham gia

| Vai trò | Tên | Liên hệ |
|---------|-----|---------|
| Tester Lead | [Name] | [Email] |
| Tester 1 | [Name] | [Email] |
| Tester 2 | [Name] | [Email] |
| Developer | [Name] | [Email] |

---

## 9. Lịch trình

| Giai đoạn | Thời gian | Kết quả |
|-----------|-----------|---------|
| Chuẩn bị | 30/01/2026 | Test Plan, Test Case hoàn tất |
| Smoke Test | 31/01/2026 | Hệ thống sẵn sàng test |
| Functional Test | 01-05/02/2026 | Tất cả test case chạy xong |
| Integration Test | 06-07/02/2026 | Flow hành động kiểm thử xong |
| Bug Fix & Retest | 08-09/02/2026 | Tất cả bug được xử lý |
| Report | 10/02/2026 | Test Report hoàn tất |

---

## 10. Rủi ro và giải pháp

| Rủi ro | Xác suất | Tác động | Giải pháp |
|---------|----------|----------|-----------|
| Server test bị down | Trung bình | Cao | Có server backup sẵn |
| Dữ liệu test bị xóa | Thấp | Cao | Backup hàng ngày |
| Tester bị ốm | Thấp | Trung bình | Có tester backup |
| Timeline bị delay | Trung bình | Trung bình | Tăng nhân sự hoặc giảm scope |

---

## 11. Tiêu chí kết thúc

Kiểm thử được xem là hoàn tất khi:

- Tất cả test case đã được chạy
- Tất cả bug đã được reported
- Tất cả High priority bug đã được fix
- Test Report được phê duyệt
- Có signed off từ Product Owner

---

## 12. Sign Off

- **Tester Lead:** _________________________ Ngày: _______
- **Project Manager:** _________________________ Ngày: _______
- **Product Owner:** _________________________ Ngày: _______

---

*Tài liệu này có thể được cập nhật trong quá trình kiểm thử.*
