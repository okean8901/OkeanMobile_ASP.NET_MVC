# Tài liệu Mô tả Chức năng - Okean Mobile E-Commerce

## 1. Tổng quan hệ thống

**Okean Mobile** là nền tảng thương mại điện tử cho phép khách hàng:
- Tìm kiếm và mua sắm sản phẩm điện tử
- Thanh toán trực tuyến qua VNPay
- Theo dõi đơn hàng
- Đánh giá sản phẩm

Và cho phép quản trị viên:
- Quản lý kho sản phẩm
- Theo dõi đơn hàng
- Quản lý người dùng

---

## 2. Các chức năng chính

### 2.1 Module Account (Tài khoản)

#### 2.1.1 Đăng nhập
**Mục đích:** Người dùng đăng nhập vào hệ thống

**Luồng hoạt động:**
1. Người dùng truy cập trang `/Account/Login`
2. Nhập email và mật khẩu
3. Hệ thống kiểm tra thông tin
4. Nếu đúng → Lưu session → Redirect trang chủ
5. Nếu sai → Hiển thị thông báo lỗi

**Validation:**
- Email không được trống
- Mật khẩu không được trống
- Email phải đúng format
- Tài khoản phải tồn tại
- Mật khẩu phải đúng

#### 2.1.2 Đăng ký
**Mục đích:** Tạo tài khoản mới

**Luồng hoạt động:**
1. Người dùng truy cập trang `/Account/Register`
2. Nhập email, mật khẩu, xác nhận mật khẩu
3. Hệ thống kiểm tra:
   - Email chưa tồn tại
   - Mật khẩu khớp
4. Tạo tài khoản mới → Gửi email xác nhận
5. Redirect trang đăng nhập (hoặc đăng nhập tự động)

**Validation:**
- Email không được trống, phải đúng format
- Email chưa được sử dụng
- Mật khẩu >= 8 ký tự
- Mật khẩu phải khớp

#### 2.1.3 Quên mật khẩu
**Mục đích:** Reset mật khẩu nếu quên

**Luồng hoạt động:**
1. Người dùng nhập email
2. Hệ thống gửi link reset password
3. Người dùng click link → Tạo mật khẩu mới
4. Cập nhật mật khẩu

---

### 2.2 Module Product (Sản phẩm)

#### 2.2.1 Xem danh sách sản phẩm
**Mục đích:** Hiển thị tất cả sản phẩm

**Thông tin hiển thị:**
- Hình ảnh sản phẩm
- Tên sản phẩm
- Giá
- Số lượng đánh giá
- Số sao trung bình

**Pagination:** Hiển thị 12-20 sản phẩm/trang

#### 2.2.2 Tìm kiếm sản phẩm
**Mục đích:** Tìm kiếm theo từ khóa

**Cách hoạt động:**
- Người dùng nhập từ khóa → Tìm trong tên, mô tả, danh mục
- Hiển thị kết quả phù hợp

#### 2.2.3 Lọc danh mục
**Mục đích:** Hiển thị sản phẩm theo danh mục

**Danh mục:**
- Điện thoại
- Tablet
- Laptop
- Phụ kiện
- Khác

#### 2.2.4 Lọc theo giá
**Mục đích:** Hiển thị sản phẩm trong khoảng giá

**Khoảng giá:**
- Dưới 100.000 VND
- 100.000 - 500.000 VND
- 500.000 - 1.000.000 VND
- 1.000.000 - 5.000.000 VND
- Trên 5.000.000 VND

#### 2.2.5 Xem chi tiết sản phẩm
**Mục đích:** Hiển thị thông tin chi tiết sản phẩm

**Thông tin:**
- Hình ảnh (có thể zoom)
- Tên sản phẩm
- Giá
- Mô tả
- Thông số kỹ thuật
- Số lượng tồn kho
- Số sao và số đánh giá
- Nút "Thêm vào giỏ hàng"
- Các sản phẩm liên quan

