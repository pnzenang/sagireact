import { FormInput, SubmitBtn, FormInput2, FormInputs } from '../components';
import { Form, redirect } from 'react-router-dom';
import FormPhone from '../components/FormPhone';
import Logo from '../components/Logo';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

const Register = () => {
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
    <section className='h-full grid  place-items-center mt-4'>
      <Form
        method='POST'
        className='card w-96 lg:w-3/5 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4 border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-1'>Register</h4>
        <p className='text-center'>
          If your association is already in SAGI, please use your existing
          4-letter code.
        </p>
        <div className='grid lg:grid-cols-2 gap-4 '>
          <FormInputs
            type='text'
            label='Delegate first name'
            name='firstName'
          />
          <FormInputs
            type='text'
            label='last and middle names'
            name='lastAndMiddleNames'
          />
        </div>
        <div className='grid lg:grid-cols-2 gap-4 '>
          <FormInput type='email' label='email' name='email' />
          <FormPhone type='text' label='phone number' name='phoneNumber' />
        </div>
        <div className='grid lg:grid-cols-2 gap-4 '>
          <FormInput
            type='text'
            label="Association, group or family's name"
            name='associationName'
          />
          <FormInput2
            type='text'
            label='Pick a 4-letter code for your group.'
            name='associationCode'
          />
        </div>
        <FormInputs type='text' label='street address' name='streetAddress' />
        <div className='grid lg:grid-cols-3 gap-4 '>
          <FormInputs type='text' label='city' name='city' />
          <FormInputs type='text' label='state' name='state' />
          <FormInputs type='text' label='zip code' name='zipCode' />
        </div>

        <div className=' grid lg:grid-cols-2 gap-4'>
          {/* <FormInput type='password' label='password' name='password' /> */}
          <div>
            <div>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <div className='flex '>
                <input
                  className='input
                input-bordered
                w-full bg-base-200 md:text-lg '
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
          <div className='mt-9'>
            <SubmitBtn text='register' />
          </div>
          <div className='mt-2 flex justify-items-end '>
            <p className=' mt-2'>
              Already have an account?
              <a
                href='/login'
                className='ml-2 link link-hover link-primary capitalize'
              >
                login
              </a>
            </p>
          </div>
        </div>
      </Form>
    </section>
  );
};
export default Register;
