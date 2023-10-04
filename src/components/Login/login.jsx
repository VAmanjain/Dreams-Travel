import React, { useEffect, useState } from 'react';
import * as Scroll from "react-scroll";
import Image from '../../Assest/form.jpg'
import {

  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,

  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './login.css'
import {BsFacebook} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true,
    });
  };
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=' for '>

<div className="imgBg">
  <img src={Image} alt="background" />
  </div>     
<div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000" className=' md:pt-[2.5rem]'>

    <MDBContainer className="p-3 my-5  d-flex flex-column  form-box"  >

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} className='toggle'>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} className='toggle'>
           signup
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>log in  with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
             < BsFacebook className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
              <BsGoogle className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: 'black' }}>
                <BsTwitter className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <BsGithub className='icon'/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' contrast   className='word' required/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' contrast  className='Light' required />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'  />
            <a href="!#" className='text-white' >Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100 text-center "  onClick={() => goToPageAndScroll("home")}>log in</MDBBtn>
          <p className="text-center">Not a member? <a href="#" className='text-white' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}  >Signup</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              < BsFacebook className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <BsGoogle className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <BsTwitter className='icon'/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <BsGithub className='icon'/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' contrast  type='text' required />
          <MDBInput wrapperClass='mb-4' label='Username' id='form1'contrast  type='text' required />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' contrast  type='email' required />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' contrast  type='password' required />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100"  onClick={() => goToPageAndScroll("home")}>signup</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
</div>
      </div>
   
  );
}

export default App;