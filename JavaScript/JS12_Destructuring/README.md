1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Destructuring Lab 1-18

Lab 1
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // \*
console.log(second); // **
console.log(third); // \***

Lab 2
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
'Raindrops on roses',
'whiskers on kittens',
'Bright copper kettles',
'warm woolen mittens',
];
console.log(raindrops); // \*
console.log(whiskers); // **
console.log(aFewOfMyFavoriteThings); // \***

Lab 3
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // \*

Lab 4
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // \*
console.log(yearNeptuneDiscovered); // \*\*

Lab 5
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let planetFacts = {
numPlanets: 8,
yearNeptuneDiscovered: 1846,
yearMarsDiscovered: 1659
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // \*

Lab 6
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
function getUserData({ firstName, favoriteColor = 'green' }) {
return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // \*
getUserData({ firstName: 'Melissa' }); // **
getUserData({}); // \***

Lab 7
ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
let guest = 'Jane';
let admin = 'Pete';

Lab 8
จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

Lab 9
จงเขียน Object destructuring โดยกำหนดให้
ตัวแปร name เก็บค่า name property
ตัวแปร age เก็บค่า years property
ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น true
let user = {
name: 'John',
years: 27
};

Lab 10
จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
ถ้า salaries เป็น empty object ให้ return null
ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง
let salaries = {
John: 100,
Pete: 300,
Mary: 250
};

Lab 11
ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
let arr = [1, [2, [[[3, 4], 5], 6]]];

Lab 12
ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10
const obj = { prop: 5, prop2: 10 };

Lab 13
a และ b มีค่าเท่าไร
let a, b;
{ a, b } = {a: 1, b: 2};

Lab 14
a และ b มีค่าเท่าไร
const [, , , a, b] = [1, 2, 3];

Lab 15
ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100
const q = { prop: 5, prop2: [10, 100] };

Lab 16
ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b
const q = {
prop: 'Hello',
prop2: {
prop2: {
nested: ['a', 'b', 'c']
}
}
};

Lab 17
ให้ใช้ for … of กับ names (ให้ destructuring object ในแต่ละ iteration)
ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา
const names = [
{ firstName: 'John', lastName: 'Doe' },
{ firstName: 'Jack', lastName: 'Dann' },
{ firstName: 'Joe', lastName: 'Dunne' }
];

Lab 18
ให้ใช้ for … of กับ users (ให้ destructuring object ในแต่ละ iteration)
ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown
const users = [
{ user: "Name1" },
{ user: "Name2", age: 2 },
{ user: "Name2" },
{ user: "Name3", age: 4 }
];
