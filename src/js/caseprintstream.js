const openBtn = document.querySelector(".open-btn");
const caseBox = document.querySelector(".case");
const winningItemBox = document.querySelector(".winning-item");
const winningImg = document.querySelector(".winning-item img");
const winningButton = document.querySelector(".winning-item-button");
const openAudio = new Audio("./dist/audio/open.mp3");
const itemsAnubisPrice = [[451], [120, 87], [0.5]];
const itemsAnubisImg = [
	["./dist/img/printstream/m4a1-sprintstream.png"],
	[
		"./dist/img/printstream/uspprintstream.png",
		"./dist/img/printstream/deserteagleprintstream.png",
	],
	["./dist/img/printstream/cz-75-autojungledashed.png"],
];
const itemsAnubisName = [
	["M4A1-S | Printstream"],
	["USP-S | Printstream", "Desert Eagle | Printstream"],
	["CZ-75 | Jungle Dashed"],
];
const red = "linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(135,0,0,1) 100%)";
const pink =
	"linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(255,50,240,1) 100%)";
const purple =
	"linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(125,50,255,1) 100%)";
const lightBlue =
	"linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(160,211,255,1) 100%)";
const blue =
	"linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(50,113,255,1) 100%)";
const grey =
	"linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(78,78,78,1) 100%)";
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
	let value = amountValue - 15;

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

	if (chances <= 5) {
		chances = 0;
	} else if (chances > 5 && chances <= 30) {
		chances = 1;
	} else {
		chances = 2;
	}

	if (winningItemNumber <= 5) {
		winningItem.style.background = red;
	} else if (winningItemNumber > 5 && winningItemNumber <= 30) {
		winningItem.style.background = pink;
	} else {
		winningItem.style.background = grey;
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

        if (chances <= 5) {
            chances = 0;
        } else if (chances > 5 && chances <= 30) {
            chances = 1;
        } else {
            chances = 2;
        }

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

	if (normalItemNumber <= 5) {
		normalItem.style.background = red;
	} else if (normalItemNumber > 5 && normalItemNumber <= 30) {
		normalItem.style.background = pink;
	} else {
		normalItem.style.background = grey;
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

        if (chances <= 5) {
            chances = 0;
        } else if (chances > 5 && chances <= 30) {
            chances = 1;
        } else {
            chances = 2;
        }

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 5) {
            normalItem.style.background = red;
        } else if (normalItemNumber > 5 && normalItemNumber <= 30) {
            normalItem.style.background = pink;
        } else {
            normalItem.style.background = grey;
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
	if (opened === false && parseFloat(balanceAmount.textContent) >= 1) {
		startOpeningAnimation();
		openAudio.play();
	}
});
