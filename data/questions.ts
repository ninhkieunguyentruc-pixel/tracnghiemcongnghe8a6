import type { Question } from '../types';

export const questions: Question[] = [
{ id: 1, category: QuizCategory.ELECTRIC, q: "Hành vi vi phạm hành lang an toàn lưới điện cao áp là:", a: { A: "Trú mưa dưới gốc cây to", B: "Vứt rác thải gần cột điện", C: "Di chuyển ngoài đường mùa mưa bão", D: "Trồng cây cao quá quy định trong hành lang an toàn" }, c: "D" },
{ id: 2, category: QuizCategory.ELECTRIC, q: "Các nguồn điện thường dùng là:", a: { A: "Pin, ắc quy, lưới điện", B: "Đường dây tải điện, lưới điện", C: "Máy phát điện, pin, hiệu điện thế", D: "Pin mặt trời, máy phát điện, điện áp" }, c: "A" },
{ id: 3, category: QuizCategory.ELECTRIC, q: "Hành vi vi phạm khoảng cách an toàn là:", a: { A: "Xây dựng vi phạm hành lang", B: "Trèo cột điện, vào trạm biến áp", C: "Thả diều ngoài bãi trống", D: "Cả A và C" }, c: "B" },
{ id: 4, category: QuizCategory.ELECTRIC, q: "Chức năng của cảm biến là:", a: { A: "Cảm nhận và biến đổi tín hiệu", B: "Đóng cắt điện", C: "Xử lí tín hiệu", D: "Dẫn điện" }, c: "A" },
{ id: 5, category: QuizCategory.MECHANICAL, q: "Vai trò của cơ khí là:", a: { A: "Tăng năng suất lao động", B: "Làm con người lười", C: "Gây khó khăn", D: "Giảm năng suất" }, c: "A" },
{ id: 6, category: QuizCategory.MECHANICAL, q: "Vai trò của cơ khí trong sản xuất:", a: { A: "Tăng năng suất, giảm chi phí", B: "Không có vai trò", C: "Chỉ giải trí", D: "Chỉ công cụ đơn giản" }, c: "A" },
{ id: 7, category: QuizCategory.ELECTRIC, q: "Thiết bị biến điện năng thành nhiệt năng:", a: { A: "Đèn huỳnh quang", B: "Quạt điện", C: "Camera", D: "Nồi cơm điện" }, c: "D" },
{ id: 8, category: QuizCategory.ELECTRIC, q: "Vai trò mạch điều khiển:", a: { A: "Truyền điện", B: "Cung cấp điện", C: "Biến đổi năng lượng", D: "Điều khiển thiết bị" }, c: "D" },
{ id: 9, category: QuizCategory.MECHANICAL, q: "Truyền động xa, không trượt:", a: { A: "Vít-đai ốc", B: "Bánh răng", C: "Đai", D: "Xích" }, c: "D" },
{ id: 10, category: QuizCategory.MECHANICAL, q: "Cơ cấu tay quay thanh lắc:", a: { A: "Quay → tịnh tiến", B: "Tịnh tiến → quay", C: "Lắc → tịnh tiến", D: "Quay → lắc" }, c: "D" },

{ id: 11, category: QuizCategory.ELECTRIC, q: "Đặc điểm dây dẫn điện:", a: { A: "Cung cấp năng lượng", B: "Kết nối mạch", C: "Tiêu thụ điện", D: "Bảo vệ mạch" }, c: "B" },
{ id: 12, category: QuizCategory.ELECTRIC, q: "Tưới cây tự động dùng cảm biến:", a: { A: "Độ ẩm", B: "Nhiệt độ", C: "Hồng ngoại", D: "Ánh sáng" }, c: "A" },
{ id: 13, category: QuizCategory.ELECTRIC, q: "Không chạm kim loại bút thử điện:", a: { A: "Hỏng", B: "Cháy", C: "Vẫn sáng", D: "Không sáng" }, c: "D" },
{ id: 14, category: QuizCategory.ELECTRIC, q: "Chức năng cảm biến:", a: { A: "Cấp điện", B: "Biến tín hiệu vật lí thành điện", C: "Thực hiện hành động", D: "Hiển thị" }, c: "B" },
{ id: 15, category: QuizCategory.ELECTRIC, q: "Cảm biến hồng ngoại:", a: { A: "Gas", B: "Hồng ngoại", C: "Ánh sáng", D: "Âm thanh" }, c: "B" },
{ id: 16, category: QuizCategory.ELECTRIC, q: "Bộ phận cung cấp năng lượng:", a: { A: "Điều khiển", B: "Tải", C: "Nguồn điện", D: "Dây dẫn" }, c: "C" },
{ id: 17, category: QuizCategory.MECHANICAL, q: "Cơ cấu quay → tịnh tiến:", a: { A: "Đai", B: "Tay quay con trượt", C: "Xích", D: "Bánh răng" }, c: "B" },
{ id: 18, category: QuizCategory.MECHANICAL, q: "Ngành tự động hóa:", a: { A: "Hóa học", B: "Xây dựng", C: "Môi trường", D: "Cơ điện tử" }, c: "D" },
{ id: 19, category: QuizCategory.ELECTRIC, q: "Vai trò khối điều khiển:", a: { A: "Chiếu sáng", B: "Cấp điện", C: "Nối mạch", D: "Điều khiển tải" }, c: "D" },
{ id: 20, category: QuizCategory.ELECTRIC, q: "Phát hiện chuyển động:", a: { A: "Độ ẩm", B: "Hồng ngoại PIR", C: "Ánh sáng", D: "Nhiệt độ" }, c: "B" },

{ id: 21, category: QuizCategory.MECHANICAL, q: "Không thuộc cơ khí:", a: { A: "Thợ cơ khí", B: "KTV hàng không", C: "Luyện kim", D: "KTV tự động" }, c: "C" },
{ id: 22, category: QuizCategory.ELECTRIC, q: "Tai nạn điện xảy ra khi:", a: { A: "Dùng thiết bị", B: "Xây dựng gần cao áp", C: "Sửa điện", D: "Thay bóng" }, c: "B" },
{ id: 23, category: QuizCategory.ELECTRIC, q: "Bút thử điện gồm:", a: { A: "Đầu + thân", B: "Điện trở + thân", C: "Thân + đèn", D: "Điện trở + đèn" }, c: "D" },
{ id: 24, category: QuizCategory.ELECTRIC, q: "Vai trò dây dẫn:", a: { A: "Nối và dẫn điện", B: "Bảo vệ", C: "Đóng cắt", D: "Biến đổi năng lượng" }, c: "A" },
{ id: 25, category: QuizCategory.ELECTRIC, q: "Điện áp VN:", a: { A: "200V", B: "110V", C: "380V", D: "220V" }, c: "D" },

{ id: 26, category: QuizCategory.ELECTRIC, q: "Thứ tự sơ cứu:", a: { A: "2-3-4-1", B: "4-2-3-1", C: "2-4-3-1", D: "1-2-3-4" }, c: "C" },
{ id: 27, category: QuizCategory.ELECTRIC, q: "Phòng tránh điện mưa bão:", a: { A: "Không đứng gần cột điện", B: "Lại gần dây đứt", C: "Chơi khi ngập", D: "Đứng dưới cây" }, c: "A" },
{ id: 28, category: QuizCategory.ELECTRIC, q: "Cầu dao tự động:", a: { A: "Đóng mạch", B: "Tắt thiết bị", C: "Tăng dòng", D: "Ngắt khi quá tải" }, c: "D" },
{ id: 29, category: QuizCategory.ELECTRIC, q: "Truyền dẫn điện:", a: { A: "Biến đổi năng lượng", B: "Dẫn điện", C: "Tạo điện", D: "Đóng cắt" }, c: "B" },
{ id: 30, category: QuizCategory.ELECTRIC, q: "Dây điện đứt:", a: { A: "Nhặt", B: "Lại gần", C: "Tránh xa báo người lớn", D: "Chạm bằng gỗ" }, c: "C" },

{ id: 31, category: QuizCategory.ELECTRIC, q: "Cứu người điện giật:", a: { A: "Dùng tay kéo", B: "Hô hoán", C: "Kéo ngay", D: "Ngắt điện trước" }, c: "D" },
{ id: 32, category: QuizCategory.ELECTRIC, q: "Cảm biến ánh sáng:", a: { A: "Báo gas", B: "Tưới nước", C: "Chiếu sáng tự động", D: "Điều khiển nhiệt" }, c: "C" },
{ id: 33, category: QuizCategory.ELECTRIC, q: "Cầu chì:", a: { A: "Bảo vệ dây", B: "Bảo vệ cầu dao", C: "Bảo vệ mạch", D: "Bảo vệ công tơ" }, c: "C" },
{ id: 34, category: QuizCategory.ELECTRIC, q: "Quạt tự động:", a: { A: "Nhiệt độ", B: "Hồng ngoại", C: "Ánh sáng", D: "Độ ẩm" }, c: "A" },
{ id: 35, category: QuizCategory.ELECTRIC, q: "Thứ tự cứu điện:", a: { A: "4-3-1-2", B: "1-2-3-4", C: "3-2-4-1", D: "1-3-4-2" }, c: "C" },

{ id: 36, category: QuizCategory.MECHANICAL, q: "Thay phụ tùng đơn giản:", a: { A: "Thợ cơ khí", B: "Kĩ sư", C: "KTV", D: "Thợ lắp đặt" }, c: "A" },
{ id: 37, category: QuizCategory.ELECTRIC, q: "Tiếp xúc gián tiếp:", a: { A: "Chạm vỏ rò điện", B: "Gần cao áp", C: "Sét", D: "Chạm trực tiếp" }, c: "A" },
{ id: 38, category: QuizCategory.MECHANICAL, q: "Truyền xa:", a: { A: "Đai", B: "Bánh răng", C: "Xích", D: "A và B" }, c: "A" },
{ id: 39, category: QuizCategory.ELECTRIC, q: "Nguồn điện:", a: { A: "Theo điều khiển", B: "Điều khiển", C: "Mang tín hiệu", D: "Cung cấp năng lượng" }, c: "D" },
{ id: 40, category: QuizCategory.ELECTRIC, q: "Tách nạn nhân:", a: { A: "Gọi người", B: "Kéo tay trần", C: "Vải khô", D: "Ngắt điện + vải" }, c: "D" },

{ id: 41, category: QuizCategory.ELECTRIC, q: "Bút thử điện chạm:", a: { A: "Bóng đèn", B: "Đầu bút", C: "Dây điện", D: "Kẹp kim loại" }, c: "D" },
{ id: 42, category: QuizCategory.ELECTRIC, q: "Cơ năng:", a: { A: "Nồi cơm", B: "Bàn là", C: "Đèn", D: "Quạt" }, c: "D" },
{ id: 43, category: QuizCategory.ELECTRIC, q: "Sai an toàn điện:", a: { A: "Ngắt điện khi sửa", B: "Tay ướt cắm điện", C: "Thiết bị tốt", D: "Không tự sửa" }, c: "B" },
{ id: 44, category: QuizCategory.ELECTRIC, q: "Sau cứu điện:", a: { A: "Nằm thoáng, gọi y tế", B: "Cho uống nước", C: "Hô hấp", D: "Gọi người" }, c: "A" },
{ id: 45, category: QuizCategory.ELECTRIC, q: "Không an toàn:", a: { A: "Tránh cháy", B: "Ngắt điện", C: "Không dùng dây hỏng", D: "Cắm nhiều thiết bị" }, c: "D" },

{ id: 46, category: QuizCategory.ELECTRIC, q: "Vi phạm khoảng cách:", a: { A: "Tắt điện", B: "Chở cao gần dây", C: "Đứng xa", D: "Dùng đúng" }, c: "B" },
{ id: 47, category: QuizCategory.MECHANICAL, q: "Vai trò cơ khí:", a: { A: "Năng suất thấp", B: "Năng suất cao", C: "Trì trệ", D: "Phức tạp" }, c: "B" },
{ id: 48, category: QuizCategory.ELECTRIC, q: "Nguyên nhân tai nạn:", a: { A: "Gián tiếp", B: "Trực tiếp", C: "Khoảng cách cao áp", D: "Không rõ" }, c: "C" },
{ id: 49, category: QuizCategory.ELECTRIC, q: "Không gồm:", a: { A: "Điều khiển", B: "Truyền dẫn", C: "Nguồn", D: "Tải" }, c: "B" },
{ id: 50, category: QuizCategory.ELECTRIC, q: "Chức năng truyền dẫn:", a: { A: "Biến đổi", B: "Tạo điện", C: "Đóng cắt", D: "Dẫn điện" }, c: "D" }
];
