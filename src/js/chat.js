const chatBox = document.querySelector(".main-chat__messages");
let idChat = 0;

const createMsg = () => {
	const chatMsg = document.createElement("div");
	const avatar = document.createElement("img");
	const msg = document.createElement("p");

	avatar.setAttribute("class", "main-chat__avatar");
	avatar.setAttribute("src", "./dist/img/other/coin.png");
	avatar.setAttribute("alt", "Avatar");
	msg.setAttribute("class", "main-chat__player-msg");
	msg.textContent = "Elo";

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

setInterval(() => {
	const randomTime = Math.floor(Math.random() * 10000);
	setTimeout(() => {
		idChat++;
		createMsg();
	}, randomTime);
}, 2500);
