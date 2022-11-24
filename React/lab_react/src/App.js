import { useState } from 'react';
import './App.css';

// *********************************************************
// Lab Handling Events
// *********************************************************

// Lab 1
// จงสร้าง tag <input>
// เมื่อผู้ใช้พิมพ์ค่าลงใน <input> ให้ console.log(ค่าที่ผู้ใช้พิมพ์)

// function App() {
//   return (
//     <>
//       <label>Input</label>
//       <input
//         type="text"
//         onChange={(event) => console.log(event.target.value)}
//       />
//       ;
//     </>
//   );
// }

//   Lab 2
// จงสร้าง tag <select> ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
// เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

// function App() {
//   return (
//     <select onChange={(event) => console.log(event.target.value)}>
//       <option value="Thailand">Thailand</option>
//       <option value="Laos">Laos</option>
//       <option value="Vietnam">Vietnam</option>
//       <option value="Cambodia">Cambodia</option>
//       <option value="Myanmar">Myanmar</option>
//     </select>
//   );
// }

// Lab 3
// จงสร้าง checkbox ขึ้นมา 3 อัน ให้แต่ละอันมี name คือ phoneBrand
// เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
// ค่า name ของ checkbox
// ค่า value ของ checkbox
// checkbox นั้นถูก tick หรือ untick

// function App() {
//   const handleChangeCheckBox = (event) => {
//     console.log(event.target.name);
//     console.log(event.target.value);
//     console.log(event.target.checked);
//   };
//   return (
//     <>
//       <label htmlFor="apple">Apple</label>
//       <input
//         type="checkbox"
//         id="apple"
//         name="apple"
//         value="apple"
//         onChange={handleChangeCheckBox}
//       />
//       <label htmlFor="samsung">Samsung</label>
//       <input
//         type="checkbox"
//         id="samsung"
//         name="sumsang"
//         value="sumsang"
//         onChange={handleChangeCheckBox}
//       />
//       <label htmlFor="oppo">OPPO</label>
//       <input
//         type="checkbox"
//         id="oppo"
//         name="oppo"
//         value="oppo"
//         onChange={handleChangeCheckBox}
//       />
//       <label htmlFor="vivo">Vivo</label>
//       <input
//         type="checkbox"
//         id="vivo"
//         name="vivo"
//         value="vivo"
//         onChange={handleChangeCheckBox}
//       />
//       <label htmlFor="sony">Sony</label>
//       <input
//         type="checkbox"
//         id="sony"
//         name="sony"
//         value="sony"
//         onChange={handleChangeCheckBox}
//       />
//     </>
//   );
// }

// Lab 4
// จงสร้างลิงค์ <a> มีข้อความว่า “Google”
// เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
// ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
// ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com

// function App() {
//   return (
//     <>
//       <a
//         href="https://google.com"
//         onClick={(event) => {
//           event.preventDefault();
//           const response = window.confirm('Leave for https://google.com?');
//           if (response) {
//             window.location.assign('https://google.com');
//           }
//         }}
//       >
//         google
//       </a>
//     </>
//   );
// }

// *********************************************************
// Lab State
// *********************************************************

// Lab 1
// จงสร้าง Button มีข้อความว่า “Click to hide me”
// เมื่อผู้ใช้ click button ให้ซ่อน button

// function App() {
//   return <button onClick={() => setToggle(!toggle)}>Click to hide me</button>;
// }

// Lab 2
// จงสร้าง Button มีข้อความว่า “Click to hide text”
// เมื่อผู้ใช้ click button ให้ซ่อน Text

// Lab 3
// จงสร้าง Button มีข้อความว่า “Hide”
// เมื่อผู้ใช้ click button ให้ซ่อนข้อความและเปลี่ยนข้อความบน Button เป็น “Show” เมื่อ click button อีกครั้งให้แสดงข้อความและเปลี่ยนข้อความบน Button เป็น Hide

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow((prev) => !prev)}>
//         {show === true ? 'Hide' : 'Show'}
//       </button>
//       {show === true ? <p>Lorem ipsum dolor sit</p> : null}
//     </>
//   );
// }

// Lab 4
// จงสร้าง UI ดังรูป
// เมื่อผู้ใช้พิมพ์เงินเป็น Dollar ให้ convert เป็นเงินบาท (สมมติ 1 usd = 30THB)

// function App() {
//   const [input, setInput] = useState('');

