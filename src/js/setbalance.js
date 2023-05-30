const balanceAmount = document.querySelector(".nav__list-item-balance-amount");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");

const setBalance = () => {
	if (
		localStorage.getItem("Balance") === null ||
		localStorage.getItem("Balance") === NaN
	) {
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	} else {
		balanceAmount.textContent = localStorage.getItem("Balance");
		balanceAmountMobile.textContent = localStorage.getItem("Balance");
	}
};

setBalance();