1. หลักสูตร CodeCamp12 online
2. ผู้เรียน อลงกรณ์ อุทรพันธุ์ (แดน) เลขที่ 20
3. JS Object clone Lab 1 - 3

LAB-1
ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign
const notebook = {
brand: 'ASUS',
model: 'Vivobook D413IA-EB303TS',
processor: 'AMD Ryzen 7 4700U 3.6GHz',
graphics: 'Integrated Graphics : AMD Radeon Graphics',
ram: '8GB DDR4 Onboard',
storage: '512GB PCIe NVMe M.2 SSD'
};

Lab-2
ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true
const state1 = { username: 'john', point: 100, loading: true };

Lab-3
ให้ merge Object ทั้ง 4 เข้าด้วยกัน แล้วเก็บไว้ในตัวแปรชื่อ permission
หาก key ซ้ำกันให้ใช้ค่าของตัวแปรที่มีตัวเลขสูงกว่า
const permission1 = { canView: false, canDelete: false };
const permission2 = { canUpdate: true, canCreate: true };
const permission3 = { canCreate: false, canDelete: true };
const permission4 = { canView: true };