//   return (
//     <>
//       <label>Enter Dollar: </label>
//       <input value={input} onChange={(event) => setInput(event.target.value)} />
//       <p>Convert To Bath: {30 * input} Bath</p>
//     </>
//   );
// }

//Lab 5
// จงสร้าง Input และ Button ดังรูปเมื่อผู้ใช้กรอกเบอร์โทรและกด Check
// ถ้าผู้ใช้ไม่กรอกให้ขึ้นข้อความ Phone Number is required
// ถ้าผู้ใช้กรอกค่าที่ไม่ใช่ตัวเลขให้ขึ้นข้อความ Phone Number is invalid
// ถ้าผู้ใช้กรอกค่าที่มีความยาวไม่เท่ากับ 10 ให้ขึ้นข้อความ Invalid length
// ถ้ากรอกถูกต้องให้ Alert “Your number is valid”

// function App() {
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   return (
//     <>
//       <input
//         className={error === '' ? '' : 'error'}
//         value={phone}
//         onChange={(event) => setPhone(event.target.value)}
//       />
//       <button
//         onClick={() => {
//           if (phone === '') {
//             setError('Phone Number is required');
//           } else {
//             setError('');
//           }
//         }}
//       >
//         Check
//       </button>
//       {error === '' ? null : <p className="error">{error}</p>}
//     </>
//   );
// }

// Lab 6
// จงสร้าง Label และ Select ดังรูป
// เมื่อ click <select> ของ Province ให้แสดงรายชื่อจังหวัด
// เมื่อ click <select> ของ District ให้แสดงอำเภอของจังหวัดที่ถูกเลือก

// const provinces = ['BANGKOK', 'UDONTANI', 'NONGKAI'];
// const DistrictObject = {
//   BANGKOK: ['Pathuwan', 'Dusit', 'Bang Khen'],
//   UDONTANI: ['Mueang ', 'Kumphawapi', 'Ban Dung'],
//   NONGKAI: ['Phon Phisai', 'Si Chiang Mai', 'Tha Bo'],
// };

// function App() {
//   const [selectedProvince, setSelectedProvince] = useState('BANGKOK');

//   const optionProvinces = provinces.map((el) => (
//     <option value={el.toUpperCase()}>{el}</option>
//   ));

//   const optionDistricts = DistrictObject[selectedProvince].map((el) => (
//     <option value={el.toUpperCase()}>{el}</option>
//   ));

//   return (
//     <>
//       <div>
//         <label>Province: </label>
//         <select onChange={(event) => setSelectedProvince(event.target.value)}>
//           {optionProvinces}
//         </select>
//       </div>
//       <div>
//         <label>District: </label>
//         <select>{optionDistricts}</select>
//       </div>
//     </>
//   );
// }

// *********************************************************
// Lab List and Keys
// *********************************************************

// Lab 1
// ให้สร้างตัวแปร Array เก็บชื่อเพื่อน
// นำ Array ชื่อเพื่อนมา Render ใน list แล้วแสดงบนหน้า UI

// function App() {
//   const friend = ['a', 'b', 'c', 'd'];
//   const list = friend.map((item) => <li>{item}</li>);
//   return <ul>{list}</ul>;
// }

// Lab 2
// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

// function App() {
//   const post = [
//     { id: '1', message: 'hello world', day: '11-11-2002', user: 'a' },
//     { id: '2', message: 'say hi', day: '12-11-2002', user: 'b' },
//   ];
//   const list = post.map((item) => (
//     <li key={item.id}>
//       message: {item.message}, day: {item.day}, user: {item.user}
//     </li>
//   ));
//   return <ul>{list}</ul>;
// }

// Lab 3
// จงสร้างหน้า UI ดังรูป

// function App() {
//   const comment = [
//     { id: 1, message: 'Happy New Year', Author: 'John', day: '1/1/2022' },
//     { id: 2, message: 'Programing is fun', Author: 'Jack', day: '20/6/2022' },
//     { id: 3, message: 'Oh amazing !!!', Author: 'Joe', day: '23/7/2022' },
//   ];
//   return (
//     <div>
//       {comment.map((item, id) => (
//         <div style={{ border: '1px solid black' }} key={item.id}>
//           <h3>{item.message}</h3>
//           <span>
//             Author:
//             {item.Author}
//             {item.day}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

// *********************************************************

export default App;
