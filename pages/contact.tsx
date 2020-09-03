import React from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm('portfolio', 'portfolio_form', e.target, 'user_gSfkba0Rf5gMdNzGxHLxj');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="text" name="email" />
      <label>Subject</label>
      <input type="text" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
