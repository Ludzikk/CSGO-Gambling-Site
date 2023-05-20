const rouletteDiv = document.querySelector(".main-roulette__list");
const rouletteItems = document.querySelectorAll(".main-roulette__list-item");
let winningColor;
let elem = document.querySelector(".main-roulette__arrow");
let elemOffset = elem.getBoundingClientRect();
let middleLeft = elemOffset.left;
let middleRight = elemOffset.right;
const lastDrops = document.querySelector(".main-roulette__lastdrops");

const spinRoulette = () => {
	const randomNum = Math.floor(Math.random() * 25000 + 5000);

	rouletteDiv.classList.add("spin");
	rouletteDiv.style.transform = `translate3d(-${randomNum}px, 0, 0)`;
};

setInterval(() => {
	spinRoulette();

	setTimeout(() => {
		const lastDropsChildCount = lastDrops.childElementCount;
		
		rouletteItems.forEach((item) => {
			let pos = item.getBoundingClientRect();

			if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--red")
			) {
				winningColor = "red";

				const lastDropItem = document.createElement("div");
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--red"
				);

				if (lastDropsChildCount === 6) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}
			} else if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--black")
			) {
				winningColor = "black";

				const lastDropItem = document.createElement("div");
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--black"
				);

				if (lastDropsChildCount === 6) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}
			} else if (
				middleLeft >= pos.left &&
				middleRight <= pos.right &&
				item.classList.contains("main-roulette__list-item--green")
			) {
				winningColor = "green";

				const lastDropItem = document.createElement("div");
				lastDropItem.setAttribute(
					"class",
					"main-roulette__lastdrops-item main-roulette__lastdrops-item--green"
				);

				if (lastDropsChildCount === 6) {
					lastDrops.firstElementChild.remove();
					lastDrops.append(lastDropItem);
				} else {
					lastDrops.append(lastDropItem);
				}
			}
		});
	}, 6000);

	setTimeout(() => {
		rouletteDiv.classList.remove("spin");
		rouletteDiv.style.transform = `translate3d(0, 0, 0)`;
	}, 9900);
}, 10000);
