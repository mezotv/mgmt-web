// Module Imports
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import checkEmail from '../../utils/checkEmail';
import { useRecoilState } from 'recoil';

// State Management
import { addPartnerModalAtom } from '../../atoms/modalAtoms';

// Component Imports
import AddPartnerModal from '../../components/AddPartnerModal';

// Other Imports
import Logo from '../../public/Logo.svg';

const Home = () => {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState('Partners');

  // Partner Modal
  const [partnerModal, setPartnerModal] = useRecoilState(addPartnerModalAtom);

  if (session) {
    if (checkEmail(session.user.email)) {
      return (
        <div className='dashboard'>
          <div className='dashboard-nav'>
            <div className='logo'>
              <Image width={60} height={60} src={Logo} />
              <h2>STAFF</h2>
            </div>
            <div className='nav-items'>
              <Link href={'/'}>
                <p>Back Home</p>
              </Link>
              <Link href={'/account'}>
                <p onClick={() => signOut()}>{session.user.name}</p>
              </Link>
            </div>
          </div>
          <div className='page-select'>
            <p
              className={`page-select-item ${
                currentPage === 'Partners' ? 'active' : ''
              }`}
              onClick={() => setCurrentPage('Partners')}
            >
              Partners
            </p>
            <p
              className={`page-select-item ${
                currentPage === 'Companies' ? 'active' : ''
              }`}
              onClick={() => setCurrentPage('Companies')}
            >
              Companies
            </p>
            <p
              className={`page-select-item ${
                currentPage === 'Staff Members' ? 'active' : ''
              }`}
              onClick={() => setCurrentPage('Staff Members')}
            >
              Staff Members
            </p>
            <p
              className={`page-select-item ${
                currentPage === 'Applications' ? 'active' : ''
              }`}
              onClick={() => setCurrentPage('Applications')}
            >
              Applications
            </p>
          </div>

          <div className='head'>
            <h1>{currentPage}</h1>
            {currentPage === 'Partners' ? (
              <button
                className='add-partner-btn'
                onClick={() => setTest(!test)}
              >
                Add partner
              </button>
            ) : (
              ''
            )}
            {currentPage === 'Companies' ? (
              <button className='add-company-btn'>Add company</button>
            ) : (
              ''
            )}
            {currentPage === 'Staff Members' ? (
              <button className='add-staff-member-btn'>Add staff</button>
            ) : (
              ''
            )}
          </div>

          <div
            className={`partners ${currentPage === 'Partners' ? 'active' : ''}`}
          >
            <div className='partner'>
              <h3>SixStriker</h3>
              <button className='edit-partner'>Edit</button>
            </div>
          </div>

          <div
            className={`companies ${
              currentPage === 'Companies' ? 'active' : ''
            }`}
          >
            <div className='company'>
              <h3>Salad</h3>
              <button className='edit-company'>Edit</button>
            </div>
          </div>

          <div
            className={`staff-members ${
              currentPage === 'Staff Members' ? 'active' : ''
            }`}
          >
            <div className='staff-member'>
              <h3>Mezo</h3>
              <button className='edit-staff-member'>Edit</button>
            </div>
            <div className='staff-member'>
              <h3>Christian</h3>
              <button className='edit-staff-member'>Edit</button>
            </div>
            <div className='staff-member'>
              <h3>Nova</h3>
              <button className='edit-staff-member'>Edit</button>
            </div>
            <div className='staff-member'>
              <h3>Marc</h3>
              <button className='edit-staff-member'>Edit</button>
            </div>
          </div>

          <div
            className={`applications ${
              currentPage === 'Applications' ? 'active' : ''
            }`}
          >
            <div className='application'>
              <h3>testemail@gmail.com</h3>
              <button className='view-application'>View</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Unauthorized. Sign in with a valid account.</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      );
    }
  } else {
    return (
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default Home;
