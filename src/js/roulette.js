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
const redButton = document.querySelector(".main-roulette__betbox-bet--red");
const greenButton = document.querySelector(".main-roulette__betbox-bet--green");
const blackButton = document.querySelector(".main-roulette__betbox-bet--black");
let playerBet = 0;
let playerBetAmount;
let spinning = false;
const balanceAmount = document.querySelector(".nav__list-item-balance-amount");

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

		rouletteItems.forEach((item) => {
			let pos = item.getBoundingClientRect();

			if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--red")
			) {
				winningColor = "red";

				const lastDropItem = document.createElement("div");
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--red"
				);

				if (lastDropsChildCount === 6) {
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
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--black"
				);

				if (lastDropsChildCount === 6) {
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
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--green"
				);

				if (lastDropsChildCount === 6) {
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
		betInput.value <= balance &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "red";
		playerBetAmount = betInput.value;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

const betAmountBlack = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value !== 0 &&
		betInput.value <= balance &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "black";
		playerBetAmount = betInput.value;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

const betAmountGreen = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value !== 0 &&
		betInput.value <= balance &&
		playerBet === 0 &&
		spinning === false
	) {
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBet = "green";
		playerBetAmount = betInput.value;

		balanceAmount.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}
};

redButton.addEventListener("click", betAmountRed);
greenButton.addEventListener("click", betAmountGreen);
blackButton.addEventListener("click", betAmountBlack);
