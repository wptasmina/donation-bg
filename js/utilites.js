
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
  
let poppup = document
    .getElementById("poppup-btn");
    poppup.classList.remove("hidden");
    poppup.classList.add("flex");

}
// PouPUP Button 
// function porpupContainer(){
  
// document.getElementById("porpup-container").classList.remove("hidden");

// }

// createElement New-div Add To History Button
function addToHistory(totleExpense, title) {
        const historyItem = document.createElement("div");
        historyItem.className =
          "bg-white p-6 rounded-lg shadow border border-gray-200";

        historyItem.innerHTML = `
        <h2 class= "lg:text-lg text-sm pb-4 text-black font-bold">${totleExpense.toFixed(
          2
        )}  

          ${title}
        
        </h2>
      <p class= "lg:text-md text-sm text-gray-600 font-semibold">${new Date().toLocaleString()}</p>
    `;
        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

