const chatBox = document.querySelector(".main-chat__messages");
const randomAvatarArr = [
	"./dist/img/other/avatar1.jpg",
	"./dist/img/other/avatar2.jpg",
	"./dist/img/other/avatar3.jpg",
	"./dist/img/other/avatar4.gif",
	"./dist/img/other/avatar5.png",
];
const randomMsgArr = [
	"No elo",
	"Polska gurom",
	"Ale essa",
	"Double Green",
	"120kg na klate",
	"ez",
	"Get good",
];
let idChat = 0;

const createMsg = () => {
	const randomAvatarNum = Math.floor(Math.random() * randomAvatarArr.length);
	const randomMsgNum = Math.floor(Math.random() * randomMsgArr.length);
	const chatMsg = document.createElement("div");
	const avatar = document.createElement("img");
	const msg = document.createElement("p");

	avatar.setAttribute("class", "main-chat__avatar");
	avatar.setAttribute("src", `${randomAvatarArr[randomAvatarNum]}`);
	avatar.setAttribute("alt", "Avatar");
	msg.setAttribute("class", "main-chat__player-msg");
	msg.textContent = randomMsgArr[randomMsgNum];
	chatMsg.style.order = "-" + idChat;

	if (idChat % 2 === 0) {
		chatMsg.setAttribute("class", "main-chat__msg");
	} else {
		chatMsg.setAttribute("class", "main-chat__msg main-chat__msg--second");
	}

	chatMsg.append(avatar, msg);
	chatBox.append(chatMsg);

	if (chatBox.childElementCount > 20) {
		chatBox.firstElementChild.remove();
	}
};

const createRandomMessagesOnStart = () => {
	const randomNumberOfMessages = Math.floor(Math.random()*8)

	for (let i = randomNumberOfMessages; i < 10; i++) {
		idChat++
		const randomAvatarNum = Math.floor(Math.random() * randomAvatarArr.length);
		const randomMsgNum = Math.floor(Math.random() * randomMsgArr.length);
		const chatMsg = document.createElement("div");
		const avatar = document.createElement("img");
		const msg = document.createElement("p");

		avatar.setAttribute("class", "main-chat__avatar");
		avatar.setAttribute("src", `${randomAvatarArr[randomAvatarNum]}`);
		avatar.setAttribute("alt", "Avatar");
		msg.setAttribute("class", "main-chat__player-msg");
		msg.textContent = randomMsgArr[randomMsgNum];
		chatMsg.style.order = "-" + idChat;

		if (idChat % 2 === 0) {
			chatMsg.setAttribute("class", "main-chat__msg");
		} else {
			chatMsg.setAttribute("class", "main-chat__msg main-chat__msg--second");
		}

		chatMsg.append(avatar, msg);
		chatBox.append(chatMsg);
	}
};

setInterval(() => {
	const randomTime = Math.floor(Math.random() * 10000);
	setTimeout(() => {
		idChat++;
		createMsg();
	}, randomTime);
}, 2500);

createRandomMessagesOnStart();
