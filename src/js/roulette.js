const rouletteDiv = document.querySelector(".main-roulette__list");
const rouletteItems = document.querySelectorAll(".main-roulette__list-item");
let winningColor;
const elem = document.querySelector(".main-roulette__arrow");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
let elemOffset = elem.getBoundingClientRect();
let middleLeft = elemOffset.left + 2;
let middleRight = elemOffset.right - 2;
const lastDrops = document.querySelector(".main-roulette__lastdrops");
const seconds = document.querySelector(
	".main-roulette__countdown-timer-seconds"
);
const miliseconds = document.querySelector(
	".main-roulette__countdown-timer-mili"
);
let secondTime = 15;
let milisecondsTime = 99;
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
let playerBetRed = false;
let playerBetBlack = false;
let playerBetGreen = false;
let playerBetAmountRed = 0;
let playerBetAmountBlack = 0;
let playerBetAmountGreen = 0;
let playersRedBetAmount = 0;
let playersBlackBetAmount = 0;
let playersGreenBetAmount = 0;
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
const playersBetsBlack = document.querySelector(
	".main-roulette__betbuttons-players--black"
);
const playersBetsRed = document.querySelector(
	".main-roulette__betbuttons-players--red"
);
const playersBetsGreen = document.querySelector(
	".main-roulette__betbuttons-players--green"
);
let totalBetAmountBlack = 0;
let totalBetAmountGreen = 0;
let totalBetAmountRed = 0;
let secondBet = false;
const randomNames = [
	"Filipek",
	"Januszko",
	"Ludzik",
	"Anomaly",
	"KFC",
	"Samu",
	"Kexk",
	"Pasha",
	"Boby",
	"Lolek",
	"Valorant",
	"Transformers",
	"Ma$a",
	"Sikor",
	"Janek key-drop",
	"Czopi",
	"Czokus",
	"Loli",
	"Bolek",
	"Maciu",
	"240/h",
	"102kg",
	"twardy"
];
const winAudio = new Audio("./dist/audio/win.wav");
const betAudio = new Audio("./dist/audio/bet.wav");
const arrow = document.querySelectorAll(".arrow");
let moveUp;

const spinRoulette = () => {
	const randomNum = Math.floor(Math.random() * 25000 + 5000);
	spinning = true;

	rouletteDiv.classList.add("spin");
	rouletteDiv.style.transform = `translate3d(-${randomNum}px, 0, 0)`;
};

setInterval(() => {
	secondTime--;
	seconds.textContent = secondTime + "s";

	if (secondBet === true && secondTime === 8) {
		createRandomPlayersBetBlack();
		createRandomPlayersBetRed();
		createRandomPlayersBetGreen();
	} else if (secondBet === true && secondTime === 9) {
		const allBetsDiv = document.querySelectorAll(
			".main-roulette__betbuttons-players-player"
		);
		allBetsDiv.forEach((bet) => bet.remove());
		playersGreenBetAmount = 0;
		playersRedBetAmount = 0;
		playersBlackBetAmount = 0;
		totalBetAmountBlack = 0;
		totalBetAmountRed = 0;
		totalBetAmountGreen = 0;
		totalAmountOfBetsForBlack.textContent = totalBetAmountBlack;
		totalAmountOfBetsForRed.textContent = totalBetAmountRed;
		totalAmountOfBetsForGreen.textContent = totalBetAmountGreen;
		setTimeout(() => {
			playerBetAmountBlack = 0;
			playerBetAmountGreen = 0;
			playerBetAmountRed = 0;
		}, 500);
	}
}, 1000);

setInterval(() => {
	if (secondTime === 0) {
		secondTime = 15;
		seconds.textContent = secondTime + "s";
	}

	elemOffset = elem.getBoundingClientRect();
	middleLeft = elemOffset.left + 2;
	middleRight = elemOffset.right - 2;

	rouletteItems.forEach((item) => {
		let pos = item.getBoundingClientRect();
		const img = item.firstElementChild;

		if (middleLeft >= pos.left && middleRight <= pos.right) {
			img.style.width = "75px";
		} else {
			img.style.width = "50px";
		}

		if (
			middleLeft >= pos.left &&
			middleRight <= pos.right &&
			item.classList.contains("main-roulette__list-item--red")
		) {
			arrow.forEach((item) => (item.style.color = "red"));
		} else if (
			middleLeft >= pos.left &&
			middleRight <= pos.right &&
			item.classList.contains("main-roulette__list-item--black")
		) {
			arrow.forEach((item) => (item.style.color = "black"));
		} else if (
			middleLeft >= pos.left &&
			middleRight <= pos.right &&
			item.classList.contains("main-roulette__list-item--green")
		) {
			arrow.forEach((item) => (item.style.color = "green"));
		}
	});
}, 100);

