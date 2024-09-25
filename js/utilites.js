
function getInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
// innerText
function getTextValueById(id) {

   const TextValue = parseFloat(document.getElementById(id).innerText);
    return TextValue;
} 
//ErrorShow 
function showError(id){
     document.getElementById(id).classList.remove("hidden");
}

// PouPUP Button 
function poppupBtn(){
  
document
    .getElementById("poppup-btn")
    .classList.remove("hidden");

}

// create div-Element Add To History
function addToHistory(totleExpense) {
        const historyItem = document.createElement("div");
        historyItem.className =
          "bg-white p-6 rounded-lg shadow border border-gray-200";
        historyItem.innerHTML = `
        <h2 class= "text-lg pb-4 text-black font-bold">${totleExpense.toFixed(
          2
        )}  
          Taka is Donated for famine-2024 at Noakhali, Bangladesh
        </h2>
      <p class= "text-md text-gray-600 font-semibold">${new Date().toLocaleString()}</p>
    `;
        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

