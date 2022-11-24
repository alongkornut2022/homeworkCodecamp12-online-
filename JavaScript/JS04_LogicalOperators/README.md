1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Logical Operator Lab 1 - 3

Lab 1
คำสั่ง alert ในแต่ละบรรทัดจะแสดงค่าเป็นอะไรบ้าง
alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || (2 && 3) || 4);

Lab 2
โค้ดด้านล่าง มีคำสั่ง alert อันไหนบ้างที่จะทำงาน
if (-1 || 0) alert('first');
if (-1 && 0) alert('second');
if (null || -1 && 1) alert('third');

Lab 3
ให้ใช้คำสั่ง prompt ถามชื่อผู้ใช้ และให้รับค่าเก็บไว้ในตัวแปรชื่อ user
ถ้าผู้ใช้กรอก input เป็น string ว่าง หรือกด Esc ให้กำหนด default value ของตัวแปร user เป็น guest
ถ้าผู้ใช้กรอกชื่อผู้ใช้ว่า “codecamp” ให้ใช้คำสั่ง prompt เพื่อถาม password
ถ้าผู้ใช้กรอก password เป็น “123456” ให้ตัวแปร user มีค่าเท่ากับ codecamp
ถ้าผู้ใช้กรอก password ไม่ใช่ “123456” ให้ alert “Wrong password”
ถ้าผู้ใช้กรอกชื่อผู้ใช้อย่างอื่นที่ไม่ใช่ “codecamp” ให้ user มีค่าเป็น guest”
ให้ใช้คำสั่ง alert เพื่อแสดงข้อความ “Welcome” ตามด้วยค่าในตัวแปร user
