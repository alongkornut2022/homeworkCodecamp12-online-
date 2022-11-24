1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Array Method (part 5 :reducer) Lab 1 - 11

Lab 1
จงหาผลคูณของ element ใน nums
const nums = [-3, 2, 11, -7, 4, 6];

Lab 2
จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

Lab 3
จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก
const scores = [
{ score: 90, subject: 'HTML', weight: 0.2 },
{ score: 95, subject: 'CSS', weight: 0.3 },
{ score: 85, subject: 'JavaScript', weight: 0.5 }
];
// expected result: 89

Lab 4
จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด
let flattened = [
[0, 1],
[2, 3],
[4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]

Lab 5
จงหาค่ามากสุดและน้อยสุดใน arr
let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

Lab 6
จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str
let str = '31 45 12 67 34 86 23 37 19 41';

Lab-7
จงนับชื่อที่ปรากฏใน names
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

Lab-8
จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str
let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

Lab-9
จงหา unique array element ของ alphabets
let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

Lab-10
จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name
const products = [
{ id: 1, name: 'Crystal' },
{ id: 4, name: 'Namthip' },
{ id: 5, name: 'Nestle' }
];
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };

Lab 11
จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน
const persons = [
{ name: 'John', sex: 'M' },
{ name: 'Jody', sex: 'M' },
{ name: 'Susan', sex: 'F' },
{ name: 'Kate', sex: 'F' },
{ name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
