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
// let leftRow = [];
// let midRow = [];
// let rightRow = [];
let rows = [[], [], []]
let speedOfAnim = 0;
let spinning = false;
let winningIcons = 0;
music.volume = 0.25;

const startSlot = () => {
	rows = [[], [], []]
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

	// leftRow.push(oneOne.firstElementChild.textContent);
	// leftRow.push(twoOne.firstElementChild.textContent);
	// leftRow.push(threeOne.firstElementChild.textContent);

    // midRow.push(oneTwo.firstElementChild.textContent);
	// midRow.push(twoTwo.firstElementChild.textContent);
	// midRow.push(threeTwo.firstElementChild.textContent);

    // rightRow.push(oneThree.firstElementChild.textContent);
	// rightRow.push(twoThree.firstElementChild.textContent);
	// rightRow.push(threeThree.firstElementChild.textContent);

	rows[0].push(oneOne.firstElementChild.textContent);
	rows[0].push(twoOne.firstElementChild.textContent);
	rows[0].push(threeOne.firstElementChild.textContent);

    rows[1].push(oneTwo.firstElementChild.textContent);
	rows[1].push(twoTwo.firstElementChild.textContent);
	rows[1].push(threeTwo.firstElementChild.textContent);

    rows[2].push(oneThree.firstElementChild.textContent);
	rows[2].push(twoThree.firstElementChild.textContent);
	rows[2].push(threeThree.firstElementChild.textContent);

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


	if(rows[0].includes(watermelon) && rows[1].includes(watermelon) && rows[2].includes(watermelon)){
		let watermelonCount = 0;
		let winX = -5;

		for(let i = 0; i < rows[0].length; i++) {
			if(rows[0][i] === watermelon){
				watermelonCount++;
				winX += 5;
			}
		}

		for(let i = 0; i < rows[1].length; i++) {
			if(rows[1][i] === watermelon){
				watermelonCount++;
				winX += 5;
			}
		}

		for(let i = 0; i < rows[2].length; i++) {
			if(rows[2][i] === watermelon){
				watermelonCount++;
				winX += 5;
			}
		}
		console.log(`${watermelonCount} ${watermelon} won 1 x${winX}`);
	}

	if(rows[0].includes(apple) && rows[1].includes(apple) && rows[2].includes(apple)){
		let appleCount = 0;
		let winX = 0;

		for(let i = 0; i < rows[0].length; i++) {
			if(rows[0][i] === apple){
				appleCount++;
				winX += 20;
			}
		}

		for(let i = 0; i < rows[1].length; i++) {
			if(rows[1][i] === apple){
				appleCount++;
				winX += 20;
			}
		}

		for(let i = 0; i < rows[2].length; i++) {
			if(rows[2][i] === apple){
				appleCount++;
				winX += 20;
			}
		}
		console.log(`${appleCount} ${apple} won 1 x${winX}`);
	}

	if(rows[0].includes(orange) && rows[1].includes(orange) && rows[2].includes(orange)){
		let orangeCount = 0;
		let winX = 0;

		for(let i = 0; i < rows[0].length; i++) {
			if(rows[0][i] === orange){
				orangeCount++;
				winX += 10;
			}
		}

		for(let i = 0; i < rows[1].length; i++) {
			if(rows[1][i] === orange){
				orangeCount++;
				winX += 10;
			}
		}

		for(let i = 0; i < rows[2].length; i++) {
			if(rows[2][i] === orange){
				orangeCount++;
				winX += 10;
			}
		}
		console.log(`${orangeCount} ${orange} won 1 x${winX}`);
	}

	if(rows[0].includes(banana) && rows[1].includes(banana) && rows[2].includes(banana)){
		let bananaCount = 0;
		let winX = 0;

		for(let i = 0; i < rows[0].length; i++) {
			if(rows[0][i] === banana){
				bananaCount++;
				winX += 50;
			}
		}

		for(let i = 0; i < rows[1].length; i++) {
			if(rows[1][i] === banana){
				bananaCount++;
				winX += 50;
			}
		}

		for(let i = 0; i < rows[2].length; i++) {
			if(rows[2][i] === banana){
				bananaCount++;
				winX += 50;
			}
		}
		console.log(`${bananaCount} ${banana} won 1 x${winX}`);
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

	// music.play();
};

betBtn.addEventListener("click", () => {
	if (spinning === false) {
		spinBox.forEach((slot) => (slot.style.transform = `translate3d(0, 0, 0)`));
		setTimeout(() => {
			startSlot();
		}, 100);
	}
});

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

setTime();
