const lastDropsBox = document.querySelector(".main__dropsbox");
const color = ["red", "gold", "pink", "red", "red", "purple", "purple", "pink", "pink", "gold", "red", "red", "red", "red", "red"];
const items = [
	"./dist/img/anubis/eyeofhorus.png",
	"./dist/img/knife5050/doppler.png",
	"./dist/img/printstream/deserteagleprintstream.png",
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
];
const itemsName = [
	"M4A4 | Eye of Horus",
	"Karambit | Doppler",
	"Desert eagle | Printstream",
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

];
let id = 0;

const createNewDrop = () => {
	const randomColor = Math.floor(Math.random() * color.length);
	const item = document.createElement("div");
	const itemImg = document.createElement("img");
	const itemText = document.createElement("p");
	item.setAttribute(
		"class",
		`main__dropsbox-item main__dropsbox-item--${color[randomColor]}`
	);
	item.setAttribute("id", id);
	itemImg.setAttribute("class", "main__dropbox-item-img");
	itemImg.setAttribute("src", `${items[randomColor]}`);
	itemImg.setAttribute("alt", `${itemsName[randomColor]}`);
	itemText.setAttribute("class", "main__dropsbox-item-name");
	item.style.order = "-" + id;
	itemText.textContent = itemsName[randomColor];

	item.append(itemImg, itemText);
	lastDropsBox.append(item);

	if (lastDropsBox.childElementCount > 10) {
		lastDropsBox.firstElementChild.remove();
	}

    if(id % 2 === 0) {
        item.style.backgroundColor = "#282e35";
    } else {
        item.style.backgroundColor = "#1d2126";
    }
};

setInterval(() => {
	const randomTime = Math.floor(Math.random() * 10000);
	setTimeout(() => {
		id++;
		createNewDrop();
	}, randomTime);
}, 2500);
