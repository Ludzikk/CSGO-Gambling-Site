const items = document.querySelectorAll(".chances__list-item");

items.forEach((img) =>
	img.addEventListener("mouseover", () => {
		const price = img.lastElementChild;

		price.classList.remove("hidden");
	})
);

items.forEach((img) =>
	img.addEventListener("mouseleave", () => {
		const price = img.lastElementChild;

		price.classList.add("hidden");
	})
);