#### 2.2.6 Sắp xếp sản phẩm
**Mục đích:** Giúp người dùng sắp xếp danh sách

**Tùy chọn:**
- Mới nhất
- Bán chạy nhất
- Giá thấp đến cao
- Giá cao đến thấp
- Đánh giá cao nhất

---

### 2.3 Module Cart (Giỏ hàng)

#### 2.3.1 Thêm sản phẩm vào giỏ
**Mục đích:** Thêm sản phẩm vào giỏ mua hàng

**Luồng hoạt động:**
1. Người dùng xem chi tiết sản phẩm
2. Chọn số lượng
3. Click "Thêm vào giỏ hàng"
4. Hệ thống kiểm tra:
   - Số lượng <= tồn kho
   - Nếu sản phẩm đã có trong giỏ → Cộng số lượng
5. Hiển thị thông báo thành công
6. Cập nhật số lượng giỏ trên icon

#### 2.3.2 Xem giỏ hàng
**Mục đích:** Hiển thị sản phẩm trong giỏ

**Thông tin:**
- Danh sách sản phẩm
- Hình ảnh, tên, giá đơn vị
- Số lượng (có nút +/-)
- Thành tiền (giá x số lượng)
- Tổng tiền
- Nút "Tiếp tục mua hàng"
- Nút "Thanh toán"

#### 2.3.3 Cập nhật số lượng
**Mục đích:** Thay đổi số lượng sản phẩm trong giỏ

**Luồng:**
1. Người dùng nhập số lượng mới
2. Hệ thống kiểm tra số lượng <= tồn kho
3. Tự động cập nhật thành tiền và tổng tiền

#### 2.3.4 Xóa sản phẩm
**Mục đích:** Xóa sản phẩm khỏi giỏ

**Luồng:**
1. Người dùng click nút Xóa
2. Hệ thống xóa sản phẩm
3. Cập nhật tổng tiền
4. Hiển thị thông báo xóa thành công

#### 2.3.5 Làm trống giỏ hàng
**Mục đích:** Xóa hết sản phẩm trong giỏ

**Luồng:**
1. Người dùng click "Làm trống giỏ"
2. Xác nhận
3. Xóa tất cả sản phẩm

---

### 2.4 Module Order (Đơn hàng)

#### 2.4.1 Tạo đơn hàng
**Mục đích:** Tạo đơn hàng từ giỏ hàng

**Luồng hoạt động:**
1. Người dùng xem giỏ hàng
2. Click "Thanh toán" → Chuyển sang trang Order
3. Nhập thông tin giao hàng:
   - Người nhận
   - Địa chỉ
   - Số điện thoại
   - Ghi chú
4. Chọn phương thức thanh toán
5. Xem lại thông tin → Click "Đặt hàng"
6. Tạo đơn hàng → Redirect trang thanh toán

#### 2.4.2 Xem lịch sử đơn hàng
**Mục đích:** Xem danh sách đơn hàng của người dùng

**Thông tin:**
- ID đơn hàng
- Ngày đặt
- Tổng tiền
- Trạng thái (Chờ xác nhận, Đang chuẩn bị, Đang giao, Đã giao, Đã hủy)
- Nút xem chi tiết, hủy

#### 2.4.3 Xem chi tiết đơn hàng
**Mục đích:** Xem thông tin chi tiết đơn hàng

**Thông tin:**
- ID, ngày đặt, trạng thái
- Thông tin khách hàng
- Danh sách sản phẩm
- Tổng tiền, phí vận chuyển, thành tiền
- Lịch sử trạng thái

#### 2.4.4 Hủy đơn hàng
**Mục đích:** Hủy đơn hàng chưa giao

**Điều kiện:**
- Chỉ có thể hủy khi trạng thái = "Chờ xác nhận" hoặc "Đang chuẩn bị"
- Phải xác nhận hủy

**Luồng:**
1. Xem chi tiết đơn hàng
2. Click "Hủy đơn"
3. Xác nhận → Cập nhật trạng thái = "Đã hủy"

