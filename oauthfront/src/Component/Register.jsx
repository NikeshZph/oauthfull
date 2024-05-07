import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';



function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'subscribe' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/register', formData);
      console.log('User registered successfully:', response.data);
      toast.success("User registered in successfully"); 
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleGoogleSignUp = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'; 
  };

  const handleGitHubSignUp = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github'; 
  };
  
  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' className='w-100' name='name' value={formData.name} onChange={handleChange}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' type='email' name='email' value={formData.email} onChange={handleChange}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' type='password' name='password' value={formData.password} onChange={handleChange}/>
                </div>
                
                <div className='mb-4'>
                  <MDBCheckbox name='subscribe' id='flexCheckDefault' label='Subscribe to our newsletter' checked={formData.subscribe} onChange={handleChange} />
                </div>
                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>
              </form>

              <MDBBtn className='mb-4' size='lg' href='/login'>Login with existing account</MDBBtn>
              <MDBBtn className='mb-4' size='lg' onClick={handleGoogleSignUp}>Sign up with Google</MDBBtn>
              <MDBBtn className='mb-4' size='lg' onClick={handleGitHubSignUp}>Sign up with GitHub</MDBBtn>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
