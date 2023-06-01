const openBtn = document.querySelector(".open-btn");
const caseBox = document.querySelector(".case");
const winningItemBox = document.querySelector(".winning-item");
const winningImg = document.querySelector(".winning-item img");
const winningButton = document.querySelector(".winning-item-button");
const spinningBtn = document.querySelector(".open-btn--spinning");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const openAudio = new Audio("./dist/audio/open.mp3");
const itemsAnubisPrice = [
	[9521, 9123],
	[5324, 6231],
	[152.42],
	[39.12, 45.52],
	[0.12],
];
const itemsAnubisImg = [
	["./dist/img/awp/dragonlore.png", "./dist/img/awp/gungnir.png"],
	["./dist/img/awp/medusa.png", "./dist/img/awp/theprince.png"],
	["./dist/img/awp/asimov.png"],
	["./dist/img/awp/wildfire.png", "./dist/img/awp/neonoir.png"],
	["./dist/img/awp/safarimesh.png"],
];
const itemsAnubisName = [
	["AWP | Dragonlore", "AWP | Gungnir"],
	["AWP | Medusa", "AWP | The Prince"],
	["AWP | Asimov"],
	["AWP | Wildfire", "AWP | Neo-noir"],
	["AWP | Safari mesh"],
];
const lastDropBg = [
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(75, 138, 255, 0.2) 100%",
];
const red = "linear-gradient(180deg, black 40%, rgba(222, 76, 65, .5) 100%)";
const pink = "linear-gradient(180deg, black 40%, rgba(255, 50, 240, .5) 100%)";
const purple =
	"linear-gradient(180deg, black 40%, rgba(125, 50, 255, .5) 100%)";
const lightBlue =
	"linear-gradient(180deg, black 40%, rgba(160, 211, 255, .5) 100%)";
const blue = "linear-gradient(180deg, black 40%, rgba(50, 113, 255, .5) 100%)";
const grey = "linear-gradient(180deg, black 40%, rgba(78, 78, 78, .5) 100%)";
let opened = false;
let currentWinningItemPrice;
const balanceAmount = document.querySelector(".nav__list-item-balance-amount");

balanceAmount.textContent = localStorage.getItem("Balance");

const addBalance = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue + currentWinningItemPrice;

	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
};

const removeBalanceOnOpen = () => {
	let amountValue = parseFloat(balanceAmount.textContent);
	let value = amountValue - 2000;

	balanceAmount.textContent = value.toFixed(2);
	balanceAmountMobile.textContent = value.toFixed(2);
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
	} else if (chances > 5 && chances <= 10) {
		chances = 1;
	} else if (chances > 10 && chances <= 20) {
		chances = 2;
	} else if (chances > 20 && chances <= 30) {
		chances = 3;
	} else {
		chances = 4;
	}

	if (winningItemNumber <= 5) {
		winningItem.style.background = red;
	} else if (winningItemNumber > 5 && winningItemNumber <= 10) {
		winningItem.style.background = pink;
	} else if (winningItemNumber > 10 && winningItemNumber <= 20) {
		winningItem.style.background = purple;
	} else if (winningItemNumber > 20 && winningItemNumber <= 30) {
		winningItem.style.background = blue;
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

	winningItem.append(winningItemImg, winningItemText);
	winningItemDiv.append(winningItem);
	caseBox.append(winningItemDiv);

	currentWinningItemPrice = itemsAnubisPrice[chances][randomItemFromColor];

	removeBalanceOnOpen();

	openBtn.classList.add("hidden");
	spinningBtn.classList.remove("hidden");

	setTimeout(() => {
		addBalance();
		localStorage.setItem("Balance", `${balanceAmount.textContent}`);

		id++;
		const item = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemPriceBox = document.createElement("div");
		const itemPrice = document.createElement("p");
		const itemText = document.createElement("p");
		const itemPriceIcon = document.createElement("img");

		if (chances <= 3) {
			item.setAttribute(
				"class",
				"main__dropsbox-item main__dropsbox-item--red"
			);
		} else {
			item.setAttribute(
				"class",
				"main__dropsbox-item main__dropsbox-item--blue"
			);
		}

		item.setAttribute("id", id);
		itemImg.setAttribute("class", "main__dropsbox-item-img");
		itemImg.setAttribute(
			"src",
			`${itemsAnubisImg[chances][randomItemFromColor]}`
		);
		itemImg.setAttribute(
			"alt",
			`${itemsAnubisImg[chances][randomItemFromColor]}`
		);
		itemText.setAttribute("class", "main__dropsbox-item-name");
		itemPrice.setAttribute("class", "main__dropsbox-item-price");
		itemPriceIcon.setAttribute("class", "main__dropsbox-item-pricebox-img");
		itemPriceIcon.setAttribute("src", "./dist/img/other/coin.png");
		itemPriceIcon.setAttribute("alt", "Coin Icon");
		itemPriceBox.setAttribute("class", "main__dropsbox-item-pricebox hidden");
		itemPrice.textContent = itemsAnubisPrice[chances][randomItemFromColor];
		item.style.order = "-" + id;
		itemText.textContent = itemsAnubisName[chances][randomItemFromColor];
		itemPriceBox.append(itemPrice, itemPriceIcon);
		item.append(itemImg, itemText, itemPriceBox);
		lastItemDrops.append(item);

		if (lastItemDrops.childElementCount > 10) {
			lastItemDrops.firstElementChild.remove();
		}

		if (id % 2 === 0) {
			item.style.background = `linear-gradient(90deg, #1d2126 25%, ${lastDropBg[chances]}`;
		} else {
			item.style.background = `linear-gradient(90deg, #282e35 25%, ${lastDropBg[chances]}`;
		}

		item.addEventListener("mouseover", () => {
			itemPriceBox.classList.remove("hidden");
		});

		item.addEventListener("mouseleave", () => {
			itemPriceBox.classList.add("hidden");
		});
	}, 5500);

	setTimeout(() => {
		winningItemDiv.remove();
		openBtn.classList.remove("hidden");
		spinningBtn.classList.add("hidden");
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
		} else if (chances > 5 && chances <= 10) {
			chances = 1;
		} else if (chances > 10 && chances <= 20) {
			chances = 2;
		} else if (chances > 20 && chances <= 30) {
			chances = 3;
		} else {
			chances = 4;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 5) {
			normalItem.style.background = red;
		} else if (normalItemNumber > 5 && normalItemNumber <= 10) {
			normalItem.style.background = pink;
		} else if (normalItemNumber > 10 && normalItemNumber <= 20) {
			normalItem.style.background = purple;
		} else if (normalItemNumber > 20 && normalItemNumber <= 30) {
			normalItem.style.background = blue;
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
		} else if (chances > 5 && chances <= 10) {
			chances = 1;
		} else if (chances > 10 && chances <= 20) {
			chances = 2;
		} else if (chances > 20 && chances <= 30) {
			chances = 3;
		} else {
			chances = 4;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 5) {
			normalItem.style.background = red;
		} else if (normalItemNumber > 5 && normalItemNumber <= 10) {
			normalItem.style.background = pink;
		} else if (normalItemNumber > 10 && normalItemNumber <= 20) {
			normalItem.style.background = purple;
		} else if (normalItemNumber > 20 && normalItemNumber <= 30) {
			normalItem.style.background = blue;
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
	if (opened === false && parseFloat(balanceAmount.textContent) >= 2000) {
		startOpeningAnimation();
		openAudio.play();
	}
});
