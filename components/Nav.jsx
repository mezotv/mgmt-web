// Module Imports
import Image from 'next/image';
import Link from 'next/link';

// Other Imports
import Logo from '../public/Logo.svg';

function Nav() {
  // Navbar Scroll Logic
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const navBar = document.querySelector('nav');

      if (window.scrollY > 0) {
        navBar.classList.add('sticky');
      } else {
        navBar.classList.remove('sticky');
      }
    });
  }

  return (
    <nav>
      <div className='logo'>
        <a href="/"><Image width={60} height={60} src={Logo} /></a>
      </div>
      <div className='nav-items'>
        <Link href={'/'}>
          <p>Home</p>
        </Link>
        <Link href={'/about'}>
          <p>About</p>
        </Link>
        <Link href={'/partners'}>
          <p>Partners</p>
        </Link>
        <Link href={'https://discord.com/invite/V9ujzCUDzK'}>
          <p>Discord</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
