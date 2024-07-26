import React, { useState } from 'react';

const BudgetTracker = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const savings = income - expenses;

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Monitor your income and expenses to keep your finances in check and reduce financial stress.</p>
      <input
        type="number"
        placeholder="Income"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Expenses"
        value={expenses}
        onChange={(e) => setExpenses(Number(e.target.value))}
      />
      <div>
        <p>Total Income: ${income}</p>
        <p>Total Expenses: ${expenses}</p>
        <p>Savings Left: ${savings}</p>
      </div>
    </div>
  );
};

export default BudgetTracker;
