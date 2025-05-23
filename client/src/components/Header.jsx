import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <header className='bg-neutral  text-neutral-content header'>
        <div className='align-element flex justify-center sm:justify-end '>
          {/* USER */}
          {/* LINKS */}
          <div className='flex gap-x-6 justify-center items-center my-7'>
            <Link to='/login' className='btn btn-outline btn-primary'>
              Login
            </Link>
            <Link to='register' className='btn btn-outline btn-secondary '>
              Register
            </Link>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .header {
    height: 7rem;
  }
`;
export default Header;
