const yearText = document.querySelector(".footer__text-year")

const setYear = () => {
    const date = new Date();

    yearText.textContent = date.getFullYear();
}

setYear()