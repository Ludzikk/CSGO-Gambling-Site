const apple = "🍎";
const banana = "🍌";
const orange = "🍊";
const watermelon = "🍉";
const spinBox = document.querySelectorAll(".main-slot__spin");
const spinBoxOne = document.querySelector(".main-slot__spin--one");
const spinBoxTwo = document.querySelector(".main-slot__spin--two");
const spinBoxThree = document.querySelector(".main-slot__spin-three");
const betInput = document.querySelector(".main-slot__input");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const betBtn = document.querySelector(".main-slot__button");
const music = new Audio("./dist/audio/bananarushmusic.wav");
const won = new Audio("./dist/audio/bananarushwin.wav");
const lost = new Audio("./dist/audio/bananarushlost.wav");
const speed = 1500;

const startSlot = () => {
	spinBox.forEach((slot) => {
		slot.innerHTML = "";
		for (let i = 0; i < 20; i++) {
			const randomNum = Math.floor(Math.random() * 1000);
			const itemBox = document.createElement("div");

			if (randomNum <= 50) {
				itemBox.textContent = banana;
			} else if (randomNum > 50 && randomNum <= 250) {
				itemBox.textContent = apple;
			} else if (randomNum > 250 && randomNum <= 550) {
				itemBox.textContent = orange;
			} else {
				itemBox.textContent = watermelon;
			}

			slot.append(itemBox);
			slot.style.transform = `translate3d(0, ${speed}px, 0)`;
		}
	});

	setTimeout(() => {
		checkIfWon();
	}, 1000);

	removeBalance();
};

const checkIfWon = () => {
	if (
		spinBoxOne.firstElementChild.textContent ===
			spinBoxTwo.firstElementChild.textContent &&
		spinBoxTwo.firstElementChild.textContent ===
			spinBoxThree.firstElementChild.textContent
	) {
		if (spinBoxOne.firstElementChild.textContent === banana) {
			let amountValue = parseFloat(balanceAmount.textContent);
			let value = amountValue + betInput.value * 10;
			balanceAmount.textContent = value.toFixed(2);
			balanceAmountMobile.textContent = value.toFixed(2);
			localStorage.setItem("Balance", `${balanceAmount.textContent}`);
			won.play();
		} else if (spinBoxOne.firstElementChild.textContent === apple) {
			let amountValue = parseFloat(balanceAmount.textContent);
			let value = amountValue + betInput.value * 5;
			balanceAmount.textContent = value.toFixed(2);
			balanceAmountMobile.textContent = value.toFixed(2);
			localStorage.setItem("Balance", `${balanceAmount.textContent}`);
			won.play();
		} else if (spinBoxOne.firstElementChild.textContent === orange) {
			let amountValue = parseFloat(balanceAmount.textContent);
			let value = amountValue + betInput.value * 3;
			balanceAmount.textContent = value.toFixed(2);
			balanceAmountMobile.textContent = value.toFixed(2);
			localStorage.setItem("Balance", `${balanceAmount.textContent}`);
			won.play();
		} else if (spinBoxOne.firstElementChild.textContent === watermelon) {
			let amountValue = parseFloat(balanceAmount.textContent);
			let value = amountValue + betInput.value * 2;
			balanceAmount.textContent = value.toFixed(2);
			balanceAmountMobile.textContent = value.toFixed(2);
			localStorage.setItem("Balance", `${balanceAmount.textContent}`);
			won.play();
		}
	} else {
		lost.play();
	}
};

const addBalance = () => {};

const removeBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - betInput.value;
	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
	localStorage.setItem("Balance", `${balanceAmount.textContent}`);
};

betBtn.addEventListener("click", () => {
	if (betInput.value > 0) {
		spinBox.forEach((slot) => (slot.style.transform = `translate3d(0, 0, 0)`));
		// spinBoxOne.innerHTML = "";
		// spinBoxTwo.innerHTML = "";
		// spinBoxThree.innerHTML = "";
		// spinBoxOne.style.transform = "translate3d(0,0,0)";
		// spinBoxTwo.style.transform = "translate3d(0,0,0)";
		// spinBoxThree.style.transform = "translate3d(0,0,0)";
		music.play();
		setTimeout(() => {
			startSlot();
		}, 100);
	}
});
