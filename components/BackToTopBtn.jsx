import { useState } from 'react';

const BackToTopBtn = () => {
  const [active, setActive] = useState(false);

  function scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight / 0.95) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  return (
    <div
      className={`backToTopBtn ${active ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className='bx bx-chevron-up'></i>
    </div>
  );
};

export default BackToTopBtn;
