// Static conversion rates (example rates)
const rates = {
  USD: { EUR: 0.85, INR: 74.5 },
  EUR: { USD: 1.18, INR: 88 },
  INR: { USD: 0.013, EUR: 0.011 }
};

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const result = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    result.innerText = "Please enter a valid amount.";
    return;
  }

  if (fromCurrency === toCurrency) {
    result.innerText = `Converted amount: ${amount} ${toCurrency}`;
  } else {
    const conversionRate = rates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    result.innerText = `Converted amount: ${convertedAmount} ${toCurrency}`;
  }
}
