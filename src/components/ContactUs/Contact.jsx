import React, { useEffect, useState } from 'react'
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem , MDBTextArea} from 'mdb-react-ui-kit';
import './contact.css'
import Image from '../../Assest/contact.jpg'
import * as Scroll from "react-scroll";
import {

  useLocation,
  useNavigate,
} from "react-router-dom";

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
    }, []);

  return (
    <div className='contact '>
<div className="imgBg">
    <img src={Image} alt="" />
</div>

        <div className='contact-box'  data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000">


          <MDBValidation noValidate id='form' className='text-center mx-auto  contact-form ' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBValidationItem invalid feedback='Please provide your name.'>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' contrast required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' contrast required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' contrast required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea wrapperClass='mb-4' label='Message' contrast required />
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' contrast />
      </MDBValidationItem>

      <MDBBtn type='submit' color='primary' block className='my-4'  onClick={() => goToPageAndScroll("home")}>
        Send
      </MDBBtn>
    </MDBValidation>
        </div>
    </div>
  )
}

export default Contact