setTimeout(() => {
	if (secondBet === false) {
		secondBet = true;
	}
}, 20000);

setInterval(() => {
	spinRoulette();

	setTimeout(() => {
		const lastDropsChildCount = lastDrops.childElementCount;
		spinning = false;
		totalAmountOfBetsForBlack.textContent = "0";
		totalAmountOfBetsForRed.textContent = "0";
		totalAmountOfBetsForGreen.textContent = "0";
		totalAmountOfBetsBalanceForBlack.textContent = "0.00";
		totalAmountOfBetsBalanceForRed.textContent = "0.00";
		totalAmountOfBetsBalanceForGreen.textContent = "0.00";

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

				if (playerBetRed === true) {
					playerBetAmountRed = playerBetAmountRed * 2;
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmountRed;
					winAudio.play();
					balanceAmount.textContent = value.toFixed(2);
					balanceAmountMobile.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);

					const winPopUp = document.createElement("p");
					winPopUp.setAttribute("class", "win");
					winPopUp.textContent = playerBetAmountRed.toFixed(2);
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
				if (playerBetBlack === true) {
					playerBetAmountBlack = playerBetAmountBlack * 2;
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmountBlack;
					winAudio.play();
					balanceAmount.textContent = value.toFixed(2);
					balanceAmountMobile.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);

					const winPopUp = document.createElement("p");
					winPopUp.setAttribute("class", "win");
					winPopUp.textContent = playerBetAmountBlack.toFixed(2);
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
				if (playerBetGreen === true) {
					playerBetAmountGreen = playerBetAmountGreen * 14;
					let amountValue = parseFloat(balanceAmount.textContent);
					let value = amountValue + playerBetAmountGreen;
					winAudio.play();
					balanceAmount.textContent = value.toFixed(2);
					balanceAmountMobile.textContent = value.toFixed(2);
					localStorage.setItem("Balance", `${balanceAmount.textContent}`);

					const winPopUp = document.createElement("p");
					winPopUp.setAttribute("class", "win");
					winPopUp.textContent = playerBetAmountGreen.toFixed(2);
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
			}
		});

		playerBetRed = false;
		playerBetBlack = false;
		playerBetGreen = false;
	}, 6000);

	setTimeout(() => {
		rouletteDiv.classList.remove("spin");
		rouletteDiv.style.transform = `translate3d(0, 0, 0)`;
	}, 14900);
}, 15000);

const betAmountRed = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value > 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBetRed === false &&
		spinning === false
	) {
		const betsDiv = document.createElement("div");
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBetRed = true;
		playerBetAmountRed = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = lastBetAmount;
		totalBetAmountRed++;
		totalAmountOfBetsForRed.textContent = totalBetAmountRed;
		totalAmountOfBetsBalanceForRed.textContent =
			(Number(playerBetAmountRed) + playersRedBetAmount).toFixed(2);

		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);

		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">You</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${playerBetAmountRed}</span>
		</p>`;

		playersBetsRed.append(betsDiv);
		betAudio.play();
	}
};

const betAmountBlack = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value > 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBetBlack === false &&
		spinning === false
	) {
		const betsDiv = document.createElement("div");
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBetBlack = true;
		playerBetAmountBlack = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = lastBetAmount;
		totalBetAmountBlack++;
		totalAmountOfBetsForBlack.textContent = totalBetAmountBlack;
		totalAmountOfBetsBalanceForBlack.textContent =
			(Number(playerBetAmountBlack) + playersBlackBetAmount).toFixed(2);

		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);

		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">You</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${playerBetAmountBlack}</span>
		</p>`;

		playersBetsBlack.append(betsDiv);
		betAudio.play();
	}
};
const betAmountGreen = () => {
	const balance = localStorage.getItem("Balance");

	if (
		betInput.value > 0 &&
		betInput.value <= parseFloat(balance) &&
		playerBetGreen === false &&
		spinning === false
	) {
		const betsDiv = document.createElement("div");
		let amountValue = parseFloat(balanceAmount.textContent);
		let value = amountValue - betInput.value;
		playerBetGreen = true;
		playerBetAmountGreen = betInput.value;
		lastBetAmount = betInput.value;
		betInput.value = lastBetAmount;
		totalBetAmountGreen++;
		totalAmountOfBetsForGreen.textContent = totalBetAmountGreen;
		totalAmountOfBetsBalanceForGreen.textContent =
			(Number(playerBetAmountGreen) + playersGreenBetAmount).toFixed(2);

		balanceAmount.textContent = value.toFixed(2);
		balanceAmountMobile.textContent = value.toFixed(2);

		localStorage.setItem("Balance", `${balanceAmount.textContent}`);

		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">You</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${playerBetAmountGreen}</span>
		</p>`;

		playersBetsGreen.append(betsDiv);
		betAudio.play();
	}
};

const addRandomColorDropsToLastDrops = () => {
	for (let i = 0; i < 10; i++) {
		const dropColors = ["red", "black", "green"];
		const randomNum = Math.floor(Math.random() * 100);
		let colorPick;
		const lastDropItem = document.createElement("div");
		const lastDropItemImg = document.createElement("img");

		if (randomNum <= 5) {
			colorPick = 2;
		} else if (randomNum > 10 && randomNum < 50) {
			colorPick = 1;
		} else {
			colorPick = 0;
		}

		lastDropItemImg.setAttribute("class", "main-roulette__lastdrops-item-img");
		lastDropItemImg.setAttribute("alt", "Coin Icon");
		lastDropItemImg.setAttribute("src", "./dist/img/other/coin.png");
		lastDropItem.append(lastDropItemImg);
		lastDropItem.setAttribute(
			"class",
			`main-roulette__lastdrops-item main-roulette__lastdrops-item--${dropColors[colorPick]}`
		);

		lastDrops.append(lastDropItem);
	}
};

const createRandomPlayersBetBlack = () => {
	const randomAmountOfBets = Math.floor(Math.random() * 20);

	for (let i = randomAmountOfBets; i < 20; i++) {
		const randomNum = Math.floor(Math.random() * randomNames.length);
		const randomAmount = Math.floor(Math.random() * 1500);
		const betsDiv = document.createElement("div");
		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">${randomNames[randomNum]}</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${randomAmount}</span>
		</p>`;

		playersBetsBlack.append(betsDiv);
		playersBlackBetAmount = playersBlackBetAmount + randomAmount;
	}
	totalBetAmountBlack =
		totalBetAmountBlack + playersBetsBlack.childElementCount;
	totalAmountOfBetsForBlack.textContent = totalBetAmountBlack;
	totalAmountOfBetsBalanceForBlack.textContent =
		(Number(playerBetAmountGreen) + playersBlackBetAmount).toFixed(2);
};

