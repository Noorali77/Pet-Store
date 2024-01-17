import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseInstance, { db } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";

import "../login/login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: "",
};
function ForgetPassword() {
  const [formValue, setFormValue] = useState(initialState);
  const history = useHistory();
  const onHandleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (formValue.email.length === 0) {
      toast.error("Email is Required");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formValue.email)) {
      toast.error("Please provide a valid email.");
      return;
    }
    sendPasswordResetEmail(auth, formValue.email)
      .then(() => {
        // Password reset email sent successfully
        toast.success("Password reset email sent");

        setTimeout(() => {
          history.push("/login");
        }, 2000);
      })
      .catch((error) => {
        // Handle errors, such as invalid email or user not found
        console.error("Error sending password reset email", error);
      })
      .catch((err) => {
        toast.error("Sorry! Something went wrong");
        return;
      });
  };
  return (
    <div className="Auth-form-container">
      <ToastContainer />

      <form onSubmit={onFormSubmit} className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forget Password</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              onChange={onHandleChange}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
