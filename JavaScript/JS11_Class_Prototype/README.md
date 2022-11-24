1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Class Lab 1-2 and Prototype Lab 1-2

Class
Lab 1
ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
value คือค่าตัวเลขปัจจุบัน (เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
sum() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
subtract() ให้รับค่าตัวเลขและหักออกจาก value
multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
divide() ให้รับค่าตัวเลขและนำไปหาร value
show() ให้ alert ค่า value

Lab 2
ให้สร้าง Class Sale มี property ชื่อ name และมี method calcPrice() เพื่อคำนวณราคาสุทธิหลังหักส่วนลด
ให้สร้าง Class Beverage มี property ชื่อ amount, price และ discount
ให้ Beverage สืบทอดมาจาก Sale
ให้สร้าง object ชื่อ beverage จาก Class Beverage โดยมี name, amount, price และ discount เท่ากับ Pepsi, 3, 19 และ 10% ตามลำดับ
ให้ beverage เรียก method calcPrice()

Prototype

Lab 1
ให้เพิ่ม Method max และ sum เข้าไปใน Prototype ของ Array โดย
max ให้ return ค่ามากสุดของตัวเลขใน Array
sum ให้ return ผลรวมของตัวเลขใน Array

Lab 2
ให้เพิ่ม Method defer เข้าไปใน Prototype ของ Function โดยให้ได้ผลลัพธ์ตามด้านล่าง (Hint: setTimeout)
function f() {
alert('Hello!');
}
f.defer(1000); // shows "Hello!" after 1 second
