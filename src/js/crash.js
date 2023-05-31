const multiplier = document.querySelector(".main-crash__multiplier-text");
const betBtn = document.querySelector(".main-crash__bet");
const withdrawBtn = document.querySelector(".main-crash__bet--withdraw");
const betInput = document.querySelector(".main-crash__input");
const timer = document.querySelector(".main-crash__countdown-timer-seconds");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const clearBtn = document.querySelector("#clear");
const lastBtn = document.querySelector("#last");
const plusOneBtn = document.querySelector("#plus1");
const plusTenBtn = document.querySelector("#plus10");
const plusOneHundredBtn = document.querySelector("#plus100");
const plusOneThousandBtn = document.querySelector("#plus1000");
const halfBtn = document.querySelector("#half");
const timesTwoBtn = document.querySelector("#x2");
const maxBtn = document.querySelector("#max");
const winAudio = new Audio("./dist/audio/win.wav");
const betAudio = new Audio("./dist/audio/bet.wav");
const lastDropsBox = document.querySelector(".main-crash__lastdrops");
const withdrawAmount = document.querySelector(".main-crash__withdrawamount");
let multiplierAmount = 1;
let speed = 100;
let crashGoing;
let crashGoingStatus = false;
let secondTime = 15;
let timerOnStart;
let timerOnStartCheck;
let timerNormal;
let timerNormalCheck;
let betAmount;
let didBet = false;
let lastBetAmount;
let withdrawed = false;
let moveUp;

const startCrash = () => {
	const crashTimeDivide = Math.floor(Math.random() * 25 + 5);
	const crashTime = Math.floor(Math.random() * 500000);
	const crashAfter = crashTime / crashTimeDivide;

	multiplier.style.color = "white";
	crashGoingStatus = true;
	timer.classList.remove("crash-time-text-start");
	// console.log(Math.floor(crashAfter));

	setTimeout(() => {
		clearInterval(timerOnStart);
		clearInterval(timerOnStartCheck);
		clearInterval(timerNormal);
		clearInterval(timerNormalCheck);
	}, 100);

	crashGoing = setInterval(() => {
		if (multiplierAmount < 2) {
			multiplierAmount += 0.01;
		} else if (multiplierAmount > 2 && multiplierAmount < 3) {
			multiplierAmount += 0.02;
		} else if (multiplierAmount > 3 && multiplierAmount < 4) {
			multiplierAmount += 0.03;
		} else if (multiplierAmount > 4 && multiplierAmount < 5) {
			multiplierAmount += 0.04;
		} else if (multiplierAmount > 5 && multiplierAmount < 6) {
			multiplierAmount += 0.05;
		} else if (multiplierAmount > 6 && multiplierAmount < 10) {
			multiplierAmount += 0.06;
		} else if (multiplierAmount > 10 && multiplierAmount < 20) {
			multiplierAmount += 0.08;
		} else if (multiplierAmount > 20 && multiplierAmount < 50) {
			multiplierAmount += 0.12;
		} else if (multiplierAmount > 50) {
			multiplierAmount += 0.18;
		}

		multiplier.textContent = multiplierAmount.toFixed(2) + "x";

		if (withdrawed === false && betAmount > 0 && crashGoingStatus === true) {
			const withdrawPlayerAmount = betAmount * multiplierAmount;
			withdrawAmount.textContent = withdrawPlayerAmount.toFixed(2);
		} else if (withdrawed === true) {
			withdrawAmount.textContent = "0.00";
		}
	}, speed);

	setTimeout(() => {
		stopCrash();
	}, Math.floor(crashAfter));
};

