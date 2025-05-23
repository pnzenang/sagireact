import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

import { FormInput, SubmitBtn } from '../components';
import { Form, redirect, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [Icon, setIcon] = useState(EyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(Eye);
      setType('text');
    } else {
      setIcon(EyeOff);
      setType('password');
    }
  };
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4 text-primary '>
          Login
        </h4>
        <FormInput type='email' label='delegate email' name='email' />
        {/* <FormInputLogin type='password' label='password' name='password' /> */}
        <div>
          <div>
            <div className='label'>
              <span className='label-text'>Password</span>
            </div>
            <div className='flex '>
              <input
                className='input
                input-bordered
                w-full bg-base-200 md:text-lg max-w-xs'
                type={type}
                name='password'
                // placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
              />
              <span
                className='flex justify-around items-center'
                onClick={handleToggle}
              >
                <Icon className='absolute mr-10 text-primary' size={25} />
              </span>
            </div>
          </div>
        </div>

        <div className='mt-6'>
          <SubmitBtn text='login' />
          <p className='text-center mt-4'>
            Not a member yet?
            <a
              href='https://forms.gle/1az8VaLtgn7KZvtJ6'
              className='ml-2 link link-hover link-primary capitalize'
            >
              register
            </a>
            {/* <Link
              to='/register'
              className='ml-2 link link-hover link-primary capitalize'
            >
              register
            </Link> */}
          </p>
          <p className='text-center mt-4'>
            Forgot password?
            <Link
              to='/forgot'
              className='ml-2 link link-hover link-success capitalize'
            >
              reset
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};
export default Login;
