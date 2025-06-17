"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const slides = [
    { src: "/Pill-banner.jpg", alt: "Pharmaceutical Research Event" },
    { src: "/PersonalB-banner.jpg", alt: "Personal Branding Workshop" },
    { src: "/Pill-banner.jpg", alt: "Industry Networking Event" }
  ];

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Smooth scroll with offset for fixed navbar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Head>
        <title>BESS - Biomedical Engineering Students Society | UNSW</title>
        <meta name="description" content="The UNSW Biomedical Engineering Students Society (BESS) connects students with academics and industry through social events, networking, and workshops." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="UNSW, biomedical engineering, student society, BESS, networking, events" />
        <link rel="icon" href="/BESS-Logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <nav className="navbar">
        <div className="logo">
          <Image 
            src="/BESS-Logo.png" 
            alt="BESS Logo" 
            width={50} 
            height={50}
            priority 
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '50px',
              maxHeight: '50px'
            }}
          />
        </div>
        <ul className="nav-links">
          <li>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('events');
              }}
            >
              Events
            </a>
          </li>
          <li>
            <a 
              href="#sponsorship"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sponsorship');
              }}
            >
              Partnership
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Welcome Banner */}
        <section id="welcome-banner" className="banner-section">
          <Image
            src="/BESSCurr-banner.jpg"
            alt="Welcome to BESS - Biomedical Engineering Students Society"
            fill
            sizes="100vw"
            className="banner-image"
            priority
            style={{
              objectFit: 'cover'
            }}
          />
        </section>

        {/* About Us */}
        <section 
          id="about" 
          className={`section-container ${isVisible.about ? 'fade-in' : ''}`}
        >
          <div className="content-wrapper about-content">
            <h2>About BESS</h2>
            <p>
              The UNSW Biomedical Engineering Students Society (BESS) is the premier student-run organization 
              for the Graduate School of Biomedical Engineering (GSBME). We bridge the gap between academic 
              excellence and industry innovation, creating meaningful connections through engaging social events, 
              professional networking opportunities, and hands-on workshops.
            </p>
            <p>
              Our diverse community encompasses students pursuing combined bachelors and masters degrees 
              across multiple engineering disciplines, fostering interdisciplinary collaboration and innovation:
            </p>
            <ul className="discipline-grid">
              <li>Bioinformatics Engineering</li>
              <li>Chemical Engineering</li>
              <li>Computer Engineering</li>
              <li>Electrical Engineering</li>
              <li>Materials Science Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Mechatronics Engineering</li>
              <li>Software Engineering</li>
              <li>Telecommunications Engineering</li>
            </ul>
          </div>
        </section>

        {/* Events */}
        <section 
          id="events" 
          className={`section-container ${isVisible.events ? 'fade-in' : ''}`}
        >
          <div className="content-wrapper events-content">
            <h2>Our Events</h2>
            <p>
              Experience the future of biomedical engineering through our dynamic events program. 
              From cutting-edge research presentations to industry networking mixers, we create 
              opportunities for learning, growth, and professional development.
            </p>
            <p>
              Stay connected with our community! Join us on{' '}
              <a 
                href="https://discord.gg/R3d5C6hvab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-primary"
              >
                Discord
              </a>
              {' '}for real-time updates or follow us on{' '}
              <a 
                href="https://facebook.com/UNSWBESS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="link-primary"
              >
                Facebook
              </a>
              {' '}for event announcements and highlights!
            </p>

            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    style={{
                      objectFit: 'cover'
                    }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship */}
        <section 
          id="sponsorship" 
          className={`section-container ${isVisible.sponsorship ? 'fade-in' : ''}`}
        >
          <div className="content-wrapper sponsorship-content">
            <h2>Partnership Opportunities</h2>
            <p>
              Join forces with BESS to connect with the next generation of biomedical engineers. 
              Our partnership packages offer comprehensive exposure and meaningful engagement 
              opportunities with talented students poised to shape the future of healthcare technology.
            </p>
            
            <div className="table-container">
              <table className="sponsorship-table">
                <thead>
                  <tr>
                    <th>Partnership Benefits</th>
                    <th>Bronze<br />$500 AUD</th>
                    <th>Silver<br />$1,000 AUD</th>
                    <th>Gold<br />$1,500 AUD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brand presence on LinkTree & website</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Featured social media promotion</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Logo on exclusive merchandise</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Priority job posting promotions</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>VIP networking event invitations</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Branding on event materials</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Exclusive facility site visits</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Host educational workshops</td>
                    <td>—</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Custom event collaboration</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Multi-year discount (10% off)</td>
                    <td>✓</td>
                    <td>✓</td>
                    <td>✓</td>
                  </tr>
                  <tr>
                    <td>Bespoke partnership perks</td>
                    <td>—</td>
                    <td>—</td>
                    <td>✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section 
          id="contact" 
          className={`section-container ${isVisible.contact ? 'fade-in' : ''}`}
        >
          <div className="content-wrapper contact-content">
            <h2>Connect With Us</h2>
            <p>
              Ready to partner with the future of biomedical engineering? We are excited to explore 
              collaboration opportunities and discuss how we can create meaningful connections between 
              your organization and our talented student community.
            </p>
            <p>
              Join us for an extraordinary 2025 filled with innovative events, groundbreaking research 
              presentations, and unparalleled career networking opportunities!
            </p>

            <div className="contact-names">
              <div className="contact-person">
                <div className="contact-role">Co-Presidents</div>
                <div className="contact-name">Ben Paek & Jason Wu</div>
              </div>
              <div className="contact-person">
                <div className="contact-role">Vice President of Industry Relations</div>
                <div className="contact-name">Kshirin Rasane</div>
              </div>
            </div>

            <div className="contact-info">
              <a 
                href="mailto:industry.bessunsw@gmail.com"
                aria-label="Email BESS"
                className="contact-link"
              >
                <Image 
                  src="/Mail-banner.png" 
                  alt="Email" 
                  width={30} 
                  height={30}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '30px',
                    maxHeight: '30px'
                  }}
                />
              </a>
              <a 
                href="https://facebook.com/UNSWBESS" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="contact-link"
              >
                <Image 
                  src="/Facebook-banner.png" 
                  alt="Facebook" 
                  width={30} 
                  height={30}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '30px',
                    maxHeight: '30px'
                  }}
                />
              </a>
              <a 
                href="https://instagram.com/unswbess" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="contact-link"
              >
                <Image 
                  src="/Instagram-banner.png" 
                  alt="Instagram" 
                  width={30} 
                  height={30}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '30px',
                    maxHeight: '30px'
                  }}
                />
              </a>
              <a 
                href="https://linkedin.com/in/unsw-bess" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="contact-link"
              >
                <Image 
                  src="/LinkedIn-banner.png" 
                  alt="LinkedIn" 
                  width={30} 
                  height={30}
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '30px',
                    maxHeight: '30px'
                  }}
                />
              </a>
            </div>

            <div className="floating">
              <Image
                src="/bess-logo.png"
                alt="BESS Footer Logo"
                width={100}
                height={100}
                className="contact-logo"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100px',
                  maxHeight: '100px'
                }}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>
            © 2025 Biomedical Engineering Students Society (BESS) | UNSW Sydney
          </p>
          <p>
            Visit our{' '}
            <a 
              href="https://unsw.edu.au" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              UNSW page
            </a>
            {' '}for more information about our university
          </p>
        </footer>
      </main>
    </>
  );
}