const openBtn = document.querySelector(".open-btn");
const caseBox = document.querySelector(".case");
const winningItemBox = document.querySelector(".winning-item");
const winningImg = document.querySelector(".winning-item img");
const winningButton = document.querySelector(".winning-item-button");
const spinningBtn = document.querySelector(".open-btn--spinning");
const balanceAmountMobile = document.querySelector(".nav__balance-amount");
const lastItemDrops = document.querySelector(".main__dropsbox");
const openAudio = new Audio("./dist/audio/open.mp3");
const itemsAnubisPrice = [[1521.09], [98.28]];
const itemsAnubisImg = [
	["./dist/img/knife5050/doppler.png"],
	["./dist/img/knife5050/navaja.png"],
];
const itemsAnubisName = [["Karambit | Doppler"], ["Navaja | Safari Mesh"]];
const gold = "linear-gradient(180deg, black 40%, rgba(255,248,0, .5) 100%";
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
	let value = amountValue - 800;

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

	if (chances <= 50) {
		chances = 0;
	} else {
		chances = 1;
	}

	if (winningItemNumber <= 50) {
		winningItem.style.background = gold;
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

		id++
		const item = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemPriceBox = document.createElement("div");
		const itemPrice = document.createElement("p");
		const itemText = document.createElement("p");
		const itemPriceIcon = document.createElement("img");
		item.setAttribute(
			"class",
			"main__dropsbox-item main__dropsbox-item--gold"
		);
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
			item.style.background = `linear-gradient(90deg, #1d2126 25%, rgba(255, 255, 1, 0.1) 100%`;
		} else {
			item.style.background = `linear-gradient(90deg, #282e35 25%, rgba(255, 255, 1, 0.1) 100%`;
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

		if (chances <= 50) {
			chances = 0;
		} else {
			chances = 1;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 50) {
			normalItem.style.background = gold;
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

		if (chances <= 50) {
			chances = 0;
		} else {
			chances = 1;
		}

		const randomItemFromColor = Math.floor(
			Math.random() * itemsAnubisImg[chances].length
		);

		if (normalItemNumber <= 50) {
			normalItem.style.background = gold;
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
	if (opened === false && parseFloat(balanceAmount.textContent) >= 800) {
		startOpeningAnimation();
		openAudio.play();
	}
});
