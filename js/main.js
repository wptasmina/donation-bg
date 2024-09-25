

document
  .getElementById("donate_now_btn")
  .addEventListener("click", function () {
    const addManyInput = getInputValueById("add-donate_input");
    const donateAmount = getTextValueById("donate_amount");
    const mainBalance = getTextValueById("main_balance");

    if (addManyInput <= 0 || isNaN(addManyInput)) {
      // document.getElementById("income-error").classList.remove("hidden");
      showError("income-error");
      return;
    }

      if (addManyInput > mainBalance) {
          alert("no amount.");
          return;
      }

    const newDonateAmount = addManyInput + donateAmount;
    document.getElementById("donate_amount").innerText = newDonateAmount;

    const expenseAmount = mainBalance - addManyInput;
    document.getElementById("main_balance").innerText = expenseAmount;

    const totleExpense = mainBalance - expenseAmount;

    document.getElementById("add-donate_input").value = "";
    addToHistory(totleExpense);

    poppupBtn("donate_now_btn");
    
  });

 const popputButton = document.getElementById("close-btn");
 const popputcontainer = document.getElementById("poppup-btn");

 popputButton.addEventListener("click", function () {
    popputcontainer.classList.add("hidden");
 });
// Donation & History - button)
const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donate_tab");
const historySec = document.getElementById("history-section");
const mainSection = document.getElementById("section");

historyTab.addEventListener("click", function () {
  historyTab.classList.add("text-black", "bg-btn_bg");

  historyTab.classList.remove ("text-gray-400", "border-gray-400");
  donateTab.classList.remove("text-black", "bg-btn_bg");
  donateTab.classList.add("text-gray-400", "border-gray-400");

    historySec.classList.remove("hidden");
    mainSection.classList.add("hidden");

});

// Donation Button
donateTab.addEventListener("click", function () {
  donateTab.classList.add("text-black", "bg-btn_bg");

  donateTab.classList.remove("text-gray-400", "border-gray-400");
  historyTab.classList.remove("text-black", "bg-btn_bg");
  historyTab.classList.add("text-gray-400", "border-gray-400");

  mainSection.classList.remove("hidden");
  historySec.classList.add("hidden");

});

 // lood at Noakhali, Bangladesh
document.getElementById("donate-finy").addEventListener("click", function () {
  const addAmpuntInput = getInputValueById("add-amount-input");
  const donationAmount = getTextValueById("donation_amount");
  const balance = getTextValueById("main_balance");

  if (addAmpuntInput <= 0 || isNaN(addAmpuntInput)) {
    showError("finy-income-error");
    return;
  }

  if (addAmpuntInput > balance) {
    alert("Not saficence amount.");
    return;
  }

  const totleDonate = addAmpuntInput + donationAmount;
  document.getElementById("donation_amount").innerText = totleDonate;

  const mainBalanceExpense = balance - addAmpuntInput;
  document.getElementById("main_balance").innerText = mainBalanceExpense;

  const totleExpense = balance - mainBalanceExpense;

  document.getElementById("add-amount-input").value = "";
  addToHistory(totleExpense);
  poppupBtn("donate-finy");
});

// Quota Movement
document
  .getElementById("add-quota-movement")
  .addEventListener("click", function () {
    const addMovementInput = getInputValueById("input-add-movement");
    const donatieAmount = getTextValueById("donate-main-amount");
    const balanceMain = getTextValueById("main_balance");

    if (addMovementInput <= 0 || isNaN(addMovementInput)) {
      showError("medical-income-error");
      return;
    }

    if (addMovementInput > balanceMain) {
      alert("Not saficence amount.");
      return;
    }

    const totleDonation = addMovementInput + donatieAmount;
    document.getElementById("donate-main-amount").innerText = totleDonation;

    const mainBalanceExpenses = balanceMain - addMovementInput;
    document.getElementById("main_balance").innerText = mainBalanceExpenses;

    const totleExpense = balanceMain - mainBalanceExpenses;

    document.getElementById("input-add-movement").value = "";
    addToHistory(totleExpense);

    poppupBtn("add-quota-movement");
  });

// Flood Relief in Sylhet,Bangladesh
document
  .getElementById("donate-flood-btn")
  .addEventListener("click", function () {
    const addMovementInput = getInputValueById("donate-flood-input");
    const donatieAmount = getTextValueById("flood-donate-amount");
    const balanceMain = getTextValueById("main_balance");

    if (addMovementInput <= 0 || isNaN(addMovementInput)) {
      showError("sylet-income-error");
      return;
    }

    if (addMovementInput > balanceMain) {
      alert("Not saficence amount.");
      return;
    }

    const totleDonation = addMovementInput + donatieAmount;
    document.getElementById("flood-donate-amount").innerText = totleDonation;

    const mainBalanceExpenses = balanceMain - addMovementInput;
    document.getElementById("main_balance").innerText = mainBalanceExpenses;

    const totleExpense = balanceMain - mainBalanceExpenses;

    document.getElementById("donate-flood-input").value = "";
    addToHistory(totleExpense);

    poppupBtn("donate-flood-btn");
  });
