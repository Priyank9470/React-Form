// import React, { useState } from "react";
// import Popup from 'react-popup'

// function Form() {
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setlastName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Popup.alert(`Hello ${firstName} ${lastName}`);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>This is basic form</h1>
//       <div>
//         <label>First Name: </label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setfirstName(e.target.value)}
//         />
//       </div>
//       <br />
//       <div>
//         <label>Last Name: </label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setlastName(e.target.value)}
//         />
//       </div>
//       <button>Submit</button>
//     </form>
//   );
// }

// export default Form;