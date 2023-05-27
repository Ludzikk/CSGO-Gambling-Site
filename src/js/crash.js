const multiplier = document.querySelector(".main-crash__multiplier-text");
const betBtn = document.querySelector(".main-crash__bet");
const withdrawBtn = document.querySelector(".main-crash__bet--withdraw");
const betInput = document.querySelector(".main-crash__input");
const timer = document.querySelector(".main-crash__countdown-timer-seconds");
// const timerLine = document.querySelector(".main-crash__countdown-timerline")
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

const startCrash = () => {
	const crashTimeDivide = Math.floor(Math.random() * 25 + 5);
	const crashTime = Math.floor(Math.random() * 500000);
	const crashAfter = crashTime / crashTimeDivide;

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
	}, speed);

	setTimeout(() => {
		stopCrash();
	}, Math.floor(crashAfter));
};

const stopCrash = () => {
	clearInterval(crashGoing);
	crashGoingStatus = false;
	multiplierAmount = 1;
	secondTime = 15;
	didBet = false;
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
	// timerLine.classList.add("crash-time-line-start")

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
	if (betInput.value !== "" && crashGoingStatus === false && didBet === false) {
		didBet = true;
		lastBetAmount = betAmount;
        betInput.value = 0
		betAudio.play();
		removeBalance();
	}
};

const removeBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - betAmount;
	balanceAmount.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
};

const addMoneyToBalance = () => {
	if (didBet === true && crashGoingStatus === true) {
		winAudio.play();
		didBet = false;
		betAmount *= multiplierAmount;
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue + betAmount;
		balanceAmount.textContent = value.toFixed(2);
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

setTimeout(() => {
	startCrash();
}, 15000);

startTimerOnEnter();

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
