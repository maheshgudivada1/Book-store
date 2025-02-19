import React, { useState } from 'react';
import './index.css'; // Import the CSS file

const PrivacyPolicy = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {/* Privacy Policy banner section */}
      <div className="privacy-policy-container1">
      </div>
      
      <div className="privacy-policy-container">
        <h1 className="privacy-policy-header">Privacy Policy</h1>
        <p className="intro">
          Welcome to our Privacy Policy page! At dcBook Bookstore, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>

        <section className="section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address, billing address, and payment details when you make a purchase or create an account. We also collect data when you interact with our website, such as browsing behavior and preferences.
          </p>
        </section>

        <section className="section">
          <h2>2. How We Use Your Information</h2>
          <p>
            We use your information to process your orders, provide customer support, and personalize your shopping experience. Your data helps us offer book recommendations and notify you about new releases, promotions, or special offers.
          </p>
        </section>

        <section className="section">
          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and other tracking technologies to understand your preferences and enhance your experience on our website. You can control cookie settings through your browser, but disabling cookies may affect site functionality.
          </p>
        </section>

        <section className="section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your data with service providers who assist us with order processing, payment handling, and delivering your purchases. These providers are bound by confidentiality agreements.
          </p>
        </section>

        <section className="section">
          <h2>5. Data Security</h2>
          <p>
            We take data security seriously and use industry-standard measures to protect your personal information. While we do our best to safeguard your data, no online transmission can be guaranteed to be completely secure.
          </p>
        </section>

        <section className="section">
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact us at <a href="mailto:support@novelski.com">support@novelski.com</a>.
          </p>
        </section>

        <section className="section">
          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any significant changes will be communicated via email or posted on our website. Please review the policy periodically to stay informed.
          </p>
        </section>

        <section className="section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, feel free to reach out to us at .
          </p>
        </section>

        <button className="toggle-btn" onClick={toggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </button>

        {showMore && (
          <section className="section additional-info">
            <h2>Additional Information</h2>
            <p>
              By using our services and purchasing books from dcBook Bookstore, you agree to this Privacy Policy. If you do not agree with our policies, please discontinue using our website.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;
