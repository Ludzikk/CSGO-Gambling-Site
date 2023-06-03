const lastItemDrops = document.querySelector(".main__dropsbox");
const color = [
	"red",
	"gold",
	"pink",
	"pink",
	"red",
	"red",
	"purple",
	"purple",
	"pink",
	"pink",
	"gold",
	"red",
	"red",
	"red",
	"red",
	"red",
	"blue",
	"blue",
	"blue",
	"blue",
	"gold",
	"gold",
];
const items = [
	"./dist/img/anubis/eyeofhorus.png",
	"./dist/img/knife5050/doppler.png",
	"./dist/img/printstream/deserteagleprintstream.png",
	"./dist/img/printstream/uspprintstream.png",
	"./dist/img/printstream/m4a1-sprintstream.png",
	"./dist/img/howl/howl.png",
	"./dist/img/anubis/ramese'sreach.png",
	"./dist/img/anubis/scarabrush.png",
	"./dist/img/anubis/watersofnephthys.png",
	"./dist/img/anubis/apep'scurse.png",
	"./dist/img/knife5050/navaja.png",
	"./dist/img/awp/dragonlore.png",
	"./dist/img/awp/gungnir.png",
	"./dist/img/awp/theprince.png",
	"./dist/img/awp/asimov.png",
	"./dist/img/awp/medusa.png",
	"./dist/img/anubis/blacknile.png",
	"./dist/img/anubis/steeldelta.png",
	"./dist/img/anubis/mummy'srot.png",
	"./dist/img/anubis/coppercoated.png",
	"./dist/img/glove/slingshot.png",
	"./dist/img/glove/marblefade.png",
];
const itemsName = [
	"M4A4 | Eye of Horus",
	"Karambit | Doppler",
	"Desert eagle | Printstream",
	"USP-S | Printstream",
	"M4A1-S | Printstream",
	"M4A4 | Howl",
	"Glock-18 | Ramese's Reach",
	"P90 | ScaraB Rush",
	"Famas | Waters of Nephthys",
	"P250 | Apep's Curse",
	"Navaja | Safari Mesh",
	"AWP | Dragonlore",
	"AWP | Gungnir",
	"AWP | The Prince",
	"AWP | Asimov",
	"AWP | Medusa",
	"AWP | Black Nile",
	"AK-47 | Steel Delta",
	"Tec-9 | Mummy's Rot",
	"MAG-7 | Copper Coated",
	"Sport Gloves | Slingshot",
	"Specialist Gloves | Marble Fade",
];
const colorOfItem = [
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(255, 255, 1, 0.1) 100%",
	"rgba(255, 112, 183, 0.2) 100%",
	"rgba(255, 112, 183, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(125, 50, 255, 0.1) 100%",
	"rgba(125, 50, 255, 0.1) 100%",
	"rgba(255, 112, 183, 0.2) 100%",
	"rgba(255, 112, 183, 0.2) 100%",
	"rgba(255, 255, 1, 0.1) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(222, 76, 65, 0.2) 100%",
	"rgba(75, 138, 255, 0.2) 100%",
	"rgba(75, 138, 255, 0.2) 100%",
	"rgba(75, 138, 255, 0.2) 100%",
	"rgba(75, 138, 255, 0.2) 100%",
	"rgba(255, 255, 1, 0.1) 100%",
	"rgba(255, 255, 1, 0.1) 100%",
];
const itemsPriceArr = [
	"2031",
	"1521",
	"87",
	"120",
	"451",
	"5213",
	"21",
	"12",
	"156",
	"232",
	"98",
	"9521",
	"9123",
	"6231",
	"152",
	"5324",
	"9",
	"4",
	"2",
	"1",
	"1085",
	"463",
];
let id = 0;

