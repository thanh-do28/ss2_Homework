// câu 1
// let a = Number(prompt('nhập số a'));
// let b = Number(prompt('nhập số b'));
// let c = a % b;
// if (c == 0) {
//     alert('a chia hết cho b');
// } else {
//     alert('a không chia hết cho b');
// }


// câu 2
// let a = Number(prompt('nhập số tuổi của bạn'));
// if (a <= 15) {
//     alert('bạn chưa đủ tuổi vào lớp 10');
// } else {
//     alert('bạn đã đủ tuổi vào lớp 10');
// }


// câu 3
// let a = Number(prompt('nhập số nguyên a'));
// if (a <= 0) {
//     alert('a nhỏ hơn 0');
// } else {
//     alert('a lớn hơn 0');
// }


// câu 4
// let a = Number(prompt('nhập số nguyên a'));
// let b = Number(prompt('nhập số nguyên b'));
// let c = Number(prompt('nhập số nguyên c'));
// if (a > b && a > c) {
//     alert('a lớn nhất');
// } else if (b > a && b > c) {
//     alert('b lớn nhất');
// } else {
//     alert('c lớn nhất')
// }


// câu 5
// let a = Number(prompt('nhập điểm thi giữa kì'));
// let b = Number(prompt('nhập điểm thi cuối kì'));
// let c = (a + b)/2;
// if (c >= 9) {
//     alert('bạn là học sinh giỏi');
// } else if (c >= 7) {
//     alert('bạn là học sinh khá');
// } else if (c >= 5) {
//     alert('bạn là học sinh trung bình');
// } else {
//     alert('bạn là học sinh yếu');
// }


// // câu 6
// let a = Number(prompt('nhập doanh số bán hàng của bạn (k) '));
// // 1 sản phẩm 100k
// // từ 0 đến 200 hưởng 10%
// // từ 200 đến 400 hưởng 20%
// // từ 400 đến 600 hưởng 30%
// // từ 600 đến 800 hương 40%
// let tienban = a * 100
// if (a > 0 && a <= 200) {
//     let b = (tienban /100) * 10;
//     alert('tiền hoa hồng của bạn là : ' + b+'k');
// } else if (a > 200 && a <= 400) {
//     let c = (tienban/100) * 20;
//     alert('tiền hoa hồng của bạn là : ' + c+'k');
// } else if (a > 400 && a <= 600) {
//     let d = (tienban/100) * 30;
//     alert('tiền hoa hồng của bjan là : ' + d+'k');
// } else if (a > 600 && a <= 800) {
//     let e = (tienban/100) * 40;
//     alert('tiền hoa hồng của bạn là : ' + e+'k');
// } else {
//     alert('cả công ty là của bạn');
// }

// câu 7
// let a = Number(prompt('nhập số cân nặng của bạn (kg)'));
// let b = Number(prompt('nhập chiều cao của bạn (cm)'));
// let c = b/100;
// let BMI = a / (b**2);
// if (BMI < 18) {
//     alert('bạn thiếu cân');
// } else if (BMI < 25) {
//     alert('bạn bình thường');
// } else if (BMI < 30) {
//     alert('bạn thừa cân');
// }else {
//     alert('bạn béo quá rồi giảm cân đi');
// }