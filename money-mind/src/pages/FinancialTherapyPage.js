import React from 'react';
import '../styles/FinancialTherapy.css'; // External CSS for styling

const FinancialTherapy = () => {
  return (
    <div className="financial-therapy-container">
      <h2>Financial Therapy Program</h2>
      <p>
        Our financial therapy program provides affordable access to financial counseling and therapy services to help 
        you manage financial stress, improve your money mindset, and develop healthy financial habits. Whether you’re 
        dealing with debt, saving for the future, or handling financial anxiety, we’re here to support you.
      </p>

      {/* Key Benefits Section */}
      <section className="benefits-section">
        <h3>Key Benefits of Financial Therapy</h3>
        <ul>
          <li>Reduce financial anxiety and stress.</li>
          <li>Develop a positive relationship with money.</li>
          <li>Access personalized financial advice.</li>
          <li>Plan for long-term financial goals.</li>
          <li>Get support for managing debt.</li>
        </ul>
      </section>

      {/* Accessible Resources Section */}
      <section className="resources-section">
        <h3>Accessible Resources</h3>
        <p>
          We provide a range of resources to help you navigate your financial challenges. Here are some tools and
          articles to get started:
        </p>
        <ul>
          <li>
            <a href="https://www.consumerfinance.gov" target="_blank" rel="noopener noreferrer">
              Consumer Financial Protection Bureau (CFPB)
            </a> - Tools and tips for managing debt and credit.
          </li>
          <li>
            <a href="https://www.mint.com" target="_blank" rel="noopener noreferrer">
              Mint
            </a> - Free budget tracker and financial planner.
          </li>
          <li>
            <a href="https://www.nfcc.org" target="_blank" rel="noopener noreferrer">
              National Foundation for Credit Counseling (NFCC)
            </a> - Professional credit counseling services.
          </li>
          <li>
            <a href="https://www.psychologytoday.com" target="_blank" rel="noopener noreferrer">
              Psychology Today’s Financial Therapy Directory
            </a> - Find a financial therapist near you.
          </li>
          <li>
            <a href="https://www.youneedabudget.com" target="_blank" rel="noopener noreferrer">
              You Need a Budget (YNAB)
            </a> - Financial literacy and budgeting tool.
          </li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h3>How It Works</h3>
        <p>Our program follows a step-by-step process to guide you through your financial journey:</p>
        <ol>
          <li>
            <strong>Initial Consultation:</strong> Schedule an initial session with a financial therapist to discuss your goals 
            and challenges.
          </li>
          <li>
            <strong>Personalized Plan:</strong> Based on your needs, your therapist will help create a personalized financial plan.
          </li>
          <li>
            <strong>Ongoing Support:</strong> Attend regular sessions to receive continued support, adjust goals, and manage any 
            new challenges.
          </li>
          <li>
            <strong>Review and Reflect:</strong> Every few months, review your progress and celebrate milestones along the way.
          </li>
        </ol>
      </section>

      {/* Learn More Button */}
      <div className="button-container">
        <button className="learn-more-button">Learn More</button>
      </div>

      {/* Contact Information Section */}
      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, feel free to reach out to our team:</p>
        <ul>
          <li>Email: <a href="mailto:financialtherapy@yourservice.com">financialtherapy@yourservice.com</a></li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
        </ul>
      </section>
    </div>
  );
};

export default FinancialTherapy;
