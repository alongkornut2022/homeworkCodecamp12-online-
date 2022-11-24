1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Variable Scope Lab 1 -

Lab 1
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let name = 'John';
function sayHi() {
alert('Hi, ' + name);
}
name = 'Pete';
sayHi(); // \*

Lab 2
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
function makeWorker() {
let name = 'Pete';
return function () {
alert(name);
};
}
let name = 'John';
let work = makeWorker();
work(); // \*

Lab 3
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let phrase = 'Hello';
if (true) {
let user = 'John';
function sayHi() {
alert(`${phrase}, ${user}`);
}
}
sayHi(); // \*

Lab 4
ผลลัพธ์ในบรรทัดที่มี \* มีค่าเป็นอะไรและเพราะอะไร
let x = 1;
function func() {
console.log(x); // \*
let x = 2;
}
func();
