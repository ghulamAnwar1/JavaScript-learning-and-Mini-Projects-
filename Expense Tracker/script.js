let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("transaction-form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");
const list = document.getElementById("transaction-list");
const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const slipBtn = document.getElementById("generate-slip-btn");

function updateUI() {
  list.innerHTML = "";

  transactions.forEach((t) => {
    const li = document.createElement("li");
    li.className = `transaction-item ${t.amount < 0 ? "expense" : ""}`;

    li.innerHTML = `
      <span>${t.text}</span>
      <span>${t.amount < 0 ? "-" : "+"}$${Math.abs(t.amount).toFixed(2)}</span>
      <button class="delete-btn" data-id="${t.id}">x</button>
    `;

    list.appendChild(li);
  });

  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((sum, val) => sum + val, 0);
  const income = amounts
    .filter((val) => val > 0)
    .reduce((sum, val) => sum + val, 0);
  const expense = amounts
    .filter((val) => val < 0)
    .reduce((sum, val) => sum + val, 0);

  balanceEl.textContent = `$${total.toFixed(2)}`;
  incomeEl.textContent = income.toFixed(2);
  expenseEl.textContent = Math.abs(expense).toFixed(2);

  localStorage.setItem("transactions", JSON.stringify(transactions));
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading

  const text = textInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (text === "" || isNaN(amount) || amount === 0) {
    alert("Please enter a valid description and a non-zero amount.");
    return;
  }

  const transaction = {
    id: Date.now(), // simple unique id
    text,
    amount,
  };

  transactions.push(transaction);

  // Reset the form
  textInput.value = "";
  amountInput.value = "";

  updateUI();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = Number(e.target.getAttribute("data-id"));
    transactions = transactions.filter((t) => t.id !== id);
    updateUI();
  }
});

function generateSlip() {
  if (transactions.length === 0) {
    alert("No transactions yet — add one before generating a slip.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Expense Tracker - Statement", 14, 20);

  // Generated date
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 28);

  doc.setLineWidth(0.4);
  doc.line(14, 33, 196, 33);

  // Table header
  let y = 43;
  doc.setFont("helvetica", "bold");
  doc.text("Description", 14, y);
  doc.text("Type", 120, y);
  doc.text("Amount", 165, y);
  y += 8;
  doc.setFont("helvetica", "normal");

  // Table rows
  transactions.forEach((t) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(String(t.text), 14, y);
    doc.text(t.amount < 0 ? "Expense" : "Income", 120, y);
    doc.text(
      `${t.amount < 0 ? "-" : "+"}$${Math.abs(t.amount).toFixed(2)}`,
      165,
      y,
    );
    y += 8;
  });

  y += 4;
  doc.line(14, y, 196, y);
  y += 10;

  // Totals (reusing the same calculation logic as updateUI)
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((sum, val) => sum + val, 0);
  const income = amounts
    .filter((val) => val > 0)
    .reduce((sum, val) => sum + val, 0);
  const expense = amounts
    .filter((val) => val < 0)
    .reduce((sum, val) => sum + val, 0);

  doc.setFont("helvetica", "bold");
  doc.text(`Total Income: $${income.toFixed(2)}`, 14, y);
  y += 8;
  doc.text(`Total Expense: $${Math.abs(expense).toFixed(2)}`, 14, y);
  y += 10;
  doc.setFontSize(13);
  doc.text(`Balance: $${total.toFixed(2)}`, 14, y);

  doc.save(`expense-slip-${Date.now()}.pdf`);
}

slipBtn.addEventListener("click", generateSlip);

updateUI();
