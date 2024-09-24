

document
  .getElementById("donate_now_btn")
  .addEventListener("click", function () {
    const donateInput = parseFloat(
      document.getElementById("donate_now_input").value
    );
    const donateAmount = parseFloat(
      document.getElementById("donate_amount").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("main_balance").innerText
    );

    if (donateInput <= 0 || isNaN(donateInput)) {
      document.getElementById("income-error").classList.remove("hidden");
      return;
    }

    const newDonateAmount = donateAmount + donateInput;
    document.getElementById("donate_amount").innerText = newDonateAmount;

    const expenseAmount = mainBalance - donateInput;
    document.getElementById("main_balance").innerText = expenseAmount;

    const totle = mainBalance - expenseAmount;

    //  if (mainBalance < totle) {
    //    document.getElementById("logic-error").classList.remove("hidden");
    //    return;
    //  }


    document.getElementById("donate_now_input").value = "";

    //new Div Create
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-6 rounded-lg shadow border border-gray-200";
    historyItem.innerHTML = `
    <h2 class= "text-lg pb-3 text-black font-bold">${totle.toFixed(
      2
    )}  Taka is Donated for famine-2024 at Noakhali, Bangladesh
    </h2>
    <p class= "text-md text-gray-600 font-semibold">${new Date().toLocaleString()}</p>
    `;
    // console.log(historyItem);
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// Donation & History - button)
const historyTab = document.getElementById("history-tab");
const donateTab = document.getElementById("donate_tab");
const historySec = document.getElementById("history-section");
const mainSection = document.getElementById("section");

historyTab.addEventListener("click", function() {
    historyTab.classList.add("text-black", "bg-btn_bg");

    historyTab.classList.remove("text-gray-400", "border-gray-400");
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
