// console.log('Hello!');
//Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
// let n = "025468";
let a = prompt('moi ban nhap so');
let n = `${a} `.trim(); //.trim: cat chuoi 2 dau;//chac chan ra chuoi
let resulf = ``;
for (let i = 0; i < n.length; i++);
{
  let num = n[i];
  let nunNext = n[i + 1];
  let message = ' ';
  if (num % 2 == 0 && numNext % 2 == 0) {
    message = `${num}-`;
  } else {
    message = `${num}`;
  }
  resulf += message;
}
resulf += n[n.length - 1];
document.write(`ket qua la ${resulf}`);
