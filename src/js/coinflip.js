const coinRed = document.querySelector(".main-coinflip__red");
const coinBlack = document.querySelector(".main-coinflip__black");
const redBtn = document.querySelector(".main-coinflip__button--red");
const blackBtn = document.querySelector(".main-coinflip__button--black");
const betInput = document.querySelector(".main-coinflip__input");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const winAudio = new Audio("./dist/audio/win.wav");
const betAudio = new Audio("./dist/audio/bet.wav");
const balanceAmount = document.querySelector(".nav__list-item-balance-amount");
const clearBtn = document.querySelector("#clear");
const lastBtn = document.querySelector("#last");
const plusOneBtn = document.querySelector("#plus1");
const plusTenBtn = document.querySelector("#plus10");
const plusOneHundredBtn = document.querySelector("#plus100");
const plusOneThousandBtn = document.querySelector("#plus1000");
const halfBtn = document.querySelector("#half");
const timesTwoBtn = document.querySelector("#x2");
const maxBtn = document.querySelector("#max");
let winningColor;
let playerColor;
let betAmount = 0;
let lastBetAmount = 0;
let flipping = false;
let moveUp;

const setWinningCoin = () => {
	const randomNum = Math.floor(Math.random() * 2);

	flipping = true;
	removeBalance();

	if (randomNum === 0) {
		coinRed.classList.add("coinflip-red");
		coinBlack.classList.add("coinflip-black");
		winningColor = "red";

		setTimeout(() => {
			coinRed.style.zIndex = "1";
		}, 3500);
	} else if (randomNum === 1) {
		coinRed.classList.add("coinflip-red");
		coinBlack.classList.add("coinflip-black");
		winningColor = "black";

		setTimeout(() => {
			coinRed.style.zIndex = "0";
		}, 3500);
	}

	setTimeout(() => {
		coinRed.classList.remove("coinflip-red");
		coinBlack.classList.remove("coinflip-black");
		flipping = false;
		addMoneyToBalance();
	}, 6000);
};

const addMoneyToBalance = () => {
	if (playerColor === winningColor) {
		winAudio.play();
		betAmount *= 2;
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue + betAmount;
		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);

		const winPopUp = document.createElement("p");
		winPopUp.setAttribute("class", "win");
		winPopUp.textContent = betAmount.toFixed(2);
		const randomFromTop = Math.floor(Math.random() * 30 + 20);
		const randomFromLeft = Math.floor(Math.random() * 35 + 30);

		winPopUp.style.top = `${randomFromTop}%`;
		winPopUp.style.left = `${randomFromLeft}%`;

		document.body.append(winPopUp);

		let moveUpValue = randomFromTop;

		moveUp = setInterval(() => {
			moveUpValue -= 0.5;
			winPopUp.style.top = `${moveUpValue}%`;
		}, 100);

		setTimeout(() => {
			document.body.lastElementChild.remove();
			clearInterval(moveUp);
		}, 2000);

		betAmount = 0;
	}
};

const removeBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - betAmount;
	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
};

redBtn.addEventListener("click", () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value > 0 &&
		flipping === false &&
		betInput.value <= parseFloat(balance)
	) {
		playerColor = "red";
		betAmount = betInput.value;
		betInput.value = 0;
		lastBetAmount = betAmount;
		betAudio.play();
		setWinningCoin();
	}
});

blackBtn.addEventListener("click", () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value > 0 &&
		flipping === false &&
		betInput.value <= parseFloat(balance)
	) {
		playerColor = "black";
		betAmount = betInput.value;
		betInput.value = 0;
		lastBetAmount = betAmount;
		betAudio.play();
		setWinningCoin();
	}
});

clearBtn.addEventListener("click", () => {
	betInput.value = 0;
});

lastBtn.addEventListener("click", () => {
	if (lastBetAmount !== 0) {
		betInput.value = lastBetAmount;
	}
});

plusOneBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value + 1;
});

plusTenBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value + 10;
});

plusOneHundredBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value + 100;
});

plusOneThousandBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value + 1000;
});

halfBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value / 2;
});

timesTwoBtn.addEventListener("click", () => {
	let value = parseFloat(betInput.value);
	betInput.value = value * 2;
});

maxBtn.addEventListener("click", () => {
	betInput.value = localStorage.getItem("Balance");
});
