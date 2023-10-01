import { MDBBtn, MDBCheckbox, MDBCol, MDBFile, MDBInput, MDBRadio, MDBRow, MDBTextArea, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import * as Scroll from "react-scroll";

const Trip = () => {
  const path = useLocation().pathname;
    const location = path.split("/")[1];
    const navigate = useNavigate();
    const scroller = Scroll.scroller;
  
    const goToPageAndScroll = async (selector) => {

        alert("Thankyou to belive us ! Our team will contact you for Further Process");
    
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
  },[]);

  return (
    <div className='trip ' name='trip'>
        <div className='trip-box '  >


          <MDBValidation noValidate id='form' className='text-center mx-auto  trip-form  container' style={{ width: '100%'  }}>
      <h2>Plan You Dream Trip </h2>
      <span style={{paddingBottom:"1.5rem"}}>Fill the form and our team will contact you for furthuer process</span>

      <MDBValidationItem invalid feedback="Please provide your name.">
            <MDBRow>
              <MDBCol>
                <MDBInput
                  label="First Name"
                  v-model="fname"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label=" Last Name"
                  v-model="lname"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
            </MDBRow>
          </MDBValidationItem>

          <MDBValidationItem invalid feedback="Please provide your email.">
            <MDBInput
              type="email"
              label="Email address"
              v-model="email"
              wrapperClass="mb-4"
              contrast
              required
            />
          </MDBValidationItem>
          <MDBRow>
            <MDBCol>
              <MDBValidationItem invalid feedback="Please provide your Age .">
                <MDBInput
                  type="email"
                  label="Enter Your Age"
                  v-model="age"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBValidationItem>
            </MDBCol>

            <MDBCol>
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio1"
                value="option1"
                label="Male"
                inline
              />
              <MDBRadio
                name="inlineRadio"
                id="inlineRadio2"
                value="option2"
                label="Female"
                inline
              />
            </MDBCol>
          </MDBRow>
      <MDBValidationItem invalid feedback='Please provide You Address'>
        <MDBInput label='Street Address' v-model='streetaddress' wrapperClass='mb-4' contrast required />
        <MDBRow>
              <MDBCol>
                <MDBInput
                  label="State"
                  v-model="state"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label=" Country"
                  v-model="country"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label="Zip"
                  v-model="pincode"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
            </MDBRow>
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a the travel details'>
        <MDBTextArea wrapperClass='mb-4' label='give complete trip details ( e.g.location,duration , expected charge )' contrast required rows={5} />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback="Please provide your name.">
            <MDBRow>
              <MDBCol>
                <MDBInput
                  label="from"
                  v-model="from"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
              <MDBCol>
                <MDBInput
                  label=" to"
                  v-model="to"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
              </MDBCol>
            </MDBRow>
          </MDBValidationItem>

          <span>Upload You Any Goverment ID</span>
          <MDBValidationItem invalid feedback="Please provide your Goverment ID .">

          <MDBFile id='customFile' className="update" />
          </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-start' label='I agree a trem and conditions' contrast />
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


export default Trip
