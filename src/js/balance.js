const balanceAmount = document.querySelector(".nav__list-item-balance-amount");
const depositInput = document.querySelector("#amount");
const depositButton = document.querySelector(".main-dep__middle-deposit");

balanceAmount.textContent = localStorage.getItem("Balance");

const addBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let inputValue = parseFloat(depositInput.value);
	let value = amountValue + inputValue;

	balanceAmount.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
};

depositButton.addEventListener("click", addBalance);
