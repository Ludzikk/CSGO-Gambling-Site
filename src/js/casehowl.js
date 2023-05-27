const howlCase = {
	under25: {
		name: "M4A4 | Howl",
		img: "./dist/img/howl/howl.png",
		price: 5213,
	},

	above25: {
		name: "M4A4 | Poly Mag",
		img: "./dist/img/howl/polymag.png",
		price: 0.68,
	},
};
const openBtn = document.querySelector(".open-btn");
const caseBox = document.querySelector(".case");
const winningItemBox = document.querySelector(".winning-item");
const winningImg = document.querySelector(".winning-item img");
const winningButton = document.querySelector(".winning-item-button");
const openAudio = new Audio("./dist/audio/open.mp3");
const itemsAnubisPrice = [[5213], [0.68]];
const itemsAnubisImg = [
	["./dist/img/howl/howl.png"],
	["./dist/img/howl/polymag.png"],
];
const itemsAnubisName = [["M4A4 | Howl"], ["M4A4 | Poly Mag"]];
const red =
	"radial-gradient(circle, rgba(135, 0, 0, .7) 0%, rgba(0, 0, 0, 1) 75%";
const pink =
	"radial-gradient(circle, rgba(255, 50, 240, .5) 0%, rgba(0, 0, 0, 1) 75%)";
const purple =
	"radial-gradient(circle, rgba(125, 50, 255, .5) 0%, rgba(0, 0, 0, 1) 75%)";
const lightBlue =
	"radial-gradient(circle, rgba(160, 211, 255, .5) 0%, rgba(0, 0, 0, 1) 75%)";
const blue =
	"radial-gradient(circle, rgba(50, 113, 255, .5) 0%, rgba(0, 0, 0, 1) 75%)";
const grey =
	"radial-gradient(circle, rgba(78, 78, 78, .5) 0%, rgba(0, 0, 0, 1) 75%)";
let opened = false;
let currentWinningItemPrice;
const balanceAmount = document.querySelector(".nav__list-item-balance-amount");

balanceAmount.textContent = localStorage.getItem("Balance");

const addBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue + currentWinningItemPrice;

	balanceAmount.textContent = value.toFixed(2);
};

const removeBalanceOnOpen = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - 2000;

	balanceAmount.textContent = value.toFixed(2);
};

const startOpeningAnimation = () => {
	caseBox.classList.add("open-anim");
	addItems();
	opened = true;

	setTimeout(() => {
		opened = false;
		resetOpening();
	}, 6500);
};

const setWinningItem = () => {
	const winningItemNumber = Math.floor(Math.random() * 100);
	const winningItemDiv = document.createElement("div");
	const winningItem = document.createElement("li");
	const winningItemImg = document.createElement("img");
	const winningItemText = document.createElement("p");
	let chances = winningItemNumber;

	if (chances <= 50) {
		chances = 0;
	} else {
		chances = 1;
	}

	if (winningItemNumber <= 50) {
		winningItem.style.background = red;
	} else {
		winningItem.style.background = blue;
	}

	const randomItemFromColor = Math.floor(
		Math.random() * itemsAnubisImg[chances].length
	);

	winningItem.setAttribute("class", "case-item");
	winningItemImg.setAttribute("class", "case-item-img");
	winningItemImg.setAttribute(
		"src",
		itemsAnubisImg[chances][randomItemFromColor]
	);
	winningItemImg.setAttribute(
		"alt",
		itemsAnubisName[chances][randomItemFromColor]
	);
	winningItemText.setAttribute("class", "case-item-name");
	winningItemText.textContent = itemsAnubisName[chances][randomItemFromColor];

	console.log(itemsAnubisName[chances][randomItemFromColor]);

	winningItem.append(winningItemImg, winningItemText);
	winningItemDiv.append(winningItem);
	caseBox.append(winningItemDiv);

	currentWinningItemPrice = itemsAnubisPrice[chances][randomItemFromColor];

	removeBalanceOnOpen();

	setTimeout(() => {
		addBalance();
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);
	}, 5500);

	setTimeout(() => {
		winningItemDiv.remove();
	}, 6500);
};

const addItems = () => {
	for (let i = 0; i <= 10; i++) {
		const normalItemNumber = Math.floor(Math.random() * 100);
		const normalItemDiv = document.createElement("div");
		const normalItem = document.createElement("li");
		const normalItemImg = document.createElement("img");
		const normalItemText = document.createElement("p");

		let chances = normalItemNumber;

		if (chances <= 50) {
			chances = 0;
		}  else {
			chances = 1;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 50) {
			normalItem.style.background = red;
		}  else {
			normalItem.style.background = blue;
		}

		normalItem.setAttribute("class", "case-item");
		normalItemImg.setAttribute("class", "case-item-img");
		normalItemImg.setAttribute(
			"src",
			itemsAnubisImg[chances][randomItemFromColor]
		);
		normalItemImg.setAttribute(
			"alt",
			itemsAnubisName[chances][randomItemFromColor]
		);
		normalItemText.setAttribute("class", "case-item-name");
		normalItemText.textContent = itemsAnubisName[chances][randomItemFromColor];

		normalItem.append(normalItemImg, normalItemText);
		normalItemDiv.append(normalItem);
		caseBox.append(normalItemDiv);

		setTimeout(() => {
			normalItemDiv.remove();
		}, 6500);
	}

	setWinningItem();

	for (let i = 0; i <= 4; i++) {
		const normalItemNumber = Math.floor(Math.random() * 100);
		const normalItemDiv = document.createElement("div");
		const normalItem = document.createElement("li");
		const normalItemImg = document.createElement("img");
		const normalItemText = document.createElement("p");

		let chances = normalItemNumber;

		if (chances <= 50) {
			chances = 0;
		}  else {
			chances = 1;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 50) {
			normalItem.style.background = red;
		}  else {
			normalItem.style.background = blue;
		}

		normalItem.setAttribute("class", "case-item");
		normalItemImg.setAttribute("class", "case-item-img");
		normalItemImg.setAttribute(
			"src",
			itemsAnubisImg[chances][randomItemFromColor]
		);
		normalItemImg.setAttribute(
			"alt",
			itemsAnubisName[chances][randomItemFromColor]
		);
		normalItemText.setAttribute("class", "case-item-name");
		normalItemText.textContent = itemsAnubisName[chances][randomItemFromColor];

		normalItem.append(normalItemImg, normalItemText);
		normalItemDiv.append(normalItem);
		caseBox.append(normalItemDiv);

		setTimeout(() => {
			normalItemDiv.remove();
		}, 6500);
	}
};

const resetOpening = () => {
	caseBox.classList.remove("open-anim");
};

openBtn.addEventListener("click", () => {
	if (opened === false && parseFloat(balanceAmount.textContent) >= 2000) {
		startOpeningAnimation();
		openAudio.play();
	}
});
