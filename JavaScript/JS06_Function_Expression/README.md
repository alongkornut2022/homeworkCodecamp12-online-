1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS function Expression Lab 1 - 3

Lab 1
ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Function Expression
ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 17 กับ 7

Lab 2
บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const showModal = alert;
showModal('Execute modal'); // \*

const showModal = alert();
showModal('Execute modal'); // \*\*

Lab 3
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function magic() {
return function (x) {
return x _ 42;
};
}
const answer = magic();
console.log(answer); // _
console.log(answer(1337)); // **
console.log(magic(1337)(42)); // \***
