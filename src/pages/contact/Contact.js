import React, { useState } from "react";
import { FooterSection } from "../../components";
import "./contact.scss";
const Contact = () => {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.message === "") setError(true);
  };
  return (
    <>
      <div className="content">
        <main>
          <header className="contact__header">
            <h1 className="contact__h1">Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </header>

          <form className="contact__form__wrapper" onSubmit={handleSubmit}>
            <div className="contact__form__name">
              <div className="wrapper">
                <label for="first__name">First name</label>
                <input
                  type="text"
                  name="firstName"
                  id="first_name"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="wrapper">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  id="last_name"
                  placeholder="Enter your last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className=" wrapper">
              <label for="email">Last name</label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" wrapper">
              <label for="message">Message </label>

              <textarea
                name="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                className={error ? "error" : "normal"}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                  setError(false);
                }}
              />

              {error && (
                <span className="error__text">Please enter a message</span>
              )}
            </div>
            <div className="contact__form__terms ">
              <input type="checkbox" name="terms" id="" required />
              <span className="terms">
                You agree to providing your data to Taofeek who may contact you.
              </span>
            </div>
            <div className="contact__form__button">
              <button id="btn_submit">Submit</button>
            </div>
          </form>
        </main>
      </div>
      <FooterSection />
    </>
  );
};

export default Contact;