const createRandomPlayersBetGreen = () => {
	const randomAmountOfBets = Math.floor(Math.random() * 10);

	for (let i = randomAmountOfBets; i < 10; i++) {
		const randomNum = Math.floor(Math.random() * randomNames.length);
		const randomAmount = Math.floor(Math.random() * 500);
		const betsDiv = document.createElement("div");
		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">${randomNames[randomNum]}</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${randomAmount}</span>
		</p>`;

		playersBetsGreen.append(betsDiv);
		playersGreenBetAmount = playersGreenBetAmount + randomAmount;
	}
	totalBetAmountGreen =
		totalBetAmountGreen + playersBetsGreen.childElementCount;
	totalAmountOfBetsForGreen.textContent = totalBetAmountGreen;
	totalAmountOfBetsBalanceForGreen.textContent =
		(Number(playerBetAmountGreen) + playersGreenBetAmount).toFixed(2);
};

const createRandomPlayersBetRed = () => {
	const randomAmountOfBets = Math.floor(Math.random() * 20);

	for (let i = randomAmountOfBets; i < 20; i++) {
		const randomNum = Math.floor(Math.random() * randomNames.length);
		const randomAmount = Math.floor(Math.random() * 1500);
		const betsDiv = document.createElement("div");
		betsDiv.setAttribute("class", "main-roulette__betbuttons-players-player");
		betsDiv.innerHTML = `<p class="main-roulette__betbuttons-players-player-name">${randomNames[randomNum]}</p>
		<p class="main-roulette__betbuttons-players-player-amount">
			<img
			class="main-roulette__betbuttons-players-player-amount-img"
			src="./dist/img/other/coin.png"
			alt="Coin Icon"
		/>
		<span class="playerbet">${randomAmount}</span>
		</p>`;

		playersBetsRed.append(betsDiv);
		playersRedBetAmount = playersRedBetAmount + randomAmount;
	}
	totalBetAmountRed = totalBetAmountRed + playersBetsRed.childElementCount;
	totalAmountOfBetsForRed.textContent = totalBetAmountRed;
	totalAmountOfBetsBalanceForRed.textContent =
		(Number(playerBetAmountRed) + playersRedBetAmount).toFixed(2);
};

createRandomPlayersBetBlack();
createRandomPlayersBetRed();
createRandomPlayersBetGreen();
addRandomColorDropsToLastDrops();

redButton.addEventListener("click", betAmountRed);
greenButton.addEventListener("click", betAmountGreen);
blackButton.addEventListener("click", betAmountBlack);

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
