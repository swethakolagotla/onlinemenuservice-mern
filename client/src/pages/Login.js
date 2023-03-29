import React ,{useState}from 'react'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
 import { updateAdmin } from '../Redux/AdminSlice';
import axios from "axios";
import { userActions } from '../Redux/AdminSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const Login = () => {
  const navigate = useNavigate();
  //const Admin=useSelector(state=>state.userActions)
  const[isAdmin]=useState(false)
  const [state, setState] = useState({
    Email: "",
    password: "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const dispatch=useDispatch()
  const handleClick = () => {
    axios
      .get("http://localhost:4000/auth/login", state)
      .then((response) => {
        console.log(response.data.user.isAdmin);
        dispatch(updateAdmin(response.data.user.isAdmin));
       setState(response.data)
        navigate("/addmenu");
      })
      .catch((err) => {
        console.log(err);
      });
  }; 
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput  name="Email"  value={state.Email}onChange={handleChange} wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput name="password"value={state.password}onChange={handleChange} wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <button className="mb-4" onClick={handleClick}>Sign in</button>

      <div className="text-center">
        <p>Not an Admin? <a href="/signup">Register</a></p>
      </div>

    </MDBContainer>
  );
}
export default Login