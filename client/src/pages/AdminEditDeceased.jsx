import { FormInput, SubmitBtn, FormDate, FormSelect } from '../components';
import { styled } from 'styled-components';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
  useLoaderData,
  useParams,
} from 'react-router-dom';
import { CONTRIBUTION_STATUS } from '../../../utils/constants';

import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  console.log(params);

  try {
    const { data } = await customFetch.get(`/members/deadMembers/${params.id}`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-deceased-admin');
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(
      `/users/admin/admin-edit-deceased/${params.id}`,
      data
    );
    toast.success('deceased member edited successfully');
    return redirect('/dashboard/all-deceased-admin');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AdminEditDeceased = () => {
  const { deceasedMember } = useLoaderData();
  const { user } = useOutletContext();

  return (
    <section className=' grid h-full place-items-center mt-20 '>
      <Form
        method='POST'
        className='card w-96 lg:w-full px-8 pb-20 pt-10 bg-base-100 shadow-lg flex flex-col gap-y-4 border-t-4  border-primary '
      >
        <h4 className='text-start text-3xl font-bold my-8 capitalize'>
          edit death announcement
        </h4>
        <div className='grid  lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='deceased member first name'
              name='deceasedFirstName'
              value={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='deceased member first name'
              name='deceasedFirstName'
              defaultValue={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='deceased member last and middle names'
              name='deceasedLastAndMiddleNames'
              value={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='deceased member last and middle names'
              name='deceasedLastAndMiddleNames'
              defaultValue={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='deceased member date of birth'
              name='deceasedDateOfBirth'
              value={deceasedMember.deceasedDateOfBirth}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='deceased member date of birth'
              name='deceasedDateOfBirth'
              defaultValue={deceasedMember.deceasedDateOfBirth}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='deceased member country of birth'
              name='deceasedCountryOfBirth'
              value={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='deceased member country of birth'
              name='deceasedCountryOfBirth'
              defaultValue={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='association name'
              name='deceasedAssociationName'
              value={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='association name'
              name='deceasedAssociationName'
              defaultValue={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          )}
          {user.role === 'user' ? (
            <FormInput
              type='text'
              label='association code'
              name='deceasedAssociationCode'
              value={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          ) : (
            <FormInput
              type='text'
              label='association code'
              name='deceasedAssociationCode'
              defaultValue={deceasedMember.deceasedFirstName}
              onChange={() => null}
            />
          )}

          {user.role === 'user' ? (
            <FormInput
              label='deceased registration date'
              name='deceasedRegistrationDate'
              value={deceasedMember.deceasedRegistrationDate}
              onChange={() => null}
            />
          ) : (
            <FormInput
              label='deceased registration date'
              name='deceasedRegistrationDate'
              defaultValue={deceasedMember.deceasedRegistrationDate}
              onChange={() => null}
            />
          )}
          <FormInput
            label='member matriculation '
            name='deceasedMemberMatriculation'
            value={deceasedMember.deceasedFirstName}
            onChange={() => null}
          />
          {user.role === 'user' ? (
            <FormInput type='text' label='place of death' name='placeOfDeath' />
          ) : (
            <FormInput type='text' label='place of death' name='placeOfDeath' />
          )}
          <FormDate label='date of death' name='dateOfDeath' />
          {user.role === 'user' ? (
            <FormSelect
              label='contribution status'
              name='contributionStatus'
              defaultValue={deceasedMember.contributionStatus}
              list={Object.values(CONTRIBUTION_STATUS)}
            />
          ) : (
            <FormSelect
              label='contribution status'
              name='contributionStatus'
              defaultValue={deceasedMember.contributionStatus}
              list={Object.values(CONTRIBUTION_STATUS)}
            />
          )}
          <div className='mt-2'>
            <label className='block text-sm font-medium leading-6 capitalize'>
              brief comment(500 characters maximum)
            </label>
            <div className='mt-1'>
              <textarea
                className='textarea textarea-bordered textarea-xs  w-full bg-base-200'
                name='comment'
                required
                maxLength={500}
              ></textarea>
            </div>
          </div>

          <div className='mt-8'>
            <SubmitBtn text='submit' />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default AdminEditDeceased;
