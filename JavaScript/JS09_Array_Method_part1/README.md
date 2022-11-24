1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Array Method (part 1 : create, clone, combine) Lab 1 - 3

Lab-1
ให้สร้างตัวแปร Array ที่เกิดจากการนำค่า element ใน a และ b มาต่อกัน
const a = [1, 5, 7, 11];
const b = [2, 3, 6];

Lab 2
จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

Lab 3
จงสร้างฟังก์ชัน first(arr, n) ให้ return ค่าตามเงื่อนไขต่อไป
n เป็น undefined หรือ 1 ให้ return element ตัวแรกของ arr
n มากกว่า 1 ให้ return ค่าเป็น array ที่มี element ของ arr n ตัวแรก
ตัวอย่างผลลัพธ์

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]
