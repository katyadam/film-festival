import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import NavbarLine from '../components/ui/NavbarLine';

const Login = () => {
  return (
    <div className='bg-black px-8 min-h-screen'>
      <NavbarLine />
      <div className="text-white flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
