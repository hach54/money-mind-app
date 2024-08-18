import React from 'react';
import '../styles/Pricing.css';

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <h1>Pricing Plans</h1>
      <p>Choose a plan that best suits your financial counseling and therapy needs. We offer flexible and affordable options for everyone.</p>

      <div className="pricing-table">
        {/* Basic Plan */}
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p>Get started with essential financial advice and support.</p>
          <ul>
            <li>Monthly budget reviews</li>
            <li>Email support</li>
            <li>Access to resources</li>
          </ul>
          <h3>Free</h3>
          <button>Sign Up</button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card">
          <h2>Standard Plan</h2>
          <p>Everything in Basic plus personalized counseling sessions.</p>
          <ul>
            <li>1:1 Financial counseling</li>
            <li>Bi-weekly budget meetings</li>
            <li>Priority email support</li>
          </ul>
          <h3>$29/month</h3>
          <button>Sign Up</button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-card">
          <h2>Premium Plan</h2>
          <p>Get top-tier counseling services with maximum support.</p>
          <ul>
            <li>Unlimited 1:1 counseling sessions</li>
            <li>Weekly financial assessments</li>
            <li>Phone & email support</li>
          </ul>
          <h3>$59/month</h3>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
