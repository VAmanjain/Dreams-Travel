import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from "mdb-react-ui-kit";
import "./contact.css";
import Image from "../../Assest/contact.jpg";
import * as Scroll from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    alert("Our team will connect with you ASAP !!!");

    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5wtiltp",
        "template_l5qm3h8",
        form.current,
        "J2Zt-3_Y5joQo6Wvt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact ">
      <div className="imgBg">
        <img src={Image} alt="" />
      </div>

      <div className="contact-box">
        <form ref={form} onSubmit={sendEmail}>
          <MDBValidation
            noValidate
            id="form"
            className="text-center mx-auto  contact-form "
            style={{ width: "100%", maxWidth: "300px" }}
          >
            <h2>Contact us</h2>

            <MDBValidationItem invalid feedback="Please provide your name.">
              <MDBInput
                type="text"
                name="user_name"
                label="Name"
                v-model="name"
                wrapperClass="mb-4"
                contrast
                required
              />
            </MDBValidationItem>

            <MDBValidationItem invalid feedback="Please provide your email.">
              <MDBInput
                name="user_email"
                type="email"
                label="Email address"
                v-model="email"
                wrapperClass="mb-4"
                contrast
                required
              />
            </MDBValidationItem>
            <MDBValidationItem
              invalid
              feedback="Please provide a message text."
            >
              <MDBTextArea
                wrapperClass="mb-4"
                label="Message"
                contrast
                required
              />
            </MDBValidationItem>

            <MDBValidationItem feedback="">
              <MDBCheckbox
                name="message"
                wrapperClass="d-flex justify-content-center"
                label="Send me copy"
                contrast
              />
            </MDBValidationItem>

            <MDBBtn
              type="submit"
              value="Send"
              color="primary"
              block
              className="my-4"
              onClick={() => goToPageAndScroll("home")}
            >
              Send
            </MDBBtn>
          </MDBValidation>
        </form>
      </div>
    </div>
  );
};

export default Contact;
