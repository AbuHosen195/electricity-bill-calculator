function calculateElectricityBill(units) {
  const vatRate = 0.2; // 20% VAT rate
  let totalBill = 0;

  if (units <= 50) {
    totalBill = units * 0.5;
  } else if (units <= 150) {
    totalBill = 50 * 0.5 + (units - 50) * 0.75;
  } else if (units <= 250) {
    totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
  } else {
    totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
  }

  // Adding VAT
  const totalBillWithVat = totalBill * (1 + vatRate);

  return totalBillWithVat;
}

document
  .getElementById("electricityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const unitsInput = document.getElementById("units");
    const unitsConsumed = parseFloat(unitsInput.value);

    if (!isNaN(unitsConsumed) && unitsConsumed >= 0) {
      const bill = calculateElectricityBill(unitsConsumed);
      document.getElementById(
        "result"
      ).innerText = `The electricity bill for ${unitsConsumed} units is ${bill.toFixed(
        2
      )} taka including VAT.`;
    } else {
      document.getElementById("result").innerText =
        "Please enter a valid number of units.";
    }
  });
