export function formatIndianCurrency(amount) {
  if (isNaN(amount) || amount === null || amount === undefined) return '₹0';
  const number = Number(amount);
  return '₹' + number.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
