// Module Imports
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import axios from 'axios';

// Component Imports
import Nav from '../components/Nav';
import BackToTopBtn from '../components/BackToTopBtn';
import Review from '../components/Review';

// Other Imports
import InfoImg from '../public/Info.svg';
import LogoColored from '../public/LogoColor.svg';
import Waves from '../public/Waves.svg';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [activeFAQ, setActiveFAQ] = useState('');

  useEffect(async () => {
    await axios
      .get('http://161.97.154.196:8088/reviews')
      .then((response) => setReviews(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Nav />

      <main>
        <section id='landing'>
          <div>
            <h1>It's not just any Management</h1>
            <h1>
              It's <span>Mezo Management</span>
            </h1>
          </div>
        </section>

        <section id='info'>
          <h2>
            Info<span>.</span>
          </h2>
          <div className='content'>
            <div className='text'>
              <p>
                Here at Mezo Management, we've created a platform that links
                content creators and companies. We are a company that uses the
                power of social media to provide creators for you and your
                company.
              </p>
              <p>
                We worked with a variety of creators in the past, providing them
                great deals with our partnered company Salad Technologies.
              </p>
            </div>
            <div className='image'>
              <Image width={300} height={300} src={InfoImg} />
            </div>
          </div>
          <div className='waves'>
            <Image width={1920} height={400} src={Waves} />
          </div>
        </section>

        <section id='faq'>
          <h2>
            FAQ<span>.</span>
          </h2>
          <div className='faq-container'>
            <div
              className={`faq-question ${activeFAQ === 'faq1' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq1' ? setActiveFAQ('') : setActiveFAQ('faq1')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>What is Mezo Management?</h3>
              </div>
              <div className='faq-q-content'>
                At Mezo Management, we bridge the gap between brands and content
                creators and help brands and creators alike find quality
                partnerships.
              </div>
            </div>
            <div
              className={`faq-question ${activeFAQ === 'faq2' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq2' ? setActiveFAQ('') : setActiveFAQ('faq2')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>Why Mezo Management?</h3>
              </div>
              <div className='faq-q-content'>
                At Mezo Management we only partner with creators and companies
                that we ourselves have verified and are 100% legitimate. We
                always deliver quality over quantity. We only promote products
                with creators we believe in as a brand.
              </div>
            </div>
            <div
              className={`faq-question ${activeFAQ === 'faq3' ? 'active' : ''}`}
              onClick={() =>
                activeFAQ === 'faq3' ? setActiveFAQ('') : setActiveFAQ('faq3')
              }
            >
              <div className='faq-q-head'>
                <i className='bx bx-chevron-right'></i>
                <h3>Can you trust us?</h3>
              </div>
              <div className='faq-q-content'>
                Yes, you can. If you dont trust us check out our reviews down
                below!
              </div>
            </div>
          </div>
        </section>

        <section id='reviews'>
          <h2>
            Reviews<span>.</span>
          </h2>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={50}
            slidesPerView={1}
            className='review-slider'
          >
            {reviews.map((review) => (
              <SwiperSlide className='review'>
                <Review
                  key={review.uuid}
                  name={review.name}
                  description={review.description}
                  rank={review.rank}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <footer>
          <div className='footer-info'>
            <Image width={65} height={65} src={LogoColored} />
            <p>© 2022 Mezo Management</p>
          </div>
          <div className='footer-links'>
            <h4>About us</h4>
            <Link href='/'>
              <p>Our company</p>
            </Link>
            <Link href='/'>
              <p>Our partners</p>
            </Link>
          </div>
          <div className='footer-links'>
            <h4>Links</h4>
            <Link href='/'>
              <p>Discord Server</p>
            </Link>
          </div>
          <div className='footer-links'>
            <h4>Legal</h4>
            <Link href='/'>
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="footer-request">
            <h4>Cooporate</h4>
            <button className='send-request'>Send request</button>
          </div>
        </footer>

        <BackToTopBtn />
      </main>
    </div>
  );
}
