const apple = "🍎";
const banana = "🍌";
const orange = "🍊";
const watermelon = "🍉";
const spinBox = document.querySelectorAll(".main-slot__spin");
const spinBoxOne = document.querySelectorAll(".main-slot__spin--one");
const spinBoxTwo = document.querySelectorAll(".main-slot__spin--two");
const spinBoxThree = document.querySelectorAll(".main-slot__spin-three");
const betInput = document.querySelector(".main-slot__input");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const betBtn = document.querySelector(".main-slot__button");
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
const speed = 2100;
const topRow = [];
const midRow = [];
const bottomRow = [];
let speedOfAnim = 0;
let spinning = false;
let winningIcons = 0;

const startSlot = () => {
	spinning = true;

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
		}
	});

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
	console.log(
		oneOne.firstElementChild.textContent,
		oneTwo.firstElementChild.textContent,
		oneThree.firstElementChild.textContent
	);
	console.log(topRow, midRow, bottomRow);
	if (
		oneOne.firstElementChild.textContent ===
			oneTwo.firstElementChild.textContent &&
		oneTwo.firstElementChild.textContent ===
			oneThree.firstElementChild.textContent
	) {
		if (oneOne.firstElementChild.textContent === banana) {
			console.log("WON X100");
			won.play();
		} else if (oneOne.firstElementChild.textContent === apple) {
			console.log("WON X50");
			won.play();
		} else if (oneOne.firstElementChild.textContent === orange) {
			console.log("WON X25");
			won.play();
		} else if (oneOne.firstElementChild.textContent === watermelon) {
			console.log("WON X10");
			won.play();
		}
	} else {
		console.log("LOST");
		lost.play();
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

	hour.textContent = date.getHours() + ":";
	min.textContent = date.getMinutes();
};

betBtn.addEventListener(
	"click",
	() => {
		// if (betInput.value > 0 && spinning === false) {
		spinBox.forEach((slot) => (slot.style.transform = `translate3d(0, 0, 0)`));
		// spinBoxOne.innerHTML = "";
		// spinBoxTwo.innerHTML = "";
		// spinBoxThree.innerHTML = "";
		// spinBoxOne.style.transform = "translate3d(0,0,0)";
		// spinBoxTwo.style.transform = "translate3d(0,0,0)";
		// spinBoxThree.style.transform = "translate3d(0,0,0)";
		music.play();
		music.volume = 0.25;
		setTimeout(() => {
			startSlot();
		}, 100);
	}
	// }
);

setInterval(() => {
	const date = new Date();

	hour.textContent = date.getHours() + ":";
	min.textContent = date.getMinutes();
}, 1000);

setTime();
