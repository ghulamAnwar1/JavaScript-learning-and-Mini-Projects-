# 💰 Expense Tracker

A clean, animated expense tracker built with vanilla HTML, CSS, and JavaScript — track income and expenses, see your balance update live, and export a PDF statement anytime.

**🔗 Live Demo:** [https://expense-tracker-one-rose-42.vercel.app/](https://expense-tracker-one-rose-42.vercel.app/)

## Features

- ➕ Add transactions with description and amount (positive = income, negative = expense)
- 🗑️ Delete any transaction instantly
- 📊 Auto-calculated balance, total income, and total expenses
- 💾 Data persists across page refreshes using `localStorage`
- 📄 Download a full PDF statement of all transactions with one click
- 🎨 Dark, gold-accented UI with subtle animations

## How to use

1. Open the [live site](https://expense-tracker-one-rose-42.vercel.app/)
2. Enter a description (e.g. "Salary" or "Groceries") in the **Text** field
3. Enter an amount:
   - Use a **positive number** for income (e.g. `1500`)
   - Use a **negative number** for an expense (e.g. `-45`)
4. Click **Add transaction** — your balance, income, and expense totals update instantly
5. Click the **x** button next to any transaction to delete it
6. Click **Download Slip (PDF)** at the bottom to export a full statement of your transactions as a PDF file

## Tech stack

- HTML5
- CSS3 (custom properties, animations, responsive layout)
- Vanilla JavaScript (DOM manipulation, localStorage, event delegation)
- [jsPDF](https://github.com/parallax/jsPDF) for client-side PDF generation

## Run it locally

```bash
git clone https://github.com/ghulamAnwar1/JavaScript-learning-and-Mini-Projects-.git
cd JavaScript-learning-and-Mini-Projects-/expense-tracker
```

Then just open `index.html` in your browser, or use the VS Code Live Server extension.

---
Part of my [JavaScript Learning & Mini Projects](https://github.com/ghulamAnwar1/JavaScript-learning-and-Mini-Projects-) repo.
