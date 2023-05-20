const casesImg = document.querySelectorAll(".images");

casesImg.forEach((img) =>
	img.addEventListener("mouseover", () => {
		const itemImg = img.firstElementChild;
		const caseImg = img.lastElementChild;

		itemImg.classList.remove("hidden");
		caseImg.classList.add("hidden");
	})
);

casesImg.forEach((img) =>
	img.addEventListener("mouseleave", () => {
		const itemImg = img.firstElementChild;
		const caseImg = img.lastElementChild;

		itemImg.classList.add("hidden");
		caseImg.classList.remove("hidden");
	})
);
