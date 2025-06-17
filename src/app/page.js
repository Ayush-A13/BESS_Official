import Head from 'next/head';

export default function Home() {
  return (
     <>
      <Head>
        <title>BESS - Biomedical Engineering Students Society</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {/* Welcome Banner */}
        <section id="welcome-banner">
          <img
            src="https://cdn.discordapp.com/attachments/512860733516677120/1341268981641777172/Screenshot_2025-02-18_154344.jpg"
            alt="Welcome to BESS"
            className="banner-image"
          />
        </section>

        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://cdn.discordapp.com/attachments/512860733516677120/1339524302747340822/image.png"
              alt="BESS Logo"
            />
          </div>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#sponsorship">Sponsorship</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* About Us Section */}
        <section id="about">
          <h2>About Us</h2>
          <p>
            BESS is the Biomedical Engineering Students Society at UNSW. We aim to support and
            enrich the student experience for all biomedical engineering students through social
            events, academic support, and industry engagement.
          </p>
        </section>

        {/* Events Section */}
        <section id="events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>Industry Night</strong> – A chance to meet professionals in biomedical
              engineering.
            </li>
            <li>
              <strong>Social Mixer</strong> – Meet and mingle with fellow students.
            </li>
            <li>
              <strong>Technical Workshops</strong> – Hands-on learning with real-world tools.
            </li>
          </ul>
        </section>

        {/* Sponsorship Section */}
        <section id="sponsorship">
          <h2>Our Sponsors</h2>
          <p>
            We are proudly sponsored by leading biomedical and tech companies who support our
            mission to grow the next generation of biomedical engineers.
          </p>
          <ul>
            <li>Company A</li>
            <li>Company B</li>
            <li>Company C</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact Us</h2>
          <p>Email us at <a href="mailto:bess.unsw@gmail.com">bess.unsw@gmail.com</a></p>
          <p>Follow us on our socials:</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/bessunsw/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/bessunsw/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://au.linkedin.com/company/bessunsw" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