const createNewDrop = () => {
	const randomColor = Math.floor(Math.random() * color.length);
	const item = document.createElement("div");
	const itemImg = document.createElement("img");
	const itemPriceBox = document.createElement("div");
	const itemPrice = document.createElement("p");
	const itemText = document.createElement("p");
	const itemPriceIcon = document.createElement("img");
	item.setAttribute(
		"class",
		`main__dropsbox-item main__dropsbox-item--${color[randomColor]}`
	);
	item.setAttribute("id", id);
	itemImg.setAttribute("class", "main__dropsbox-item-img");
	itemImg.setAttribute("src", `${items[randomColor]}`);
	itemImg.setAttribute("alt", `${itemsName[randomColor]}`);
	itemText.setAttribute("class", "main__dropsbox-item-name");
	itemPrice.setAttribute("class", "main__dropsbox-item-price");
	itemPriceIcon.setAttribute("class", "main__dropsbox-item-pricebox-img");
	itemPriceIcon.setAttribute("src", "./dist/img/other/coin.png");
	itemPriceIcon.setAttribute("alt", "Coin Icon");
	itemPriceBox.setAttribute("class", "main__dropsbox-item-pricebox hidden");
	itemPrice.textContent = itemsPriceArr[randomColor];
	item.style.order = "-" + id;
	itemText.textContent = itemsName[randomColor];
	itemPriceBox.append(itemPrice, itemPriceIcon);
	item.append(itemImg, itemText, itemPriceBox);
	lastItemDrops.append(item);

	if (lastItemDrops.childElementCount > 10) {
		lastItemDrops.firstElementChild.remove();
	}

	if (id % 2 === 0) {
		item.style.background = `linear-gradient(90deg, #1d2126 25%, ${colorOfItem[randomColor]}`;
	} else {
		item.style.background = `linear-gradient(90deg, #282e35 25%, ${colorOfItem[randomColor]}`;
	}

	item.addEventListener("mouseover", () => {
		itemPriceBox.classList.remove("hidden");
	});

	item.addEventListener("mouseleave", () => {
		itemPriceBox.classList.add("hidden");
	});
};

setInterval(() => {
	const randomTime = Math.floor(Math.random() * 10000);
	setTimeout(() => {
		id++;
		createNewDrop();
	}, randomTime);
}, 2500);

const createRandomDropsOnStart = () => {
	for (let i = 0; i < 10; i++) {
		id++;
		const randomColor = Math.floor(Math.random() * color.length);
		const item = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemPriceBox = document.createElement("div");
		const itemPrice = document.createElement("p");
		const itemText = document.createElement("p");
		const itemPriceIcon = document.createElement("img");
		item.setAttribute(
			"class",
			`main__dropsbox-item main__dropsbox-item--${color[randomColor]}`
		);
		item.setAttribute("id", id);
		itemImg.setAttribute("class", "main__dropsbox-item-img");
		itemImg.setAttribute("src", `${items[randomColor]}`);
		itemImg.setAttribute("alt", `${itemsName[randomColor]}`);
		itemText.setAttribute("class", "main__dropsbox-item-name");
		itemPrice.setAttribute("class", "main__dropsbox-item-price");
		itemPriceIcon.setAttribute("class", "main__dropsbox-item-pricebox-img");
		itemPriceIcon.setAttribute("src", "./dist/img/other/coin.png");
		itemPriceIcon.setAttribute("alt", "Coin Icon");
		itemPriceBox.setAttribute("class", "main__dropsbox-item-pricebox hidden");
		itemPrice.textContent = itemsPriceArr[randomColor];
		item.style.order = "-" + id;
		itemText.textContent = itemsName[randomColor];
		itemPriceBox.append(itemPrice, itemPriceIcon);
		item.append(itemImg, itemText, itemPriceBox);
		lastItemDrops.append(item);

		if (lastItemDrops.childElementCount > 10) {
			lastItemDrops.firstElementChild.remove();
		}

		if (id % 2 === 0) {
			item.style.background = `linear-gradient(90deg, #1d2126 25%, ${colorOfItem[randomColor]}`;
		} else {
			item.style.background = `linear-gradient(90deg, #282e35 25%, ${colorOfItem[randomColor]}`;
		}

		item.addEventListener("mouseover", () => {
			itemPriceBox.classList.remove("hidden");
		});

		item.addEventListener("mouseleave", () => {
			itemPriceBox.classList.add("hidden");
		});
	}
};

createRandomDropsOnStart();
