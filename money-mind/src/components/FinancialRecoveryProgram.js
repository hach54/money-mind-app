import React from 'react';
import '../styles/FinancialRecoveryProgram.css'; // External CSS for styling

const FinancialRecoveryProgram = () => {
  return (
    <div className="financial-recovery-container">
      <h2>Financial Recovery Program</h2>
      <p>
        Our Financial Recovery Program is designed to help individuals and families who have experienced financial trauma. 
        Whether you’ve faced unexpected expenses, debt, or job loss, our program provides the support and resources 
        needed to regain financial stability and peace of mind.
      </p>

      {/* Key Aspects Section */}
      <section className="key-aspects-section">
        <h3>Key Aspects of the Program</h3>
        <ul>
          <li>Recover from financial setbacks such as bankruptcy, debt, or foreclosure.</li>
          <li>Develop a personalized recovery plan tailored to your financial situation.</li>
          <li>Access professional financial counseling and emotional support.</li>
          <li>Build healthy financial habits to prevent future challenges.</li>
          <li>Receive ongoing guidance through one-on-one coaching sessions.</li>
        </ul>
      </section>

      {/* Resources for Recovery Section */}
      <section className="resources-section">
        <h3>Resources for Financial Recovery</h3>
        <p>
          We offer a variety of tools and services to aid your financial recovery journey. Here are some recommended resources 
          to help you get started:
        </p>
        <ul>
          <li>
            <a href="https://www.nfcc.org" target="_blank" rel="noopener noreferrer">
              National Foundation for Credit Counseling (NFCC)
            </a> - Professional credit and debt management services.
          </li>
          <li>
            <a href="https://www.debt.org" target="_blank" rel="noopener noreferrer">
              Debt.org
            </a> - Information on debt relief options and support.
          </li>
          <li>
            <a href="https://www.usa.gov/debt" target="_blank" rel="noopener noreferrer">
              USA.gov - Debt and Financial Assistance
            </a> - Federal programs offering financial aid and debt relief.
          </li>
          <li>
            <a href="https://www.financialpeace.com" target="_blank" rel="noopener noreferrer">
              Financial Peace University
            </a> - Courses on building wealth and becoming debt-free.
          </li>
          <li>
            <a href="https://www.oprah.com/money/debt-recovery-plan" target="_blank" rel="noopener noreferrer">
              Debt Recovery Plan by Oprah
            </a> - Strategies for overcoming debt and rebuilding your financial health.
          </li>
        </ul>
      </section>

      {/* Step-by-Step Recovery Process Section */}
      <section className="recovery-process-section">
        <h3>Step-by-Step Financial Recovery Process</h3>
        <p>Our program follows a structured approach to help you rebuild your finances:</p>
        <ol>
          <li>
            <strong>Initial Assessment:</strong> Understand your current financial situation and set recovery goals.
          </li>
          <li>
            <strong>Create a Recovery Plan:</strong> Work with a financial counselor to design a step-by-step plan to address 
            your financial challenges.
          </li>
          <li>
            <strong>Implement the Plan:</strong> Take action by following the recovery steps, such as debt management, 
            budgeting, or savings strategies.
          </li>
          <li>
            <strong>Ongoing Support:</strong> Attend regular check-ins with your counselor to track progress and adjust the plan 
            as needed.
          </li>
          <li>
            <strong>Celebrate Milestones:</strong> Recognize and celebrate your financial recovery achievements.
          </li>
        </ol>
      </section>

      {/* Call-to-Action Button */}
      <div className="button-container">
        <button className="learn-more-button">Learn More</button>
      </div>

      {/* Contact Information Section */}
      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>If you have any questions or need assistance, feel free to reach out to our financial recovery team:</p>
        <ul>
          <li>Email: <a href="mailto:financialrecovery@yourservice.com">financialrecovery@yourservice.com</a></li>
          <li>Phone: +1 (555) 987-6543</li>
          <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
        </ul>
      </section>
    </div>
  );
};

export default FinancialRecoveryProgram;
