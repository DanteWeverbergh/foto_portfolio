import React from 'react';
import Overview from '../Components/Home/Overview';

function Contact() {
  return (
    <>
      <div className="container contact">
        <h1 className="contact__title">Get in touch.</h1>

        <form className="contact__form">
          <div className="contact__form__div">
            <input placeholder="Name" className="contact__form__input" />
            <input placeholder="Company" className="contact__form__input" />
          </div>
          <div className="contact__form__div">
            <input placeholder="Email" className="contact__form__input" />
            <input placeholder="Subject" className="contact__form__input" />
          </div>
          <textarea placeholder="Start typing here ..." rows={15} />
        </form>
      </div>

      <Overview page={'contact'} />
    </>
  );
}

export default Contact;
