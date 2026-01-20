// import React from "react";
// import RightSideImg from "../../components/RightImg/RightSideImg";

// function Register() {
//   return (
//     <div>
//       <div>
//         <div>
//           <h1>Create an account</h1>
//           <p>its easy! just take a minute and provide the details</p>
//         </div>
//         <form>
//           <input placeholder="Email or Phone" />
//           <input placeholder="Full Name" />
//           <input placeholder="Create Password" />
//           <input placeholder="Confirm Password" />
//           <button>Signup</button>
//         </form>
//         <p>Already Have An Account? Login</p>
//       </div>
//       <div className="right-home-container">
//         <RightSideImg />
//       </div>
//     </div>
//   );
// }

// export default Register;

import React from "react";
import { Link } from "react-router-dom";
import RightSideImg from "../../components/RightImg/RightSideImg";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        {/* LEFT */}
        <div className="register-left">
          <h1>Create an account</h1>
          <p className="subtitle">
            its easy! just take a minute and provide the details
          </p>

          <form className="register-form">
            <input type="text" placeholder="Email or Phone" />
            <input type="text" placeholder="Full Name" />
            <input type="password" placeholder="Create Password" />
            <input type="password" placeholder="Confirm Password" />

            <button type="submit">Signup</button>
          </form>

          <p className="login-text">
            Already Have An Account? <Link to="/login">Login</Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="register-right">
          <RightSideImg />
        </div>
      </div>
    </div>
  );
}
