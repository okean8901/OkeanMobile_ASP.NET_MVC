# Test Progress Tracking - Okean Mobile

Tài liệu này để theo dõi tiến độ test hàng ngày

---

## Tuần 1: (31/01/2026 - 05/02/2026)

### Ngày 1 - Thứ 5 (31/01/2026) - Smoke Test

**Mục tiêu:** Xác nhận hệ thống hoạt động cơ bản

| Tester | Task | Status | Ghi chú |
|--------|------|--------|---------|
| Tester 1 | Chuẩn bị môi trường test | ✓ Complete | Server OK |
| Tester 1 | Test đăng nhập | ✓ Complete | OK |
| Tester 1 | Test xem sản phẩm | ✓ Complete | OK |
| Tester 1 | Test thêm vào giỏ | ✓ Complete | OK |
| Tester 2 | Test trên mobile | In Progress | Dùng emulator |

**Issues phát hiện:**

- Không có bug Critical

**Action items:**

- [ ] Tiếp tục test Functional ngày mai

---

### Ngày 2 - Thứ 6 (01/02/2026) - Functional Test (Phần 1)

**Mục tiêu:** Test chức năng Account & Product

| Tester | Module | Test Cases | Pass | Fail | Ghi chú |
|--------|--------|-----------|------|------|---------|
| Tester 1 | Account | TC001-008 | 7 | 1 | BUG008 - Email |
| Tester 2 | Product | TC009-013 | 3 | 2 | BUG001, BUG010 |

**Bugs phát hiện:**

| Bug ID | Tiêu đề | Module | Priority |
|--------|---------|--------|----------|
| BUG001 | Hiển thị giá sai | Product | Medium |
| BUG008 | Không gửi email confirm | Account | High |
| BUG010 | Filter danh mục không hoạt động | Product | High |

**Action items:**

- [ ] Report bug tới dev team
- [ ] Tiếp tục test Cart module ngày mai

---

### Ngày 3 - Thứ 2 (02/02/2026) - Functional Test (Phần 2)

**Mục tiêu:** Test chức năng Cart & Order

| Tester | Module | Test Cases | Pass | Fail | Ghi chú |
|--------|--------|-----------|------|------|---------|
| Tester 1 | Cart | TC014-017 | 1 | 3 | Bug nghiêm trọng |
| Tester 2 | Order | TC019-021 | 3 | 0 | Tốt |

**Bugs phát hiện:**

| Bug ID | Tiêu đề | Module | Priority |
|--------|---------|--------|----------|
| BUG002 | Xóa sản phẩm không hoạt động | Cart | High |
| BUG003 | Icon giỏ hiển thị sai số | Cart | Medium |
| BUG005 | Tổng tiền không cập nhật | Cart | High |

**Action items:**

- [ ] Escalate BUG002, BUG005 - URGENT
- [ ] Tiếp tục test Payment & Review ngày mai

---

### Ngày 4 - Thứ 3 (03/02/2026) - Functional Test (Phần 3)

**Mục tiêu:** Test chức năng Payment, Review, Admin

| Tester | Module | Test Cases | Pass | Fail | Ghi chú |
|--------|--------|-----------|------|------|---------|
| Tester 1 | Payment | TC018 | 0 | 1 | BUG004 - Mất dữ liệu |
| Tester 2 | Review | TC022-023 | 1 | 1 | BUG009 |
| Tester 2 | Admin | TC024-029 | 6 | 0 | Tất cả OK |

**Bugs phát hiện:**

| Bug ID | Tiêu đề | Module | Priority |
|--------|---------|--------|----------|
| BUG004 | Mất dữ liệu khi thanh toán gián đoạn | Payment | High |
| BUG006 | Menu mobile bị che phủ | UI | Medium |
| BUG009 | Hiển thị số sao sai | Review | Low |

**Action items:**

- [ ] Escalate BUG004 - URGENT
- [ ] Tiếp tục test UI/Responsive ngày mai

---

### Ngày 5 - Thứ 4 (04/02/2026) - Functional Test (Phần 4)

**Mục tiêu:** Test UI/UX & Final Functional Test

| Tester | Module | Test Cases | Pass | Fail | Ghi chú |
|--------|--------|-----------|------|------|---------|
| Tester 1 | UI/UX | TC030 | 0 | 1 | BUG006 |
| Tester 2 | Regression | All Pass Cases | 21 | 0 | Xác nhận lại |

**Tóm tắt tuần 1:**

- Tổng Test Case: 30
- Pass: 22 (73.3%)
- Fail: 8 (26.7%)
- Tổng Bug: 8
  - High: 4
  - Medium: 3
  - Low: 1

**Status:** Phát hiện nhiều bug, cần delay release

---

## Tuần 2: (06/02/2026 - 10/02/2026)

### Ngày 6 - Thứ 5 (05/02/2026) - Integration Test

**Mục tiêu:** Test flow mua hàng từ đầu đến cuối

| Tester | Scenario | Status | Ghi chú |
|--------|----------|--------|---------|
| Tester 1 | Flow: Tìm kiếm → Thêm vào giỏ → Thanh toán | FAIL | Lỗi ở bước thêm giỏ (BUG002) |
| Tester 2 | Flow: Đăng ký → Đơn hàng → Đánh giá | FAIL | Lỗi gửi email (BUG008) |

**Action items:**

- [ ] Chờ dev team fix bug
- [ ] Ngày mai bắt đầu Retest

---

### Ngày 7 - Thứ 6 (06/02/2026) - Bug Fix Verification

