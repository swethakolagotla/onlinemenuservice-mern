import React from 'react'
    import "../styles/SignUp.css";
      import {
        MDBBtn,
        MDBContainer,
        MDBCard,
        MDBCardBody,
        MDBCol,
        MDBRow,
        MDBInput,
        MDBCheckbox,
        MDBIcon,
      } from "mdb-react-ui-kit";

const Signup = () => {
  return (
    <div>
 
 
  
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 style={{color:"black"}}className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember Password' />
          </div>

          <button className="btn-4">sign up</button>

           

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
    </div>
  )
}

export default Signup;