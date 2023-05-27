const hamburgerBtn = document.querySelector(".hamburger--collapse");
const mobileNav = document.querySelector(".nav__list-mobile");
let active = false;

const showMobileNav = () => {
	switch (active) {
		case false:
			hamburgerBtn.classList.toggle("is-active");
			mobileNav.classList.toggle("show");
			mobileNav.classList.toggle("hide");
			mobileNav.classList.toggle("hidden");
			document.body.classList.toggle("body-hidden");
			active = true;
			break;
		case true:
			hamburgerBtn.classList.toggle("is-active");
			mobileNav.classList.toggle("show");
			mobileNav.classList.toggle("hide");
            document.body.classList.toggle("body-hidden");
			active = false;

			setTimeout(() => {
				mobileNav.classList.toggle("hidden");
			}, 300);
			break;
		default:
			return;
	}
};

hamburgerBtn.addEventListener("click", showMobileNav);