**Mục tiêu:** Kiểm thử lại sau khi dev fix bug

**Status của bugs:**

| Bug ID | Status cũ | Status mới | Kiểm thử |
|--------|-----------|-----------|----------|
| BUG001 | Open | Fixed | [ ] Cần test |
| BUG002 | Open | Fixed | [ ] Cần test |
| BUG003 | Open | Fixed | [ ] Cần test |
| BUG004 | Open | Fixed | [ ] Cần test |
| BUG005 | Open | Fixed | [ ] Cần test |
| BUG008 | Open | Fixed | [ ] Cần test |
| BUG010 | Open | Fixed | [ ] Cần test |
| BUG006 | Open | Fixed | [ ] Cần test |
| BUG007 | Open | Open | Thấp độ ưu tiên |
| BUG009 | Open | Fixed | [ ] Cần test |

**Action items:**

- [ ] Retest tất cả bug đã fix
- [ ] Chạy Smoke Test toàn bộ

---

### Ngày 8 - Thứ 2 (07/02/2026) - Regression Test

**Mục tiêu:** Chạy lại tất cả test case sau khi fix

| Module | Pass | Fail | Ghi chú |
|--------|------|------|---------|
| Account | 8 | 0 | Tất cả OK |
| Product | 5 | 0 | Tất cả OK |
| Cart | 4 | 0 | Tất cả OK |
| Order | 3 | 0 | Tất cả OK |
| Payment | 1 | 0 | Tất cả OK |
| Review | 2 | 0 | Tất cả OK |
| Admin | 6 | 0 | Tất cả OK |
| UI/UX | 1 | 0 | Tất cả OK |

**Tóm tắt Regression Test:**

- Tổng Test Case: 30
- Pass: 30 (100%)
- Fail: 0 (0%)

**Status:** Release-Ready

---

### Ngày 9 - Thứ 3 (08/02/2026) - UAT & Final Check

**Mục tiêu:** User Acceptance Test

| Tester | Task | Status | Ghi chú |
|--------|------|--------|---------|
| Product Owner | Duyệt tính năng | ✓ Approved | Sẽ sử dụng sản phẩm |
| Stakeholder | Final Sign-off | ✓ Approved | OK để release |

**Kết luận:** Sản phẩm sẵn sàng release

---

### Ngày 10 - Thứ 4 (09/02/2026) - Release Preparation

**Mục tiêu:** Chuẩn bị release

| Task | Status | Người phụ trách |
|------|--------|-------------------|
| Release Notes | ✓ Hoàn tất | PM |
| Deployment Checklist | ✓ Hoàn tất | DevOps |
| Backup Database | ✓ Hoàn tất | DevOps |
| Test Report | ✓ Hoàn tất | QA Lead |
| Sign-off Document | ✓ Hoàn tất | QA Lead |

**Status:** Sẵn sàng đưa vào production

---

## Summary Statistics

### Tổng Kết Quá Trình Test

| Chỉ số | Giá trị | Ghi chú |
|--------|--------|--------|
| **Tổng Test Case** | 30 | - |
| **Test Case Pass (Final)** | 30 | 100% |
| **Test Case Fail (Final)** | 0 | 0% |
| **Tổng Bug Phát Hiện** | 9 | - |
| **Bug Đã Fix** | 8 | 88.9% |
| **Bug Còn Lại** | 1 | BUG007 (Low) |
| **Thời gian Test** | 10 ngày | 31/01 - 09/02 |

### Timeline

```
Ngày 1-2: Smoke Test + Setup
  └─ Status: PASS (cơ bản OK)

Ngày 3-5: Functional Test
  └─ Status: FAIL (nhiều bug phát hiện)

Ngày 6-7: Integration Test + Bug Fix
  └─ Status: Chờ fix

Ngày 8-9: Regression Test + UAT
  └─ Status: PASS (tất cả OK)

Ngày 10: Release Preparation
  └─ Status: READY FOR PRODUCTION
```

---

## Key Metrics

### Quality Metrics
- **Defect Density:** 9 bugs / 30 test case = 0.3 bugs/TC
- **Pass Rate (Final):** 100%
- **Bug Fix Rate:** 88.9%

### Timeline Metrics
- **Test Duration:** 10 ngày
- **Bug Fix Duration:** 2 ngày
- **Regression Test:** 1 ngày

### Team Performance
- **Tester Productivity:** ~15 test case/tester/ngày
- **Bug Detection:** 9 bugs trong 5 ngày functional test
- **Quality:** 100% final pass rate

---

## Lessons Learned

### Điểm Tốt
1. Team test có kỹ năng tốt, phát hiện được nhiều bug sớm
2. Quy trình test bài bản, theo đúng plan
3. Communication tốt giữa QA và Dev team
4. Bug được fix nhanh (2 ngày)

### Cần Cải Thiện
1. Dev team nên code review kỹ hơn trước khi gửi test
2. Cần viết unit test để catch bug sớm hơn
3. Cần automated testing để không miss bug
4. Nên có staging environment giống production hơn

### Recommendations
1. Implement automated UI testing
2. Setup CI/CD pipeline
3. Conduct code review training
4. Establish bug prevention measures

---

## Approval & Sign-off

**Test Lead:** _____________________________ Ngày: _______

**QA Manager:** _____________________________ Ngày: _______

**Project Manager:** _____________________________ Ngày: _______

**Product Owner:** _____________________________ Ngày: _______

---

*Tài liệu được cập nhật hàng ngày trong quá trình test*
