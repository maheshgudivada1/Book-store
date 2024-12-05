import React from 'react';
import './index.css';

function AboutUs() {
    return (
        <div className="about-us-container">
          {/*  <section className="hero-section">
                <img src="https://www.bookstore.com/assets/hero-image.jpg" alt="Books" className="hero-image" />
                <div className="hero-content">
                    <h1 className="hero-title">Why Choose Our Bookstore</h1>
                    <p className="hero-text">At our bookstore, we bring the world of literature to your doorstep. Whether you’re an avid reader or just starting your journey, our diverse collection caters to every interest and passion. We believe in fostering a love for reading and offering books that inspire, educate, and entertain.</p>
                    <button className="hero-button">Explore Our Collection</button>
                </div>
            </section>*/}

            {/* Mission Section */}
            <section className="mission-section">
                <div className="content">
                    <h2 className="section-title">Our Mission</h2>
                    <p className="section-text">Our mission is to make books more accessible to everyone, encouraging lifelong learning and personal growth. We aim to create an inclusive community for readers of all ages, offering a wide range of books that spark imagination, creativity, and critical thinking.</p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section">
                <div className="content">
                    <h2 className="section-title">What We Offer</h2>
                    <p className="section-text">We offer an extensive collection of books, from bestsellers to hidden gems, catering to all genres, including fiction, non-fiction, fantasy, mystery, self-help, and educational resources. Our goal is to provide every reader with a tailored reading experience, whether in-store or through our online platform.</p>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <div className="content">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-text">Have any questions or need book recommendations? Reach out to us today! Our knowledgeable team is always happy to help you find your next great read, offer personalized recommendations, or assist with any inquiries you may have.</p>
                    <p className="contact-info">Call Us: +91 12345 67890 | Email: contact@bookstore.com</p>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
