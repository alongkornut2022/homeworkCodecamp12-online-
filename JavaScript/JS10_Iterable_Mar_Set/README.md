1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Iterable,Map,Set Lab 1 - 2

Lab 1
จงสร้าง Map เก็บไว้ในตัวแปรชื่อ map
เพิ่ม key ชื่อ name และ age มี value เท่ากับ Thomas และ 31 ตามลำดับ
แก้ไข value ใน key ชื่อ name ให้มีค่าเท่ากับ Dan
ลบ key ชื่อ age
ตรวจสอบว่าใน map มี key ชื่อ birthDate หรือไม่
หาจำนวนของ key-value ใน map
ลบข้อมูลทั้งหมดใน map

Lab 2
จงสร้าง Map จาก arr โดยให้ key ชื่อ email มี value เท่ากับ codeisfun@example.com และ key ชื่อ isActive มี value เท่ากับ true
const arr = [
['email', 'codeisfun@example.com'],
['isActive', true]
];

Lab 3
จงสร้าง Set เก็บไว้ในตัวแปรชื่อ set
เพิ่ม value เข้าไปใน set ตามลำดับดังนี้ Thailand, Japan, Thailand, China, India, Thailand, China, Singapore, Japan
ลบ india ออกจาก set
หาจำนวนของข้อมูลใน set
สร้างตัวแปร array โดยมี element เป็นข้อมูลใน set ทั้งหมด

Lab 4
จงสร้าง Set โดยมี value มาจาก element ใน arr
const arr = ['Dog', 'Giraffe', 'Bear'];

Lab 5
จงเขียนฟังก์ชัน unique(arr) ให้คืนค่าเป็น array ที่มี element ไม่ซ้ำกัน โดยใช้ Set
const values = [1, 4, 8, 2, 1, 3, 3, 8];
console.log(unique(values)); // [1, 4, 8, 2, 3]
