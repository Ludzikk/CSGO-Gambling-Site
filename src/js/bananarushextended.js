const apple = "🍎";
const banana = "🍌";
const orange = "🍊";
const watermelon = "🍉";
const cherry = "🍒";
const tomato = "🍅";
const kiwi = "🥝";
const spinBox = document.querySelectorAll(".main-slot__spin");
const spinBoxOne = document.querySelectorAll(".main-slot__spin--one");
const spinBoxTwo = document.querySelectorAll(".main-slot__spin--two");
const spinBoxThree = document.querySelectorAll(".main-slot__spin-three");
const betInput = document.querySelector(".main-slot__input");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const betBtn = document.querySelector(".main-slot__button");
const addBetAmount = document.querySelector("#add");
const winGif = document.querySelector(".win-amount__gif");
const winAmountCounting = document.querySelector(".win-amount__text");
const winAmountBox = document.querySelector(".win-amount");
const removeBetAmount = document.querySelector("#remove");
const winAnimationBg = document.querySelector(".win-amount__bg");
const music = new Audio("./dist/audio/bananarushmusic.wav");
const won = new Audio("./dist/audio/bananarushwin.wav");
const lost = new Audio("./dist/audio/bananarushlost.wav");
const oneOne = document.querySelector("#one-one");
const oneTwo = document.querySelector("#one-two");
const oneThree = document.querySelector("#one-three");
const twoOne = document.querySelector("#two-one");
const twoTwo = document.querySelector("#two-two");
const twoThree = document.querySelector("#two-three");
const threeOne = document.querySelector("#three-one");
const threeTwo = document.querySelector("#three-two");
const threeThree = document.querySelector("#three-three");
const hour = document.querySelector(".main-slot__hour");
const min = document.querySelector(".main-slot__min");
const betAmount = document.querySelector("#betamount");
const winAmount = document.querySelector("#winamount");
const balanceAmount = document.querySelector("#balanceamount");
const letsGo = new Audio("./dist/audio/letsgo.mp3");
const speed = 3620;
let winMul = 0;
let cantSpin = false;
// let leftRow = [];
// let midRow = [];
// let rightRow = [];
let rows = [[], [], []];
let rowsElement = [[], [], []];
let speedOfAnim = 0;
let spinning = false;
let winningIcons = 0;
music.volume = 0.1;
music.loop = true;

balanceAmount.textContent = localStorage.getItem("Balance");

const startSlot = () => {
	rows = [[], [], []];
	rowsElement = [[], [], []];
	winMul = 0;
	spinning = true;
	winAmount.textContent = "0.00";
	balanceAmount.textContent = (
		Number(localStorage.getItem("Balance")) - Number(betAmount.textContent)
	).toFixed(2);

	localStorage.setItem("Balance", balanceAmount.textContent);

	spinBox.forEach((slot) => {
		slot.innerHTML = "";
		slot.parentElement.style.background = "none";

		for (let i = 0; i < 20; i++) {
			const randomNum = Math.floor(Math.random() * 10000);
			const itemBox = document.createElement("div");

			if (randomNum <= 250) {
				itemBox.textContent = banana;
			} else if (randomNum > 250 && randomNum <= 800) {
				itemBox.textContent = apple;
			} else if (randomNum > 800 && randomNum <= 1750) {
				itemBox.textContent = orange;
			} else if (randomNum > 1750 && randomNum <= 3000) {
				itemBox.textContent = watermelon;
			} else if (randomNum > 3000 && randomNum <= 5500) {
				itemBox.textContent = cherry;
			} else if (randomNum > 5500 && randomNum <= 8000) {
				itemBox.textContent = kiwi;
			} else {
				itemBox.textContent = tomato;
			}

			slot.append(itemBox);
		}
	});

	rows[0].push(oneOne.firstElementChild.textContent);
	rows[0].push(twoOne.firstElementChild.textContent);
	rows[0].push(threeOne.firstElementChild.textContent);

	rows[1].push(oneTwo.firstElementChild.textContent);
	rows[1].push(twoTwo.firstElementChild.textContent);
	rows[1].push(threeTwo.firstElementChild.textContent);

	rows[2].push(oneThree.firstElementChild.textContent);
	rows[2].push(twoThree.firstElementChild.textContent);
	rows[2].push(threeThree.firstElementChild.textContent);

	rowsElement[0].push(oneOne);
	rowsElement[0].push(twoOne);
	rowsElement[0].push(threeOne);

	rowsElement[1].push(oneTwo);
	rowsElement[1].push(twoTwo);
	rowsElement[1].push(threeTwo);

	rowsElement[2].push(oneThree);
	rowsElement[2].push(twoThree);
	rowsElement[2].push(threeThree);

	setTimeout(() => {
		spinBoxOne.forEach(
			(item) => (item.style.transform = `translate3d(0, ${speed}px, 0)`)
		);
	}, 100);

	setTimeout(() => {
		spinBoxTwo.forEach(
			(item) => (item.style.transform = `translate3d(0, ${speed}px, 0)`)
		);
	}, 300);

	setTimeout(() => {
		spinBoxThree.forEach(
			(item) => (item.style.transform = `translate3d(0, ${speed}px, 0)`)
		);
	}, 500);

	setTimeout(() => {
		checkIfWon();
		spinning = false;
	}, 1400);

	// removeBalance();
};

