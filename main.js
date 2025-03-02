document.addEventListener("DOMContentLoaded", () => {
    const transactionList = document.getElementById("transactionList");
    const balanceDisplay = document.getElementById("balance");
    let balance = 0;

    document.getElementById("addTransaction").addEventListener("click", () => {
        const description = document.getElementById("description").value.trim();
        const amount = parseFloat(document.getElementById("amount").value);
        
        if (description === "" || isNaN(amount)) return;
        
        const li = document.createElement("li");
        li.textContent = `${description}: $${amount.toFixed(2)}`;
        
        if (amount < 0) {
            li.style.color = "red";
        } else {
            li.style.color = "green";
        }
        
        transactionList.appendChild(li);
        balance += amount;
        balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
        
        document.getElementById("description").value = "";
        document.getElementById("amount").value = "";
    });
});