#### 2.4.5 Trạng thái đơn hàng
**Các trạng thái:**

1. **Chờ xác nhận** - Vừa tạo đơn, chưa xác nhận
2. **Đang chuẩn bị** - Admin đã xác nhận, đang chuẩn bị hàng
3. **Đang giao** - Hàng đã gửi đi
4. **Đã giao** - Khách hàng đã nhận hàng
5. **Đã hủy** - Đơn hàng bị hủy

---

### 2.5 Module Payment (Thanh toán)

#### 2.5.1 Thanh toán VNPay
**Mục đích:** Thanh toán đơn hàng qua VNPay

**Luồng hoạt động:**
1. Người dùng ở trang Order
2. Click "Thanh toán"
3. Hệ thống redirect sang VNPay
4. Người dùng nhập thông tin thẻ/tài khoản ngân hàng
5. VNPay xác nhận thanh toán
6. Redirect về hệ thống
7. Cập nhật trạng thái đơn hàng

**Lưu ý:**
- Phải lưu giỏ hàng trước khi redirect
- Phải lưu thông tin đơn hàng

#### 2.5.2 Thanh toán khi nhận hàng (COD)
**Mục đích:** Cho phép thanh toán khi nhận hàng

**Luồng:**
1. Người dùng chọn "Thanh toán khi nhận hàng"
2. Đơn hàng được tạo ngay
3. Trạng thái = "Chờ xác nhận"

---

### 2.6 Module Review (Đánh giá)

#### 2.6.1 Đánh giá sản phẩm
**Mục đích:** Người dùng đánh giá sản phẩm đã mua

**Điều kiện:**
- Phải đã mua sản phẩm
- Đơn hàng phải "Đã giao"
- Chỉ được đánh giá 1 lần/sản phẩm

**Thông tin đánh giá:**
- Số sao (1-5)
- Nhận xét văn bản
- Hình ảnh (tùy chọn)

#### 2.6.2 Xem đánh giá
**Mục đích:** Hiển thị đánh giá từ các người dùng khác

**Thông tin:**
- Tên người đánh giá
- Số sao
- Nhận xét
- Hình ảnh
- Ngày đánh giá
- Số lượt "Hữu ích"

#### 2.6.3 Tính toán số sao trung bình
**Mục đích:** Hiển thị số sao trung bình của sản phẩm

**Công thức:**
- Số sao TB = Tổng sao / Số đánh giá

---

### 2.7 Module Admin (Quản trị)

#### 2.7.1 Quản lý sản phẩm

##### a. Xem danh sách sản phẩm
**Thông tin:**
- ID sản phẩm
- Tên
- Danh mục
- Giá
- Tồn kho
- Trạng thái (Còn bán, Hết hàng)
- Ngày tạo
- Nút Sửa, Xóa

##### b. Thêm sản phẩm mới
**Thông tin nhập:**
- Tên sản phẩm
- Mô tả
- Danh mục
- Giá
- Giá khuyến mãi (tùy chọn)
- Tồn kho
- Hình ảnh chính
- Hình ảnh phụ
- Thông số kỹ thuật
- Trạng thái (Ẩn/Hiển thị)

##### c. Sửa thông tin sản phẩm
**Mục đích:** Cập nhật thông tin sản phẩm

**Luồng:**
1. Click nút Sửa
2. Chỉnh sửa thông tin
3. Click Lưu

##### d. Xóa sản phẩm
**Mục đích:** Xóa sản phẩm khỏi hệ thống

**Luồng:**
1. Click nút Xóa
2. Xác nhận
3. Xóa sản phẩm

#### 2.7.2 Quản lý đơn hàng

##### a. Xem danh sách đơn hàng
**Thông tin:**
- ID đơn hàng
- Tên khách hàng
- Ngày đặt
- Tổng tiền
- Trạng thái
- Nút Xem chi tiết, Cập nhật trạng thái

