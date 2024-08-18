import React, { useState } from 'react';
import './BudgetTracker.css'; // External CSS for styling

const BudgetTracker = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [newIncome, setNewIncome] = useState({ source: '', amount: 0 });
  const [newExpense, setNewExpense] = useState({ category: '', amount: 0 });

  const handleAddIncome = () => {
    if (newIncome.source && newIncome.amount > 0) {
      setIncomeList([...incomeList, newIncome]);
      setNewIncome({ source: '', amount: 0 });
    }
  };

  const handleAddExpense = () => {
    if (newExpense.category && newExpense.amount > 0) {
      setExpenseList([...expenseList, newExpense]);
      setNewExpense({ category: '', amount: 0 });
    }
  };

  const totalIncome = incomeList.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenseList.reduce((acc, expense) => acc + expense.amount, 0);
  const savings = totalIncome - totalExpenses;

  return (
    <div className="budget-tracker-container">
      <h2>Budget Tracker</h2>
      <p>Monitor your income and expenses to keep your finances in check and reduce financial stress.</p>

      <div className="input-section">
        {/* Income Section */}
        <div className="income-section">
          <h3>Add Income</h3>
          <input
            type="text"
            placeholder="Income Source"
            value={newIncome.source}
            onChange={(e) => setNewIncome({ ...newIncome, source: e.target.value })}
          />
          <input
            type="number"
            placeholder="Income Amount"
            value={newIncome.amount}
            onChange={(e) => setNewIncome({ ...newIncome, amount: Number(e.target.value) })}
          />
          <button onClick={handleAddIncome}>Add Income</button>
        </div>

        {/* Expense Section */}
        <div className="expense-section">
          <h3>Add Expense</h3>
          <input
            type="text"
            placeholder="Expense Category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
          />
          <input
            type="number"
            placeholder="Expense Amount"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: Number(e.target.value) })}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>

      {/* Income and Expense Summary */}
      <div className="summary-section">
        <h3>Income List</h3>
        <ul>
          {incomeList.map((income, index) => (
            <li key={index}>
              {income.source}: ${income.amount}
            </li>
          ))}
        </ul>

        <h3>Expense List</h3>
        <ul>
          {expenseList.map((expense, index) => (
            <li key={index}>
              {expense.category}: ${expense.amount}
            </li>
          ))}
        </ul>

        {/* Total Income, Expenses, and Savings */}
        <div className="budget-summary">
          <p><strong>Total Income:</strong> ${totalIncome}</p>
          <p><strong>Total Expenses:</strong> ${totalExpenses}</p>
          <p><strong>Savings Left:</strong> ${savings}</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
