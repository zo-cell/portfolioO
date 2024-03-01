// import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import './Contact.css';
import doneAnimation from '../../../public/animation/done.json';
import emailAnimation from '../../../public/animation/email.json';

const Contact = () => {
  const [state, handleSubmit] = useForm('mjvnrleq');
  return (
    <section className="contact flex">
      <h1 className="title flex">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new.
      </p>

      <div style={{width: '100%', justifyContent: 'space-between'}} className="flex contact_form_animation_div">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div style={{ marginTop: '22px' }} className="flex">
            <label htmlFor="message">Your message:</label>
            <textarea
              autoComplete="off"
              required
              name="message"
              id="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Submit'}
          </button>

          {state.succeeded && (
            <p className="message flex">
              <Lottie loop="off" style={{height: 65,marginRight: -5}} animationData={doneAnimation} />
              Your message has been sent! Thank you.
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie  style={{height: 355}} animationData={emailAnimation} className='contact-animation' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
