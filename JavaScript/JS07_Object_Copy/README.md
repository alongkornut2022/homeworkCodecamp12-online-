1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Object copy Lab 1 - 2

LAB-1
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // \*
console.log(product2); // **
console.log(product1 === product2); // \***

Lab 2
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // \*
