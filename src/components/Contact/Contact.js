import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [messageError, setMessageError] = useState({});

  const [success, setSuccess] = useState('');

  const sendEmailHandler = (event) => {
    event.preventDefault();

    const isValid = formValidation();

    if (isValid) {
      emailjs
        .sendForm(
          'gmail',
          'email_template_id',
          event.target,
          'user_hjiXLSO3lG0J6BG4oNO4M'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      event.target.reset();

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const formValidation = () => {
    const nameError = {};
    const emailError = {};
    const messageError = {};
    let success = '';
    let isValid = true;

    if (name && email && message) {
      success = 'Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε σύντομα.';
      setSuccess(success);
      isValid = true;
    }

    if (!name) {
      nameError.nameErr = 'Το όνομα είναι απαραίτητο.';
      isValid = false;
    }

    if (!email) {
      emailError.emailErr = 'Το email είναι απαραίτητο.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.emailErr = 'Το email δεν είναι έγκυρο.';
      isValid = false;
    }

    if (!message) {
      messageError.messageErr = 'Το μήνυμα είναι απαραίτητο.';
      isValid = false;
    }

    setNameError(nameError);
    setEmailError(emailError);
    setMessageError(messageError);

    return isValid;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div
          className="global-headline"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="sub-headline">
            <span className="first-letter">C</span>ontact
          </h2>
          <h1 className="headline headline-dark">Επικοινωνηστε μαζι μας</h1>
          <div className="asterisk">
            <i className="fas fa-asterisk"></i>
          </div>
        </div>
        <div className="box">
          <div
            className="contact-box contact-form"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <form onSubmit={sendEmailHandler}>
              <div className="form-box">
                <div className="input-box">
                  <h3>Φόρμα επικοινωνίας</h3>
                  <h4>* Όλα τα πεδία είναι υποχρεωτικά</h4>
                </div>
                <div className="row100">
                  <div className="input-box">
                    <span>Όνομα</span>
                    <input
                      type="text"
                      placeholder="Εισάγετε εδώ το όνομά σας"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {Object.keys(nameError).map((key, index) => {
                      return (
                        <p key={index} className="error">
                          {nameError[key]}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="row100">
                  <div className="input-box">
                    <span>Email</span>
                    <input
                      type="email"
                      placeholder="Εισάγετε εδώ το email σας"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {Object.keys(emailError).map((key, index) => {
                      return (
                        <p key={index} className="error">
                          {emailError[key]}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="row100">
                  <div className="input-box">
                    <span>Μήνυμα</span>
                    <textarea
                      rows="7"
                      placeholder="Γράψτε εδώ το μήνυμά σας"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {Object.keys(messageError).map((key, index) => {
                      return (
                        <p key={index} className="error">
                          {messageError[key]}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="row100">
                  <div className="input-box">
                    <input
                      type="submit"
                      value="Αποστολη"
                      className="send-btn"
                    />
                    {success && (
                      <p
                        style={{
                          color: '#c59d5f',
                          fontSize: '1.5rem',
                          marginTop: '2rem',
                        }}
                      >
                        {success}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div
            className="contact-box contact-info"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aod-delay="1000"
            data-aos-once="true"
          >
            <div className="info-box">
              <div>
                <h3>Στοιχεία επικοινωνίας</h3>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p>Χανιών 22 και Ομορφοκκλησιάς, Νέα Ιωνία</p>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>apergisknitwear@gmail.com</p>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>+30 210 277 0294</p>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </span>
                <p>
                  +30 697 487 8623
                  <br />
                  +30 697 482 4124
                </p>
              </div>
            </div>
          </div>

          <div
            className="contact-box contact-map"
            data-aos="zoom-in"
            data-aos-duration="1000"
            // data-aod-delay="600"
            data-aos-once="true"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.3949145953266!2d23.76144266026074!3d38.03572865814213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a2781a413353%3A0xbacae311ca136b31!2zzqfOsc69zq_Pic69IDIyLCDOnc6tzrEgzpnPic69zq_OsSAxNDIgMzM!5e0!3m2!1sel!2sgr!4v1644759538606!5m2!1sel!2sgr"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
