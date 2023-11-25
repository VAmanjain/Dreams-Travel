import React, { useEffect } from "react";
import { NavLink as RouterLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

const terms = () => {
  ScrollTop();
  return (
    <div className="term  w-full min-h-screen h-auto">
      <div className="absolute z-30 top-[15%] ">
        <RouterLink
          to="/"
          className="text-white relative z-0  "
        >
          <BiLeftArrowAlt className=" w-[3rem] h-[3rem] m-[1rem]  bg-[#023c88] p-2 rounded-full" />
        </RouterLink>
      </div>
      <div className="section p-[2rem] container z-0 ">
        <h1 className="md:text-[3.6rem] text-center text-[#023c88] font-bold pt-[2.5rem]">
          Trems & Conditions
        </h1>
        <hr />

        {/* ----------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">Introduction</h2>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">a. Scope:</span>
          This section defines the scope of the agreement, stating that the
          terms and conditions outlined apply to the use of Dreams Travel's
          website, mobile apps, and services. It ensures that users understand
          the coverage of these terms.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] "> b. Acceptance:</span>
          By accessing or using Dreams Travel, users acknowledge and agree to
          abide by these Terms & Conditions. This clause establishes users'
          consent to be bound by the rules and regulations stipulated in the
          document.
        </p>

        {/* -------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">User Accounts</h2>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">a. Registration:</span>
          Users must create an account to access certain features such as
          booking services or interacting with the community. This clause
          highlights the necessity for accurate and up-to-date information
          during account creation.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">
            b. Account Security:
          </span>
          Emphasizes the user's responsibility for maintaining the security and
          confidentiality of their account credentials. It encourages prompt
          reporting of any unauthorized access to prevent misuse of the account.
          document.
        </p>

        {/* -------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          Services and Bookings
        </h2>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">
            a. Booking Process:
          </span>
          This section outlines the services available for booking through
          Dreams Travel's platform, including accommodations, activities,
          transportation, and other travel-related services. It informs users
          about the scope of services offered.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">b. Availability:</span>
          Indicates that bookings are subject to availability and are confirmed
          only upon successful payment, ensuring users understand the
          conditional nature of their reservations.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">
            c. Payments and Fees:
          </span>
          Users agree to pay all applicable fees and taxes associated with the
          bookings made through Dreams Travel. It specifies the financial
          responsibilities of users regarding the services they avail.
        </p>

        {/* -------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Cancellation, Modifications, and Refunds
        </h2>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">
            a. Cancellation Policy:
          </span>
          Details the procedures, timelines, and any potential fees associated
          with canceling bookings. It informs users about the conditions under
          which they can cancel their reservations and any financial
          implications.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">
            b. Modification of Bookings:
          </span>
          Allows users to request changes to their bookings, subject to
          availability and policies set by service providers. This clause
          explains the process and limitations for modifying reservations.
        </p>
        <p className="text-[1rem]">
          <span className="font-semibold text-[1.3rem] ">c. Refunds:</span>
          Outlines the conditions under which refunds, if applicable, are
          processed. It specifies whether refunds involve deductions for service
          fees or other charges and the timeline for processing.
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Privacy and Data Collection
        </h2>
        <p className="text-[1rem]">
          Refers users to the detailed Privacy Policy, which governs the
          collection, use, and protection of user data. It ensures users
          understand how their personal information is handled and protected by
          Dreams Travel.
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Intellectual Property
        </h2>
        <p className="text-[1rem]">
          States that Dreams Travel retains ownership rights to all content,
          logos, trademarks, and intellectual property displayed on the
          platform. This section informs users about the proprietary rights
          associated with the platform's content.
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Limitation of Liability
        </h2>
        <p className="text-[1rem]">
          This clause limits Dreams Travel's liability for any damages arising
          from the use of its platform or services. It indicates that the
          platform is not responsible for certain types of damages, including
          direct, indirect, incidental, consequential, or punitive damages..
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Governing Law and Dispute Resolution
        </h2>
        <p className="text-[1rem]">
          Specifies the governing law and jurisdiction in case of disputes. It
          determines which laws apply and where legal proceedings would take
          place in case of conflicts.
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Modifications and Updates
        </h2>
        <p className="text-[1rem]">
          Indicates that Dreams Travel reserves the right to update, modify, or
          change these Terms & Conditions at its discretion. Users will be
          notified of significant updates, ensuring transparency in the
          governance of the platform.
        </p>

        {/* ---------------------------------------- */}

        <h2 className="font-semibold text-[2rem] mt-6 ">
          {" "}
          Contact Information
        </h2>
        <p className="text-[1rem]">
          Provides users with contact information to reach out to Dreams Travel
          for inquiries, complaints, or support regarding these Terms &
          Conditions or any issues related to the platform. It establishes a
          communication channel between users and the platform for resolution of
          queries or concerns.
        </p>
      </div>
    </div>
  );
};

export default terms;
