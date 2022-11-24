1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Arrow function Lab 1 - 12

Lab 1
ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Arrow Function
ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 23 กับ 9

Lab 2
ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function

Lab 3
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const square = n => {
n \*_ 2;
};
console.log(square(7)); // _

const calcCircleArea = r => Math.PI \* r ** 2;
console.log(calcCircleArea(3)); // **

Lab 4
โค้ดทั้งสองชุดด้านล่างทำงานได้เหมือนกันหรือไม่
const logName = (name) => console.log(name);
const logName = name => console.log(name);

Lab 5
ให้เขียนฟังก์ชันด้านล่างให้อยู่ในรูปแบบ Arrow Function
function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
ask('Do you agree?',
function () { alert('You agreed.'); },
function () { alert('You canceled the execution.'); }
);

Lab 6
ให้เขียนฟังก์ชัน Convert day to second

Lab 7
ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

Lab 8
ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน

Lab 9
ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year
leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

Lab 10
ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)
ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020

Lab 11
ให้เขียนฟังก์ชันแปลงอุณหภูมิจาก farenheit เป็น celsius

Lab 12
ให้เขียนฟังก์ชันคำนวณค่า factorial
