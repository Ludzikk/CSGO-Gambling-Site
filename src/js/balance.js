const balanceAmount = document.querySelector(".nav__list-item-balance-amount");
const depositInput = document.querySelector("#amount");
const depositButton = document.querySelector(".main-dep__middle-deposit");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");

balanceAmount.textContent = localStorage.getItem("Balance");
balanceAmountMobile.textContent = localStorage.getItem("Balance")

const addBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let inputValue = parseFloat(depositInput.value);
	let value = amountValue + inputValue;

	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	depositInput.value = ""
};

depositButton.addEventListener("click", addBalance);
