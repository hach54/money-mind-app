import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to MoneyMind</h1>
      <p>
        MoneyMind is your go-to app for managing financial stress and anxiety.
        Our features include mood tracking, financial goal-setting, and access
        to financial therapists. Explore our services and take control of your
        financial well-being today!
      </p>
      <div className="features">
        <div className="feature">
          <h2>Affordability</h2>
          <p>
            Our "Financial Therapy" program provides affordable access to
            financial counseling and therapy services.
          </p>
        </div>
        <div className="feature">
          <h2>Rehabilitation</h2>
          <br></br>
          <p>
            Our "Financial Recovery" program helps users recover from financial
            trauma with expert advice and support.
          </p>
        </div>
        <div className="feature">
          <h2>Mood Tracking</h2>
          <p>Track your emotional state and gain insights into how it affects your financial decisions.</p>
        </div>
        <div className="feature">
          <h2>Financial Goal-Setting</h2>
          <p>Set and monitor your financial goals to stay on track and reduce anxiety about your finances.</p>
        </div>
        <div className="feature">
          <h2>Financial Therapy</h2>
          <p>Access affordable counseling to address financial worries and improve your mental well-being.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
