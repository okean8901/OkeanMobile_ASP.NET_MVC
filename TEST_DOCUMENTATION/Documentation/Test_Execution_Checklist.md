# Test Execution Checklist - Okean Mobile

## Trước khi bắt đầu Test

- [ ] Đã backup database
- [ ] Đã reset test data
- [ ] Server test hoạt động bình thường (http://localhost:5000)
- [ ] Các tài khoản test sẵn sàng:
  - [ ] admin@okean.com / Admin@123
  - [ ] user@test.com / User@123
  - [ ] test2@test.com / Test@123
- [ ] Công cụ test chuẩn bị:
  - [ ] Google Sheets (để ghi kết quả)
  - [ ] Dev Tools (F12 để debug)
  - [ ] Email test (để kiểm tra email)
- [ ] Trình duyệt chuẩn bị:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Edge
- [ ] Thiết bị test chuẩn bị:
  - [ ] Desktop (1920x1080)
  - [ ] Tablet/Mobile emulator

---

## Giai đoạn 1: Smoke Test (Ngày 1-2)

### Kiểm tra cơ bản

- [ ] **TC001:** Đăng nhập với tài khoản admin
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

- [ ] **TC002:** Xem trang chủ
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

- [ ] **TC003:** Xem danh sách sản phẩm
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

- [ ] **TC004:** Thêm sản phẩm vào giỏ hàng
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

- [ ] **TC005:** Xem giỏ hàng
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

- [ ] **TC006:** Đăng xuất
  - Kết quả: __________ Pass / Fail
  - Ghi chú: __________

### Kết luận Smoke Test
- [ ] Hệ thống hoạt động tối thiểu
- [ ] Không có lỗi Critical
- [ ] Có thể tiếp tục Functional Test

---

## Giai đoạn 2: Functional Test (Ngày 3-5)

### Account Module

- [ ] **TC001:** Đăng nhập đúng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC002:** Đăng nhập sai mật khẩu
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC003:** Đăng nhập email không tồn tại
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC004:** Đăng nhập email trống
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC005:** Đăng nhập mật khẩu trống
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC006:** Đăng ký tài khoản mới
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC007:** Đăng ký email tồn tại
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC008:** Đăng ký mật khẩu không khớp
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Product Module

- [ ] **TC009:** Xem danh sách sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC010:** Tìm kiếm sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC011:** Lọc danh mục
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC012:** Lọc theo giá
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC013:** Xem chi tiết sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Cart Module

- [ ] **TC014:** Thêm sản phẩm vào giỏ
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC015:** Xem giỏ hàng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC016:** Cập nhật số lượng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC017:** Xóa sản phẩm khỏi giỏ
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Order Module

- [ ] **TC019:** Xem lịch sử đơn hàng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC020:** Xem chi tiết đơn hàng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC021:** Hủy đơn hàng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Payment Module

- [ ] **TC018:** Thanh toán VNPay
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Review Module

- [ ] **TC022:** Đánh giá sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC023:** Xem đánh giá
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### Admin Module

- [ ] **TC024:** Xem danh sách sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC025:** Thêm sản phẩm mới
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC026:** Sửa sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC027:** Xóa sản phẩm
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC028:** Xem danh sách đơn hàng
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

- [ ] **TC029:** Cập nhật trạng thái đơn
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

### UI/UX Module

- [ ] **TC030:** Responsive Design
  - Kết quả: __________ Pass / Fail
  - Bug (nếu có): __________

---

## Giai đoạn 3: Bug Fix Verification (Ngày 6-7)

### Bug cần Fix lại

- [ ] **BUG002:** Lỗi xóa sản phẩm
  - Trạng thái cũ: Open
  - Trạng thái mới: __________ Fixed / Retest / Closed
  - Ghi chú: __________

- [ ] **BUG004:** Lỗi mất dữ liệu thanh toán
  - Trạng thái cũ: Open
  - Trạng thái mới: __________ Fixed / Retest / Closed
  - Ghi chú: __________

- [ ] **BUG005:** Lỗi cập nhật số lượng
  - Trạng thái cũ: Open
  - Trạng thái mới: __________ Fixed / Retest / Closed
  - Ghi chú: __________

---

## Giai đoạn 4: Final Verification (Ngày 8-9)

### Kiểm thử lại sau fix

- [ ] Chạy lại tất cả test case liên quan đến bug đã fix
- [ ] Kiểm thử toàn bộ flow mua hàng
- [ ] Không phát sinh bug mới
- [ ] Hiệu năng vẫn tốt
- [ ] Responsive design OK

---

## Sau khi test xong

### Tổng hợp kết quả

- [ ] Đã ghi hết tất cả kết quả vào Google Sheets
- [ ] Đã tạo danh sách bug hoàn chỉnh
- [ ] Đã viết Test Report
- [ ] Đã đưa ra khuyến nghị (Release / Not Release)

### Chuẩn bị Release

- [ ] Tất cả bug High priority đã fix
- [ ] Regression test pass
- [ ] Xác nhận từ Product Owner
- [ ] Release notes chuẩn bị

---

## Ghi chú chung

**Ngày bắt đầu:** _____________

**Tester:** _____________

**Tester 2 (nếu có):** _____________

**Issues/Challenges:** 
_________________________________________________

_________________________________________________

_________________________________________________

---

*In lại checklist này và tích vào khi hoàn tất từng bước*