##### b. Xem chi tiết đơn hàng
**Thông tin:**
- Thông tin khách hàng
- Danh sách sản phẩm
- Tổng tiền
- Thông tin giao hàng
- Lịch sử trạng thái

##### c. Cập nhật trạng thái đơn hàng
**Luồng:**
1. Xem chi tiết đơn hàng
2. Chọn trạng thái mới từ dropdown
3. Click Lưu
4. Tự động gửi email thông báo cho khách hàng

#### 2.7.3 Quản lý người dùng

##### a. Xem danh sách người dùng
**Thông tin:**
- ID
- Email
- Tên
- Số điện thoại
- Ngày tạo
- Trạng thái (Hoạt động, Bị khóa)
- Nút Xem, Khóa/Mở khóa

##### b. Khóa/Mở khóa người dùng
**Mục đích:** Kiểm soát người dùng

**Luồng:**
1. Click nút Khóa/Mở khóa
2. Xác nhận
3. Cập nhật trạng thái

---

## 3. Các tính năng phụ

### 3.1 Chatbot
**Mục đích:** Hỗ trợ khách hàng tự động

**Chức năng:**
- Trả lời câu hỏi thường gặp
- Hướng dẫn cách sử dụng
- Gửi tin nhắn tới admin nếu cần

### 3.2 Email Notification
**Mục đích:** Thông báo sự kiện qua email

**Sự kiện:**
- Xác nhận đơn hàng
- Cập nhật trạng thái đơn
- Xác nhận email
- Đặt lại mật khẩu

### 3.3 OTP (One-Time Password)
**Mục đích:** Xác minh tài khoản qua OTP

**Sử dụng cho:**
- Đặt lại mật khẩu
- Xác minh email

---

## 4. Giao diện responsive

### 4.1 Desktop (1920x1080, 1366x768)
- Hiển thị đầy đủ tất cả chức năng
- Sidebar menu
- Layout rộng

### 4.2 Tablet (768x1024)
- Menu ẩn/hiện với hamburger menu
- Nút bấm phải kích thước
- Layout thích ứng

### 4.3 Mobile (375x667, 414x896)
- Full width
- Hamburger menu
- Nút bấm lớn
- Tối ưu cho cảm ứng

---

## 5. Quy trình mua hàng (Happy Path)

1. **Duyệt sản phẩm**
   - Truy cập trang chủ → Tìm kiếm/Lọc → Xem chi tiết

2. **Thêm vào giỏ**
   - Chọn số lượng → Click "Thêm vào giỏ"

3. **Xem giỏ hàng**
   - Click icon giỏ → Xem danh sách → Cập nhật số lượng (nếu cần)

4. **Thanh toán**
   - Click "Thanh toán" → Nhập thông tin giao hàng → Chọn phương thức

5. **Tạo đơn**
   - Xem lại thông tin → Click "Đặt hàng"

6. **Thanh toán (VNPay)**
   - Redirect VNPay → Nhập thông tin → Xác nhận

7. **Xác nhận**
   - Quay về hệ thống → Thông báo đặt hàng thành công

8. **Theo dõi**
   - Xem "Đơn hàng của tôi" → Theo dõi trạng thái

9. **Nhận hàng & Đánh giá**
   - Nhận hàng → Đánh giá sản phẩm

---

## 6. Các lỗi có thể xảy ra & xử lý

| Lỗi | Nguyên nhân | Cách xử lý |
|-----|-----------|-----------|
| Không thêm được sản phẩm | Hết tồn kho | Hiển thị thông báo, disable nút |
| Lỗi thanh toán | VNPay offline | Retry hoặc chọn phương thức khác |
| Email không gửi | Mail server lỗi | Log lỗi, retry tự động |
| Timeout | Mạng chậm | Retry, timeout 30s |

---

## 7. Bảo mật

- Mật khẩu phải mã hóa (bcrypt)
- Session timeout 30 phút
- HTTPS trên production
- Input validation & sanitization
- SQL injection prevention
- CSRF token

---

*Tài liệu này phục vụ cho việc test và phát triển hệ thống*
