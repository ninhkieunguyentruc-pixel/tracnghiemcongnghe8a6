import type { Question } from '../types';

export const questions: Question[] = [
  // Bài 1: Bản vẽ kĩ thuật
  {
    question: "Kích thước trên bản vẽ kĩ thuật có đơn vị là gì?",
    options: ["mm", "dm", "cm", "Tùy từng bản vẽ"],
    correctAnswer: 0,
  },
  {
    question: "Trước con số chỉ kích thước đường tròn, người ta ghi kí hiệu gì?",
    options: ["d", "R", "Ø", "O"],
    correctAnswer: 2,
  },
  {
    question: "Khổ giấy A4 có kích thước tính theo mm là:",
    options: ["420 × 210", "279 × 297", "420 × 297", "297 × 210"],
    correctAnswer: 3,
  },
  {
    question: "Đâu là tỉ lệ nguyên hình trong các tỉ lệ sau?",
    options: ["1 : 2", "5 : 1", "1 : 1", "5 : 2"],
    correctAnswer: 2,
  },
  {
    question: "Đường gióng và đường kích thước được biểu diễn:",
    options: ["song song", "vuông góc", "trùng nhau", "đáp án khác"],
    correctAnswer: 1,
  },
  {
    question: "Để vẽ đường tâm, đường trục đối xứng, cần dùng loại nét vẽ nào?",
    options: ["Nét liền đậm", "Nét liền mảnh", "Nét đứt mảnh", "Nét gạch dài - chấm - mảnh"],
    correctAnswer: 3,
  },
  {
    question: "x : 1 là kí hiệu của loại tỉ lệ nào? (x > 1)",
    options: ["Thu nhỏ", "Phóng to", "Nguyên hình", "Cả 3 đáp án trên"],
    correctAnswer: 1,
  },
  {
    question: "Phát biểu nào sau đây sai?",
    options: [
      "Nét liền mảnh biểu diễn đường gióng",
      "Nét liền đậm biểu diễn đường bao thấy",
      "Nét gạch dài chấm mảnh biểu diễn đường tâm",
      "Nét liền đậm biểu diễn đường trục đối xứng"
    ],
    correctAnswer: 3,
  },
  {
    question: "Phát biểu nào sau đây về đường kích thước là đúng?",
    options: [
      "Đường kích thước thẳng đứng, con số kích thước ghi bên phải",
      "Đường kích thước nằm ngang, con số kích thước ghi bên trên",
      "Đường kích thước nằm nghiêng, con số kích thước ghi bên dưới",
      "Ghi kí hiệu R trước con số chỉ kích thước đường kính đường tròn"
    ],
    correctAnswer: 1,
  },
  {
    question: "Nét liền mảnh thể hiện:",
    options: ["Đường kích thước, đường gióng", "Cạnh thấy, đường bao thấy", "Đường tâm, đường trục", "Cả 3 đáp án trên"],
    correctAnswer: 0,
  },
  {
    question: "Từ khổ giấy A1 ta chia được mấy khổ giấy A4?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 2,
  },
  // Bài 2: Hình chiếu
  {
    question: "Phép chiếu vuông góc là phép chiếu có các tia chiếu:",
    options: [
      "Song song với mặt phẳng cắt",
      "Song song với nhau",
      "Cùng đi qua một điểm",
      "Song song với nhau và vuông góc với mặt phẳng chiếu"
    ],
    correctAnswer: 3,
  },
  {
    question: "Mặt phẳng thẳng đứng ở chính diện gọi là:",
    options: ["Mặt phẳng hình chiếu đứng", "Mặt phẳng hình chiếu bằng", "Mặt phẳng hình chiếu cạnh", "Mặt phẳng hình chiếu"],
    correctAnswer: 0,
  },
  {
    question: "Có mấy loại phép chiếu?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
  },
  {
    question: "Điểm A của vật thể có hình chiếu là điểm A’ trên mặt phẳng. Vậy A A’ gọi là:",
    options: ["Đường thẳng chiếu", "Tia chiếu", "Đường chiếu", "Đoạn chiếu"],
    correctAnswer: 1,
  },
  {
    question: "Khi chiếu một vật thể lên một mặt phẳng, hình nhận được trên mặt phẳng đó gọi là:",
    options: ["hình chiếu", "vật chiếu", "mặt phẳng chiếu", "vật thể"],
    correctAnswer: 0,
  },
  {
    question: "Để thể hiện đầy đủ khối đa diện, người ta thường dùng mấy hình chiếu?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
  },
  {
    question: "Bản vẽ kĩ thuật sử dụng phép chiếu nào để biểu diễn vật thể?",
    options: ["Phép chiếu song song", "Phép chiếu xuyên tâm", "Phép chiếu vuông góc", "Cả ba đáp án trên"],
    correctAnswer: 2,
  },
  {
    question: "Để nhận được hình chiếu đứng, cần chiếu vuông góc vật thể theo hướng chiếu nào?",
    options: ["từ trước vào", "từ trên xuống dưới", "từ trái sang phải", "từ phải sang trái"],
    correctAnswer: 0,
  },
  {
    question: "Vị trí các hình chiếu trên bản vẽ được biểu diễn là:",
    options: [
      "Hình chiếu bằng ở dưới hình chiếu đứng, hình chiếu cạnh ở bên phải hình chiếu đứng",
      "Hình chiếu bằng ở trên hình chiếu đứng, hình chiếu cạnh ở bên trái hình chiếu đứng",
      "Hình chiếu cạnh ở bên phải hình chiếu đứng, hình chiếu bằng ở bên trái hình chiếu đứng",
      "Hình chiếu đứng ở dưới hình chiếu bằng, hình chiếu cạnh ở bên phải hình chiếu bằng"
    ],
    correctAnswer: 0,
  },
  {
    question: "Khối đa diện được bao bởi:",
    options: ["Các hình chữ nhật", "Các hình tam giác cân", "Các hình trụ", "Các hình đa giác phẳng"],
    correctAnswer: 3,
  },
  {
    question: "Hình chiếu bằng của hình lăng trụ tam giác đều là hình gì?",
    options: ["Hình tam giác đều", "Hình tam giác cân", "Hình chữ nhật", "Hình vuông"],
    correctAnswer: 0,
  },
  // Bài 3: Bản vẽ chi tiết và bản vẽ lắp
  {
    question: "Phần khung tên của bản vẽ chi tiết gồm những thông tin gì?",
    options: ["Tên gọi", "Vật liệu chế tạo", "Tỉ lệ", "Cả ba đáp án trên"],
    correctAnswer: 3,
  },
  {
    question: "Người công nhân căn cứ vào đâu để chế tạo chi tiết máy đúng như yêu cầu của người thiết kế?",
    options: ["Bản vẽ chi tiết", "Bản vẽ lắp", "Bản vẽ nhà", "Cả ba đáp án trên"],
    correctAnswer: 0,
  },
  {
    question: "Công dụng của bản vẽ chi tiết là:",
    options: ["Dùng để chế tạo chi tiết máy", "Dùng để kiểm tra chi tiết máy", "Dùng để chế tạo và kiểm tra chi tiết máy", "Đáp án khác"],
    correctAnswer: 2,
  },
  {
    question: "Nội dung phần yêu cầu kĩ thuật của bản vẽ chi tiết gồm:",
    options: ["Chỉ dẫn về gia công", "Chỉ dẫn về xử lí bề mặt", "Cả A và B đều đúng", "Cả A và B đều sai"],
    correctAnswer: 2,
  },
  {
    question: "Trình tự đọc bản vẽ chi tiết là:",
    options: [
      "Khung tên, hình biểu diễn, kích thước, yêu cầu kĩ thuật",
      "Khung tên, kích thước, hình biểu diễn, yêu cầu kĩ thuật",
      "Hình biểu diễn, khung tên, kích thước, yêu cầu kĩ thuật",
      "Hình biểu diễn, kích thước, khung tên, yêu cầu kĩ thuật"
    ],
    correctAnswer: 0,
  },
  {
    question: "Bản vẽ chi tiết thuộc lĩnh vực nào?",
    options: ["Bản vẽ cơ khí", "Bản vẽ xây dựng", "Bản vẽ lắp", "Bản vẽ nhà"],
    correctAnswer: 0,
  },
  {
    question: "Phần nào trong bản vẽ thể hiện đầy đủ hình dạng của chi tiết?",
    options: ["Khung tên", "Hình biểu diễn", "Kích thước", "Yêu cầu kĩ thuật"],
    correctAnswer: 1,
  },
  {
    question: "Chọn phát biểu đúng:",
    options: [
      "Bản vẽ chi tiết gồm hình biểu diễn, kích thước, yêu cầu kĩ thuật",
      "Bản vẽ chi tiết chỉ dùng để chế tạo chi tiết",
      "Đọc bản vẽ chi tiết cần phải nhận biết chính xác, đầy đủ nội dung và tuân theo trình tự nhất định",
      "Trình tự đọc bản vẽ chi tiết là: hình biểu diễn, kích thước, yêu cầu kĩ thuật, khung tên"
    ],
    correctAnswer: 2,
  },
  {
    question: "Đâu là nội dung của bản vẽ lắp?",
    options: [
      "Khung tên, bảng kê, hình biểu diễn, kích thước",
      "Khung tên, hình biểu diễn, kích thước, yêu cầu kĩ thuật",
      "Khung tên, các hình biểu diễn, kích thước",
      "Khung tên, bảng kê, hình biểu diễn, kích thước, yêu cầu kĩ thuật"
    ],
    correctAnswer: 0,
  },
  {
    question: "Phần tổng hợp trong trình tự đọc bản vẽ lắp gồm những nội dung nào?",
    options: ["Tên sản phẩm, tỉ lệ bản vẽ, nơi thiết kế", "Các hình chiếu, hình cắt", "Trình tự tháo, lắp chi tiết và công dụng", "Tên gọi các chi tiết, số lượng, vật liệu"],
    correctAnswer: 2,
  },
  {
    question: "Bản vẽ lắp không có nội dung nào so với bản vẽ chi tiết?",
    options: ["Hình biểu diễn", "Yêu cầu kĩ thuật", "Kích thước", "Khung tên"],
    correctAnswer: 1,
  },
  {
    question: "So với bản vẽ chi tiết, bản vẽ lắp có thêm nội dung nào dưới đây?",
    options: ["Yêu cầu kĩ thuật", "Bảng kê", "Kích thước", "Khung tên"],
    correctAnswer: 1,
  },
  {
    question: "Trình tự đọc bản vẽ lắp là gì?",
    options: [
      "Hình biểu diễn → Khung tên → Bảng kê → Kích thước → Phân tích chi tiết → Tổng hợp",
      "Khung tên → Bảng kê → Kích thước → Hình biểu diễn → Phân tích chi tiết → Tổng hợp",
      "Khung tên → Bảng kê → Hình biểu diễn → Kích thước → Phân tích chi tiết → Tổng hợp",
      "Khung tên → Kích thước → Bảng kê → Hình biểu diễn → Phân tích chi tiết → Tổng hợp"
    ],
    correctAnswer: 2,
  },
];
