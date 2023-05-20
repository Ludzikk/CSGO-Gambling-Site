const balanceAmount = document.querySelector(".nav__list-item-balance-amount");

const setBalance = () => {
	if (localStorage.getItem("Balance") === null) {
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	} else {
		balanceAmount.textContent = localStorage.getItem("Balance");
	}
};

setBalance();
