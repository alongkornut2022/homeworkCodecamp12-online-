1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Loop Object Lab 1 - 5

Lab-1
ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

Lab-2
ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0
let salaries = {
John: 100,
Ann: 160,
Pete: 130
};

Lab-3
ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
คูณเฉพาะ value ที่เป็น number เท่านั้น
let menu = {
width: 200,
height: 300,
title: 'My menu'
};

menu = {
width: 600,
height: 900,
title: 'My menu'
};

Lab-4
ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

Lab 5
ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

Lab-6
ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

Lab-7
ให้รับข้อมูลเป็นชื่อพนักงาน
หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found
const employees = {
john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};
