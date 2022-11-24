1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Object Property Lab 1 - 4

Lab 1
บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร
const user = {
email: 'cc@gmail.com',
isActive: true
};

user.isActive = false;
console.log(user); // \*
user = {};
console.log(user); // \*\*

Lab-2
ให้สร้าง object ชื่อ user
เพิ่ม property ชื่อ name ให้มีค่าเท่ากับ John
เพิ่ม property ชื่อ surname ให้มีค่าเท่ากับ Doe
Update property name ให้มีค่าเป็น Matt
ลบ property name

Lab-3
ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

Lab 4
ให้เขียนโค้ดเพื่อ log province  
ของ product1
หากมี product2 เป็น object
ว่าง ให้ log province ของ
product2 โดยใช้คำสั่งเดียวกับ
product1
(หาก Error ให้หาวิธีแก้)

const product1 = {
name: 'Water',
distributor: {
name: 'Giraffe Water Company',
address: {
street: 'Phetchaburi',
subdistrict: 'Thanonphetchaburi',
district: 'Ratchathewi',
province: 'Bangkok'
}
}
};