const stopCrash = () => {
	if (lastDropsBox.childElementCount === 8) {
		lastDropsBox.firstElementChild.remove();

		const lastDropsItem = document.createElement("p");
		lastDropsItem.setAttribute("class", "main-crash__lastdropitem");
		lastDropsItem.textContent = multiplierAmount.toFixed(2) + "x";

		if (multiplierAmount >= 2 && multiplierAmount < 4) {
			lastDropsItem.style.color = "#00a941";
		} else if (multiplierAmount >= 4 && multiplierAmount < 8) {
			lastDropsItem.style.color = "yellow";
		} else if (multiplierAmount >= 8) {
			lastDropsItem.style.color = "#0d8aff";
		} else if (multiplierAmount < 1.2) {
			lastDropsItem.style.color = "#de4c41";
		}

		lastDropsBox.append(lastDropsItem);
	} else {
		const lastDropsItem = document.createElement("p");
		lastDropsItem.setAttribute("class", "main-crash__lastdropitem");
		lastDropsItem.textContent = multiplierAmount.toFixed(2) + "x";

		if (multiplierAmount >= 2 && multiplierAmount < 4) {
			lastDropsItem.style.color = "#00a941";
		} else if (multiplierAmount >= 4 && multiplierAmount < 8) {
			lastDropsItem.style.color = "yellow";
		} else if (multiplierAmount >= 8) {
			lastDropsItem.style.color = "#0d8aff";
		} else if (multiplierAmount < 1.2) {
			lastDropsItem.style.color = "#de4c41";
		}

		lastDropsBox.append(lastDropsItem);
	}

	clearInterval(crashGoing);
	crashGoingStatus = false;
	multiplierAmount = 1;
	secondTime = 15;
	didBet = false;
	multiplier.style.color = "#de4c41";
	betAmount = 0;
	withdrawAmount.textContent = "0.00";
	startTimer();

	setTimeout(() => {
		startCrash();
	}, 15000);
};

const startTimer = () => {
	timer.classList.add("crash-time-text-start");

	timerNormal = setInterval(() => {
		secondTime--;
		timer.textContent = secondTime + "s";
	}, 1000);

	timerNormalCheck = setInterval(() => {
		if (secondTime === 0) {
			secondTime = 15;
			timer.textContent = secondTime + "s";
		}
	});
};

const startTimerOnEnter = () => {
	timer.classList.add("crash-time-text-start");

	timerOnStart = setInterval(() => {
		secondTime--;
		timer.textContent = secondTime + "s";
	}, 1000);

	timerOnStartCheck = setInterval(() => {
		if (secondTime === 0) {
			secondTime = 15;
			timer.textContent = secondTime + "s";
		}
	});
};

const playerBet = () => {
	const balance = localStorage.getItem("Balance");

	if (betInput.value > 0 && crashGoingStatus === false && didBet === false && betInput.value <= parseFloat(balance)) {
		didBet = true;
		lastBetAmount = betAmount;
		betInput.value = 0;
		betAudio.play();
		withdrawed = false;
		withdrawAmount.textContent = Number(betAmount).toFixed(2);
		removeBalance();
	}
};

const removeBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - betAmount;
	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
};

const addMoneyToBalance = () => {
	if (didBet === true && crashGoingStatus === true) {
		winAudio.play();
		didBet = false;
		withdrawed = true;
		betAmount *= multiplierAmount;
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
	}
};

const createRandomLastDrops = () => {
	for (let i = 0; i < 8; i++) {
		const randomValue = Math.random() * 4 + 1;
		const lastDropsItem = document.createElement("p");
		lastDropsItem.setAttribute("class", "main-crash__lastdropitem");
		lastDropsItem.textContent = randomValue.toFixed(2) + "x";

		if (randomValue >= 2 && randomValue < 4) {
			lastDropsItem.style.color = "#00a941";
		} else if (randomValue >= 4 && randomValue < 8) {
			lastDropsItem.style.color = "yellow";
		} else if (randomValue >= 8) {
			lastDropsItem.style.color = "#0d8aff";
		} else if (randomValue < 1.2) {
			lastDropsItem.style.color = "#de4c41";
		}

		lastDropsBox.append(lastDropsItem);
	}
};

setTimeout(() => {
	startCrash();
}, 15000);

startTimerOnEnter();
createRandomLastDrops();

betBtn.addEventListener("click", () => {
	betAmount = betInput.value;
	playerBet();
});

withdrawBtn.addEventListener("click", () => {
	addMoneyToBalance();
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
