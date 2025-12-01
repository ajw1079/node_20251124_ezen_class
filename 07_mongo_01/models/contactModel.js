const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String, // 속성값의 유형
      required: true, // 필수 속성인지 여부
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "전화번호는 꼭 기입해 주세요."], // 필수 속성, 오류 메시지도 함께 지정
    },
  },
  {
    timestamps: true, // 데이터 베이스에 연락처 자료를 추가하거나 수정한 시간이 자동을 기록됨
  }
);

//스키마를 모델로 변환 : mongoose.model(모델명, 스키마명)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
