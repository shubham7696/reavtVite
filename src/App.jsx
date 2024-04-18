import { useState, } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
    cnfPassword: "",
  });  

  const [error, setError] = useState({
    firstName: "",
    email: "",
  }); 

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value 
    })
  }

  const validateAndInsert = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "Name is required";
    }
    if (!formData.email.trim()){
      validationErrors.email = "Email is required";
    }

    setError(validationErrors)

    if(Object.keys(validationErrors).length === 0){
        alert("Form Submitted Successfully")
    }
  }

  return (
    <body>
      <div className="container">
        <div className="form-container">
          <form id="myForm">
            <h2>Registration Form</h2>
            <input type="text" hidden className="editId" />
            <div className="multi-input-name">
              <div className="input-name-left">
                <div>
                  <i className="fa fa-user user"></i>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    className="name"
                  />
                </div>
                {
                  error.firstName && 
                  <p id="firstNameError" className="error-message">{error.firstName}</p>
                }
              </div>
              <div className="input-name-right">
                <div>
                  <i className="fa fa-user user"></i>
                  <input type="text" id="lastName" placeholder="Last Name" className="name" />
                </div>
                <p id="lastNameError" className="error-message"></p>
              </div>
            </div>
            <div className="input-name">
              <i className="fa fa-envelope email"></i>
              <input type="text" id="email" placeholder="Email" className="text-email" />
              {
                error.firstName && 
                <p className="error-message">{error.email}</p>
              }
            </div>
            <div className="input-name">
              <i className="fa fa-phone lock"></i>
              <input type="number" id="phone" placeholder="Phone" className="text-phone" />
              <p className="error-message"></p>
            </div>
            <div className="input-name">
              <i className="fa fa-lock lock"></i>
              <input type="text" id="password" placeholder="Password" className="text-password" />
              <p className="error-message"></p>
            </div>
            <div className="input-name">
              <input id="male" type="radio" name="gender" className="radio-button" value="M" />
              Male
              <input id="female" type="radio" name="gender" className="radio-button" value="F" />
              Female
            </div>
            <div className="input-name">
              <select id="country" className="country">
                <option>Select a country</option>
                <option value="india">India</option>
                <option value="italy">italy</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
              </select>
              <div className="dropdown-arrow"></div>
              <div className="country-error-container">
                <p className="error-message"></p>
              </div>
            </div>
            <div className="input-name">
              <input type="checkbox" id="terms" className="check-button" />
              <label htmlFor="terms" className="check">
                Accept terms & Conditions
              </label>
            </div>
            <div className="input-name">
              <input
                type="submit"
                className="button"
                onClick={validateAndInsert(event)}
                value="Register"
              />
            </div>
            <div className="input-name">
              <input type="submit" className="updateBtn" onClick="update(event)" value="Update" />
            </div>
          </form>
        </div>
        <div className="table-container">
          <h2>Registration Data</h2>
          <table className="table">
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Country</th>
              <th>Actions</th>
            </thead>
            <tbody className="table_data"></tbody>
          </table>
        </div>
      </div>
    </body>
  );
}

export default App;
