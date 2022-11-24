1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS this Lab 1 - 3

Lab-1
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
let user = {
name: 'John',
sayHi: function () {
console.log(this.name);
}
};

(user.sayHi)(); // \*

Lab-2
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
var name = 'Joe';
function makeUser() {
return {
name: 'John',
ref: this
};
}
let user = makeUser();
console.log(user.ref.name); // \*

Lab-3
ให้สร้าง Object calculator ซึ่งมี 3 method
read() ให้รับค่า input 2 ค่า
sum() ให้ return ค่าผลบวกของเลขทั้งสอง
mul() ให้ return ค่าผลคูณของเลขทั้งสอง

let calculator = {
// ... your code ...
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
