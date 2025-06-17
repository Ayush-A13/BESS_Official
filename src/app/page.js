"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");

        function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].style.display = "block";
        }

        showSlides();
        const interval = setInterval(showSlides, 3000);
        return () => clearInterval(interval);
    }, []);
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
            <Image
                src="/BESSCurr-banner.jpg"
                alt="Welcome to BESS"
                width={1200}
                height={600}
                className="banner-image"
            />
            </section>

            {/* Navigation Bar */}
            <nav className="navbar">
            <div className="logo">
                <Image
                src="/BESS-Logo.png"
                alt="BESS Logo"
                width={80}
                height={80}
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
                    The UNSW Biomedical Engineering Students Society (BESS) is the constituent student-run society for 
                    the Graduate School of Biomedical Engineering (GSBME). We encompass all undergraduate and postgraduate 
                    students enrolled in GSBME. We seek to serve biomedical engineering students by connecting them with 
                    academics from the school and industry partners through social, networking events, and workshops 
                    throughout the year.
                </p>
                <p>
                    Our undergraduate students study a wide range of bachelor’s degree options in conjunction with the 
                    Master of Biomedical Engineering. Our disciplines include:
                </p>
                <ul>
                    <li>Bioinformatics Engineering</li>
                    <li>Chemical Engineering</li>
                    <li>Computer Engineering</li>
                    <li>Electrical Engineering</li>
                    <li>Material Sciences and Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Mechatronics Engineering</li>
                    <li>Software Engineering</li>
                    <li>Telecommunications</li>
                </ul>
            </section>

            {/* Events Section */}
            <section id="events">
                <h2>Events</h2>
                <p>
                    We run a wide variety of events for fun, learning new skills, and career growth.
                    For full listings, check out the <a href="https://discord.gg/R3d5C6hvab2222" target="_blank">BESS Discord</a> or our <a href="https://facebook.com/UNSWBESS" target="_blank">Facebook page</a>!
                </p>

                <div className="slideshow-container">
                    <div className="slide fade">
                    <img src="/Pill-banner.jpg" alt="Event 1" />
                    </div>
                    <div className="slide fade">
                    <img src="/Pill-banner.jpg" alt="Event 2" />
                    </div>
                    <div className="slide fade">
                    <img src="/PersonalB-banner.jpg" alt="Event 3" />
                    </div>
                </div>
            </section>


            {/* Sponsorship Section */}
            <section id="sponsorship">
                <h2>Partnership Tiers</h2>
                <p>BESS offers different sponsorship tiers for companies looking to support the society and gain exposure to Biomedical Engineering students.</p>

                <table class="sponsorship-table">
                    <tbody>
                        <tr>
                            <th>Services</th>
                            <th> Bronze ($500)</th>
                            <th> Silver ($1000)</th>
                            <th> Gold ($1500)</th>
                        </tr>
                        <tr>
                            <td>Company’s logo on LinkTree and Sponsors Page on the BESS website</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Social media engagement (Instagram, Facebook, LinkedIn)</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Prominent spot for your company’s logo on merch line</td>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Job opportunity marketing on UNSW Biomedical Engineering LinkedIn / Mailing List</td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Invitation to major networking events</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Company logo on event ads / cover page</td>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Opportunity to host site visits</td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Opportunity to host a company-specific event/workshop</td>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Tailored benefits at BESS industry events</td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>10% discount on sponsorship upon signing a 3-year contract</td>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <td>Specific perks to be discussed</td>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Contact Section */}
            <section id="contact">
            <h2>Contact Us</h2>
            <p>
                For expression of interest and any other enquiries, please contact our industry team
                below, we are happy to have a meeting to discuss any matters related.
            </p>
            <p>
                We are excited to welcome you to 2025, inviting you to a diverse variety of events and
                amazing recruitment opportunities with our bright and talented biomedical engineering
                students.
            </p>

            <h3>Co-Presidents</h3>
            <p>Ben Paek, Jason Wu</p>

            <h3>Vice President of Industry</h3>
            <p>Kshirin Rasane</p>

            <div className="contact-info">
                <a href="mailto:industry.bessunsw@gmail.com">
                    <img src="/Mail-banner.png" alt="Email Icon" /> industry.bessunsw@gmail.com
                </a>
                <a href="https://www.facebook.com/UNSWBESS" target="_blank">
                    <img src="/Facebook-banner.png" alt="Facebook Icon" /> UNSWBESS
                </a>
                <a href="https://www.instagram.com/unswbess/" target="_blank">
                    <img src="/Instagram-banner.png" alt="Instagram Icon" /> @unswbess
                </a>
                <a href="https://www.linkedin.com/company/unsw-biomedical-engineering-students-society/" target="_blank">
                    <img src="/LinkedIn-banner.png" alt="LinkedIn Icon" /> UNSW BESS LinkedIn
                </a>
                </div>

            <Image
                src="/BESS-Logo.png"
                alt="BESS Logo"
                width={200}
                height={200}
                className="contact-logo"
            />
            </section>
        </main>
        </>
    );
}
