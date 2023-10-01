import React, { useState } from "react";
import 'mdb-react-ui-kit';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
  MDBCol,
  MDBRow,
  MDBRadio,
  MDBFile,
} from "mdb-react-ui-kit";
import "./dream.css";
import * as Scroll from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const Book = () => {
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

  return (
    <div name="book" className="book ">
     

      <div className="book-box">
        <MDBValidation
          noValidate
          id="form"
          className="text-center mx-auto  book-form "
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <h2 style={{ marginBottom: "1.2rem" }}>book Your trip</h2>

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
          <MDBValidationItem invalid feedback="Number Of Travels">
          <MDBInput
                  type="email"
                  label="Enter Number oF travelers"
                  v-model="member"
                  wrapperClass="mb-4"
                  contrast
                  required
                />
          </MDBValidationItem>
          <MDBValidationItem invalid feedback="Why you What to go on this trip">
            <MDBTextArea
              wrapperClass="mb-4"
              label="Why you want to go this group ?"
              contrast
              required
            />
          </MDBValidationItem>
          <span>Upload You Any Goverment ID</span>
          <MDBValidationItem invalid feedback="Please provide your Goverment ID .">

          <MDBFile id='customFile' className="update" />
          </MDBValidationItem>

          <MDBValidationItem feedback="">
            <MDBCheckbox
              wrapperClass="d-flex justify-content-center"
              label="Send me copy"
              contrast
            />
          </MDBValidationItem>

          <MDBBtn
            type="submit"
            color="primary"
            block
            className="my-4"
            onClick={() => goToPageAndScroll("home")}
          >
            Send
          </MDBBtn>
        </MDBValidation>
      </div>
    </div>
  );
};

export default Book;
