import * as React from "react";
import "./Questions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { red } from "@mui/material/colors";

export default function Questions() {
  function review() {
    alert("Our team answer questions in 24hours.!! ");
  }

  return (
    <div className="questions">
      <div className="Heading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="  secContainer grid container">
        <div className="accordion grid  justify-center ">
          <div className="secContent">
            <Accordion className="text-white" >
              <div className="secHeading">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span>
                    Is my personal information safe with Dreams-Travel?
                  </span>
                </AccordionSummary>
              </div>
              <div className="secDesc">
                <AccordionDetails>
                  Absolutely. We take your privacy seriously and have stringent
                  security measures in place to protect your data. Rest assured
                  that your personal information is kept confidential and secure
                  at all times.
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
          <div className="secContent">
            <Accordion  className="text-white" >
              <div className="secHeading">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span>
                    Can I customize my travel itinerary on Dreams-Travel?
                  </span>
                </AccordionSummary>
              </div>
              <div className="secDesc">
                <AccordionDetails>
                  Yes, you have complete control. Our app empowers you to tailor
                  your itinerary to match your unique preferences and interests,
                  ensuring that your dream journey is personalized just for you.
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
          <div className="secContent">
            <Accordion  className="text-white"  >
              <div className="secHeading">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span>What happens if my travel plans change?</span>
                </AccordionSummary>
              </div>
              <div className="secDesc">
                <AccordionDetails>
                  We understand that plans can change. Dreams-Travel offers
                  flexible booking options and easy modification features,
                  allowing you to adjust your itinerary to accommodate any
                  changes in your schedule or preferences.
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
          <div className="secContent">
            <Accordion  className="text-white" >
              <div className="secHeading">
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span>
                    How can I contact customer support if I encounter issues
                    during my trip?
                  </span>
                </AccordionSummary>
              </div>
              <div className="secDesc">
                <AccordionDetails>
                  Our 24/7 customer support team is just a tap away within the
                  app. Should you encounter any issues during your journey, our
                  dedicated support team will respond promptly, ensuring that
                  your dream adventure continues smoothly.
                </AccordionDetails>
              </div>
            </Accordion>
          </div>
        </div>

        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific questions?</h4>
            <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>
          <form action="">
            <div className="formContent grid">
              <input type="email" placeholder="Enter email address" />
              <textarea
                placeholder="Enter your question here"
                className="px-3"
              ></textarea>
              <button className="btn" onClick={() => review()}>
                Submit Inquiery
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
