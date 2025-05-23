import { FormInput, Logo, SubmitBtn } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/forgot', data);
    toast.success('Please check your email for reset password link');
    return redirect('/');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const ResetPassword = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary'
      >
        <Logo />
        <h4 className='text-center text-3xl font-bold mt-4 capitalize text-primary'>
          forgot password
        </h4>
        <FormInput type='email' label='email' name='email' />

        <div className='mt-4'>
          <SubmitBtn text='send reset email' />
        
        </div>
      </Form>
    </section>
  );
};
export default ResetPassword;
