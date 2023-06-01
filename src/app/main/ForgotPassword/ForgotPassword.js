import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import SignInPage from '../sign-in/SignInPage';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle the password reset here
    if (password === confirmPassword) {
      alert("Your Password is updated")
    } else {
      alert("Your Password not updated")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <Typography className="mt-32 text-2xl font-extrabold tracking-tight leading-tight">
        <label  >Password:</label>
        <input className='input1' type="password" value={password} onChange={handlePasswordChange} />
        </Typography>
      </div>
      <br />
      <div>
      <Typography className="mt-32 text-2xl font-extrabold tracking-tight leading-tight">
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </Typography>
      </div>
      <Button  variant="contained"
              color="secondary"
              className=" w-77 mt-16 bg-blue "
              size="large" type="submit">Submit</Button>
              
    </form>
  );

};

export default ForgotPassword;