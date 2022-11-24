1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Condition Lab 1 - 13

Lab 1
โค้ดด้านล่างจะ alert คำว่าอะไร
if (0) {
alert('Zero');
} else {
alert('Nooo');
}

Lab 2
โค้ดด้านล่างทำงานได้หรือไม่ ถ้าทำได้จะ alert คำว่าอะไร
if (' ') alert('Yes');
else alert('Nooo');

Lab 3
จงเขียนโค้ดเพื่อรับ input เข้ามา โดยให้ถามว่า “Guest my name”
หาก input ที่รับเข้ามาตรงกับชื่อตัวเองให้โชว์ข้อความว่าถูกต้อง
หาก input ที่รับเข้ามาไม่ตรงกับชื่อตัวเองให้โชว์ข้อความว่าผิด

Lab 4
จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
ถ้า input มากกว่า 0 ให้โชว์ข้อความ “Positive number”
ถ้า input เท่ากับ 0 ให้โชว์ข้อความ “Zero”
ถ้า input น้อยกว่า 0 ให้โชว์ข้อความ “Negative number”
ถ้า input ที่รับเข้ามาไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

Lab 5
จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”

Lab 6
จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”

Lab 7
จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”

Lab 8
จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรด
ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
ถ้าคะแนน น้อยกว่า 50 ได้ F

Lab 9 : Sort Number
เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย
เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

Lab 10
เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators
let age = prompt('How old are you');
let message;
if (age >= 18) {
message = 'Allowed';
} else {
message = 'Not allowed';
}

Lab 11
เปลี่ยน if-else ข้างล่างให้อยู่ในรูปของ Ternary Operators
let login = prompt('Enter username');
let message;
if (login == 'Employee') {
message = 'Hello';
} else if (login == 'Director') {
message = 'Greetings';
} else if (login == '') {
message = 'No login';
} else {
message = '';
}

Lab 12
จาก Lab 8 ให้เขียนโค้ดในรูปแบบ Ternary Operators

Lab 13
โค้ดด้านล่างทำงานได้หรือไม่
let company = prompt('Which company created JavaScript?');
company == 'Netscape' ? alert('Right!') : alert('Wrong.');
