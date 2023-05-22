const rouletteDiv = document.querySelector(".main-roulette__list");
const rouletteItems = document.querySelectorAll(".main-roulette__list-item");
let winningColor;
let elem = document.querySelector(".main-roulette__arrow");
let elemOffset = elem.getBoundingClientRect();
let middleLeft = elemOffset.left + 2;
let middleRight = elemOffset.right - 2;
const lastDrops = document.querySelector(".main-roulette__lastdrops");
const seconds = document.querySelector(
	".main-roulette__countdown-timer-seconds"
);
let secondTime = 10;
const betInput = document.querySelector("#bet");
const redButton = document.querySelector(
	".main-roulette__betbuttons-button--red"
);
const greenButton = document.querySelector(
	".main-roulette__betbuttons-button--green"
);
const blackButton = document.querySelector(
	".main-roulette__betbuttons-button--black"
);
let playerBet = 0;
let playerBetAmount;
let spinning = false;
let lastBetAmount = 0;
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
const totalAmountOfBetsForRed = document.querySelector("#totalvaluetextred");
const totalAmountOfBetsBalanceForRed = document.querySelector("#totalvaluered");
const totalAmountOfBetsForBlack = document.querySelector(
	"#totalvaluetextblack"
);
const totalAmountOfBetsBalanceForBlack =
	document.querySelector("#totalvalueblack");
const totalAmountOfBetsForGreen = document.querySelector(
	"#totalvaluetextgreen"
);
const totalAmountOfBetsBalanceForGreen =
	document.querySelector("#totalvaluegreen");
let totalBetAmount = 0;

const spinRoulette = () => {
	const randomNum = Math.floor(Math.random() * 25000 + 5000);
	spinning = true;

	rouletteDiv.classList.add("spin");
	rouletteDiv.style.transform = `translate3d(-${randomNum}px, 0, 0)`;
};

setInterval(() => {
	secondTime--;
	seconds.textContent = secondTime + ":";
}, 1000);

setInterval(() => {
	if (secondTime === 0) {
		secondTime = 10;
		seconds.textContent = secondTime + ":";
	}
}, 100);

setInterval(() => {
	spinRoulette();

	setTimeout(() => {
		const lastDropsChildCount = lastDrops.childElementCount;
		spinning = false;
		totalAmountOfBetsForBlack.textContent = "0";
		totalAmountOfBetsForRed.textContent = "0";
		totalAmountOfBetsForGreen.textContent = "0";
		totalAmountOfBetsBalanceForBlack.textContent = "0.00"
		totalAmountOfBetsBalanceForRed.textContent = "0.00"
		totalAmountOfBetsBalanceForGreen.textContent = "0.00"
		totalBetAmount = 0;
	
		rouletteItems.forEach((item) => {
			let pos = item.getBoundingClientRect();

			if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--red")
			) {
				winningColor = "red";

				const lastDropItem = document.createElement("div");
				const lastDropItemImg = document.createElement("img");
				lastDropItemImg.setAttribute(
					"class",
					"main-roulette__lastdrops-item-img"
				);
				lastDropItemImg.setAttribute("alt", "Coin Icon");
				lastDropItemImg.setAttribute("src", "./dist/img/other/coin.png");
				lastDropItem.append(lastDropItemImg);
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--red"
				);

				if (lastDropsChildCount === 10) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}

				if (playerBet === "red") {
					playerBetAmount = playerBetAmount * 2;
					console.log(playerBetAmount);
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmount;

					balanceAmount.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);
				}
			} else if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--black")
			) {
				winningColor = "black";

				const lastDropItem = document.createElement("div");
				const lastDropItemImg = document.createElement("img");
				lastDropItemImg.setAttribute(
					"class",
					"main-roulette__lastdrops-item-img"
				);
				lastDropItemImg.setAttribute("alt", "Coin Icon");
				lastDropItemImg.setAttribute("src", "./dist/img/other/coin.png");
				lastDropItem.append(lastDropItemImg);
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--black"
				);

				if (lastDropsChildCount === 10) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}
				if (playerBet === "black") {
					playerBetAmount = playerBetAmount * 2;
					console.log(playerBetAmount);
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmount;

					balanceAmount.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);
				}
			} else if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--green")
			) {
				winningColor = "green";

				const lastDropItem = document.createElement("div");
				const lastDropItemImg = document.createElement("img");
				lastDropItemImg.setAttribute(
					"class",
					"main-roulette__lastdrops-item-img"
				);
				lastDropItemImg.setAttribute("alt", "Coin Icon");
				lastDropItemImg.setAttribute("src", "./dist/img/other/coin.png");
				lastDropItem.append(lastDropItemImg);
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--green"
				);

				if (lastDropsChildCount === 10) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}
				if (playerBet === "green") {
					playerBetAmount = playerBetAmount * 14;
					console.log(playerBetAmount);
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmount;

					balanceAmount.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);
				}
			}
		});

		playerBet = 0;
	}, 6000);

	setTimeout(() => {
		rouletteDiv.classList.remove("spin");
		rouletteDiv.style.transform = `translate3d(0, 0, 0)`;
	}, 9900);
}, 10000);

const betAmountRed = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value !== 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "red";
		playerBetAmount = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = "";
		totalBetAmount++;
		totalAmountOfBetsForRed.textContent = totalBetAmount;
		totalAmountOfBetsBalanceForRed.textContent = playerBetAmount;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

const betAmountBlack = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value !== 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "black";
		playerBetAmount = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = "";
		totalBetAmount++;
		totalAmountOfBetsForBlack.textContent = totalBetAmount;
		totalAmountOfBetsBalanceForBlack.textContent = playerBetAmount;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};
const betAmountGreen = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value !== 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "green";
		playerBetAmount = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = "";
		totalBetAmount++;
		totalAmountOfBetsForGreen.textContent = totalBetAmount;
		totalAmountOfBetsBalanceForGreen.textContent = playerBetAmount;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

redButton.addEventListener("click", betAmountRed);
greenButton.addEventListener("click", betAmountGreen);
blackButton.addEventListener("click", betAmountBlack);

clearBtn.addEventListener("click", () => {
	betInput.value = "";
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
