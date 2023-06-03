const avatarImg = "./dist/img/other/avatar6.gif";
const sendBtn = document.querySelector(".main-chat__button");
const msgInput = document.querySelector(".main-chat__input")

const sendMessage = () => {
    idChat++
	const chatMsg = document.createElement("div");
	const avatar = document.createElement("img");
	const msg = document.createElement("p");

	avatar.setAttribute("class", "main-chat__avatar");
	avatar.setAttribute("src", avatarImg);
	avatar.setAttribute("alt", "Avatar");
	msg.setAttribute("class", "main-chat__player-msg");
	msg.textContent = msgInput.value;
	chatMsg.style.order = "-" + idChat;

	if (idChat % 2 === 0) {
		chatMsg.setAttribute("class", "main-chat__msg");
	} else {
		chatMsg.setAttribute("class", "main-chat__msg main-chat__msg--second");
	}

	chatMsg.append(avatar, msg);
	chatBox.append(chatMsg);
    msgInput.value = ""
};

sendBtn.addEventListener("click", () => {
    if(msgInput.value !== "") {
        sendMessage();
    }
})

document.addEventListener("keydown", (e) => {
    if(e.keyCode === 13 && msgInput.value !== ""){
        sendMessage()
    }
})