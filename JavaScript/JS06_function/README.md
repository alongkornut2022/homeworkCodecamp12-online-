1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS function Lab 1 - 14

Lab 1
ให้สร้างฟังก์ชันชื่อ sayHelloWorld
เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello World”

Lab 2
ให้ใช้คำสั่ง prompt เพื่อรับชื่อผู้ใช้งาน
ให้สร้างฟังก์ชันชื่อ sayHelloUser
เมื่อเรียกใช้ฟังก์ชันให้ alert คำว่า “Hello ” ตามด้วยชื่อผู้ใช้งาน

Lab 3
บรรทัด \*, **, \*** และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let message = 'Welcome to Thailand';
function logMessage(message) {
message = 'Hello everybody';
console.log(message); // \*
}
logMessage(message);
console.log(message); // \*\*

let name = 'John';
function sayHi(input) {
console.log(name); // **\*  
 name = input;  
}
sayHi();
console.log(name); // \*\***

Lab 4
บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function sayHi(name) {
let name = 'Guest';
console.log(name); // \*
}
sayHi('Jim');

Lab 5
บรรทัด \*, **, \*** และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const sender = 'Matt';
function sendTo(from, to) {
console.log(`From ${from} to ${to}`);
}
sendTo(sender, 'Sarah'); // \*
sendTo(null); // \*\*

const sender = 'Matt';

function sendTo(to, from = 'CC') {
console.log(`From ${from} to ${to}`);
}
sendTo('Max'); // **\*
sendTo('Ben', 'Jay'); // \*\***

Lab 6
ให้สร้างฟังก์ชันมีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นผลคูณของพารามิเตอร์ทั้งสอง

Lab 7
ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

Lab 8
ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

Lab 9
ให้สร้างฟังก์ชันเช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

Lab 10
บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function squareNum(num) {
const result = num _ num;
}
console.log(squareNum(2)); // _

Lab 11
บรรทัดที่มี \*, **, \*** และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function sayHi(age) {
if (age < 12) alert('Hi kid');
}
console.log(sayHi); // \*
console.log(sayHi(10)); // \*\*

function sayHi(name) {
if (name) {
alert('Hi ' + name);
return;
} else {
return 'Who are you';
}
}
console.log(sayHi('John')); // **\*
console.log(sayHi()); // \*\***

Lab 12
บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
function getLongText() {
return
'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
}

console.log(getLongText()); // \*

Lab 13
ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
ใช้ if แต่ห้ามใช้ else
ใช้ ? แทน if
ใช้ || แทน if

function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Did parents allow you?');
}
}

Lab 14
ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
พารามิเตอร์มีได้มากสุด 4 ตัว
หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

max(); // undefined
max(2); // 2
max(3, 1); // 3
max(7, 3, 9, 2); // 9
