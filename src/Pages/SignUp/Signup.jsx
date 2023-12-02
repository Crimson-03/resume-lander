// import './Signup.scss'
// import{motion} from "framer-motion"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {FaUser, FaLock ,FaAddressBook,FaEnvelope} from "react-icons/fa"

const SignUp = ({ onLoginClick }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    onLoginClick();
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      email,
      password,
      role: selectedRole,
    };
    console.log("Signup successful:", user);
    // try {
    //   const response = await axios.post('/signup', user);
    //   console.log('Signup successful:', response.data);
    //   handleLoginClick();
    // } catch (error) {
    //   console.error('Signup failed:', error.message);
    // }
    navigate(`/main/${selectedRole}`);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  return (
    <div className="container py-2">
      <div className="row my-2 border rounded">
        <form className="py-3" onSubmit={handleSignupSubmit}>
          <h1 className="text-center">Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <FaEnvelope size={60}/> */}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <FaLock size={60}/> */}
          </div>
          <div className="mb-3">
            <label htmlFor="select" className="form-label">
              Choose Role
            </label>
            <select
              className="form-select"
              value={selectedRole}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="recruiter">Recruiter</option>
              <option value="seeker">Seeker</option>
            </select>
            {/* <FaAddressBook size={60}/> */}
          </div>

          <button
            className="btn btn-outline-primary"
            type="submit"
          >
            Sign Up
          </button>
          {/* <div className="separator">
            <span></span>
            <p>or</p>
            <span></span>
          </div> */}
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default SignUp;