const checkIfWon = () => {
	if (
		rows[0].includes(watermelon) &&
		rows[1].includes(watermelon) &&
		rows[2].includes(watermelon)
	) {
		let watermelonCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === watermelon) {
				watermelonCount++;
				winX += 1.5;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === watermelon) {
				watermelonCount++;
				winX += 1.5;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === watermelon) {
				watermelonCount++;
				winX += 1.5;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${watermelonCount} ${watermelon} won 1 x${winX}`);
	}

	if (
		rows[0].includes(apple) &&
		rows[1].includes(apple) &&
		rows[2].includes(apple)
	) {
		let appleCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === apple) {
				appleCount++;
				winX += 20;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === apple) {
				appleCount++;
				winX += 20;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === apple) {
				appleCount++;
				winX += 20;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${appleCount} ${apple} won 1 x${winX}`);
	}

	if (
		rows[0].includes(orange) &&
		rows[1].includes(orange) &&
		rows[2].includes(orange)
	) {
		let orangeCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === orange) {
				orangeCount++;
				winX += 8;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === orange) {
				orangeCount++;
				winX += 8;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === orange) {
				orangeCount++;
				winX += 8;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${orangeCount} ${orange} won 1 x${winX}`);
	}

	if (
		rows[0].includes(banana) &&
		rows[1].includes(banana) &&
		rows[2].includes(banana)
	) {
		let bananaCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === banana) {
				bananaCount++;
				winX += 50;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === banana) {
				bananaCount++;
				winX += 50;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === banana) {
				bananaCount++;
				winX += 50;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${bananaCount} ${banana} won 1 x${winX}`);
	}

	if (
		rows[0].includes(cherry) &&
		rows[1].includes(cherry) &&
		rows[2].includes(cherry)
	) {
		let cherryCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === cherry) {
				cherryCount++;
				winX += 1;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === cherry) {
				cherryCount++;
				winX += 1;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === cherry) {
				cherryCount++;
				winX += 1;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${cherryCount} ${cherry} won 1 x${winX}`);
	}

	if (
		rows[0].includes(kiwi) &&
		rows[1].includes(kiwi) &&
		rows[2].includes(kiwi)
	) {
		let kiwiCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === kiwi) {
				kiwiCount++;
				winX += 0.5;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === kiwi) {
				kiwiCount++;
				winX += 0.5;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === kiwi) {
				kiwiCount++;
				winX += 0.5;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${kiwiCount} ${kiwi} won 1 x${winX}`);
	}

	if (
		rows[0].includes(tomato) &&
		rows[1].includes(tomato) &&
		rows[2].includes(tomato)
	) {
		let tomatoCount = 0;
		let winX = 0;

		for (let i = 0; i < rows[0].length; i++) {
			if (rows[0][i] === tomato) {
				tomatoCount++;
				winX += 0.6;
				rowsElement[0][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[1].length; i++) {
			if (rows[1][i] === tomato) {
				tomatoCount++;
				winX += 0.6;
				rowsElement[1][i].parentElement.style.backgroundColor = "green";
			}
		}

		for (let i = 0; i < rows[2].length; i++) {
			if (rows[2][i] === tomato) {
				tomatoCount++;
				winX += 0.6;
				rowsElement[2][i].parentElement.style.backgroundColor = "green";
			}
		}
		winMul += winX;
		console.log(`${tomatoCount} ${tomato} won 1 x${winX}`);
	}

	if (winMul === 0) {
		lost.play();
	} else {
		won.play();
		winAmount.textContent = (Number(betAmount.textContent) * winMul).toFixed(2);
		balanceAmount.textContent = (
			Number(localStorage.getItem("Balance")) + Number(winAmount.textContent)
		).toFixed(2);

		localStorage.setItem("Balance", balanceAmount.textContent);
		wonAnimCheck();
	}
};

const wonAnimCheck = () => {
	let amountOfWin = 0;
	let winAmountInterval;
	winGif.setAttribute("src", "");
	winGif.classList.add("hidden");

	winAnimationBg.addEventListener("click", () => {
		amountOfWin = Number(betAmount.textContent) * winMul;
	});

	if (winMul >= 3 && winMul < 5) {
		winAmountBox.classList.remove("hidden");
		winAmountCounting.textContent = "0.00";
		cantSpin = true;

		winAmountInterval = setInterval(() => {
			if (amountOfWin < (Number(betAmount.textContent) * winMul).toFixed(2)) {
				amountOfWin += 0.1;
				winAmountCounting.textContent = amountOfWin.toFixed(2);
			} else {
				winAmountCounting.textContent = (
					Number(betAmount.textContent) * winMul
				).toFixed(2);
				clearInterval(winAmountInterval);
				setTimeout(() => {
					winAmountBox.classList.add("hidden");
					cantSpin = false;
					letsGo.pause()
					letsGo.currentTime = 0;
				}, 2500);
			}
		}, 100);
	} else if (winMul >= 5 && winMul < 7.5) {
		winAmountBox.classList.remove("hidden");
		winAmountCounting.textContent = "0.00";
		cantSpin = true;
		winGif.setAttribute("src", "./dist/img/other/midwinbananarush.gif");
		winGif.classList.remove("hidden");
		letsGo.play();

		winAmountInterval = setInterval(() => {
			if (amountOfWin < (Number(betAmount.textContent) * winMul).toFixed(2)) {
				amountOfWin += 0.25;
				winAmountCounting.textContent = amountOfWin.toFixed(2);
			} else {
				winAmountCounting.textContent = (
					Number(betAmount.textContent) * winMul
				).toFixed(2);
				clearInterval(winAmountInterval);
				setTimeout(() => {
					winAmountBox.classList.add("hidden");
					cantSpin = false;
					letsGo.pause()
					letsGo.currentTime = 0;
				}, 2500);
			}
		}, 100);
	} else if (winMul >= 7.5 && winMul < 10) {
		winAmountBox.classList.remove("hidden");
		winAmountCounting.textContent = "0.00";
		cantSpin = true;
		winGif.setAttribute("src", "./dist/img/other/bigwinbananarush.gif");
		winGif.classList.remove("hidden");
		letsGo.play();

		winAmountInterval = setInterval(() => {
			if (amountOfWin < (Number(betAmount.textContent) * winMul).toFixed(2)) {
				amountOfWin += 0.5;
				winAmountCounting.textContent = amountOfWin.toFixed(2);
			} else {
				winAmountCounting.textContent = (
					Number(betAmount.textContent) * winMul
				).toFixed(2);
				clearInterval(winAmountInterval);
				setTimeout(() => {
					winAmountBox.classList.add("hidden");
					cantSpin = false;
					letsGo.pause()
					letsGo.currentTime = 0;
				}, 2500);
			}
		}, 100);
	} else if (winMul >= 10) {
		winAmountBox.classList.remove("hidden");
		winAmountCounting.textContent = "0.00";
		cantSpin = true;
		winGif.setAttribute("src", "./dist/img/other/hugewinbananarush.gif");
		winGif.classList.remove("hidden");
		letsGo.play();

		winAmountInterval = setInterval(() => {
			if (amountOfWin < (Number(betAmount.textContent) * winMul).toFixed(2)) {
				amountOfWin += 0.75;
				winAmountCounting.textContent = amountOfWin.toFixed(2);
			} else {
				winAmountCounting.textContent = (
					Number(betAmount.textContent) * winMul
				).toFixed(2);
				clearInterval(winAmountInterval);
				setTimeout(() => {
					winAmountBox.classList.add("hidden");
					cantSpin = false;
					letsGo.pause()
					letsGo.currentTime = 0;
				}, 2500);
			}
		}, 100);
	}
};

// const removeBalance = () => {
// 	let amountValue = parseFloat(balanceAmount.textContent);
// 	let value = amountValue - betInput.value;
// 	balanceAmount.textContent = value.toFixed(2);
// 	balanceAmountMobile.textContent = value.toFixed(2);
// 	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
// };

const setTime = () => {
	const date = new Date();

	if (date.getHours() <= 9) {
		hour.textContent = "0" + date.getHours() + ":";
	} else {
		hour.textContent = date.getHours() + ":";
	}

	if (date.getMinutes() <= 9) {
		min.textContent = "0" + date.getMinutes();
	} else {
		min.textContent = date.getMinutes();
	}

	music.play();
};

setInterval(() => {
	const date = new Date();

	if (date.getHours() <= 9) {
		hour.textContent = "0" + date.getHours() + ":";
	} else {
		hour.textContent = date.getHours() + ":";
	}

	if (date.getMinutes() <= 9) {
		min.textContent = "0" + date.getMinutes();
	} else {
		min.textContent = date.getMinutes();
	}
}, 1000);

betBtn.addEventListener("click", () => {
	if (
		spinning === false &&
		Number(localStorage.getItem("Balance")) - Number(betAmount.textContent) >=
			0 &&
		cantSpin === false
	) {
		spinBox.forEach((slot) => (slot.style.transform = `translate3d(0, 0, 0)`));
		setTimeout(() => {
			startSlot();
		}, 100);
	}
});

addBetAmount.addEventListener("click", () => {
	if (Number(betAmount.textContent) < 10) {
		betAmount.textContent = (Number(betAmount.textContent) + 1).toFixed(2);
	}
});

removeBetAmount.addEventListener("click", () => {
	if (Number(betAmount.textContent) > 1) {
		betAmount.textContent = (Number(betAmount.textContent) - 1).toFixed(2);
	}
});

setTime();
