/* write your code here ... */
let lang = document.documentElement.lang;
let number = 0;
const langBtn = document.querySelector("nav button");
const info = document.querySelector(".info");
const btnList = document.querySelector("ul");
let currentGameButton = document.querySelector(".active");
langBtn.addEventListener("click", (e) => {
	if (lang === "en") {
		lang = "fa";
		document.documentElement.lang = lang;
		document.documentElement.dir = "rtl";
	} else {
		lang = "en";
		document.documentElement.lang = lang;
		document.documentElement.dir = "ltr";
	}
	changeGame(number, lang);
});

btnList.addEventListener("click", (e) => {
	if (e.target.tagName == "BUTTON") {
		if (e.target !== currentGameButton) {
			currentGameButton.classList.remove("active");
			currentGameButton = e.target;
			currentGameButton.classList.add("active");
			switch (currentGameButton.textContent) {
				case "01":
					changeGame(0, lang);
					number = 0;
					break;
				case "02":
					changeGame(1, lang);
					number = 1;
					break;
				case "03":
					changeGame(2, lang);
					number = 2;
					break;
				case "04":
					changeGame(3, lang);
					number = 3;
					break;
			}
		}
	}
});

function changeGame(number, lang) {
	if (lang === "en") {
		fetch("./data/games.json")
			.then((res) => res.json())
			.then((data) => {
				let gameData = data[number];
				info.children[0].textContent = gameData.name;
				document.querySelector(".cover img").src = gameData.image;
				const { backgroundColor, color } = gameData.callToActionButton;
				info.lastElementChild.style.backgroundColor = backgroundColor;
				info.lastElementChild.style.color = color;
				fetch("./languages/en.json")
					.then((res) => res.json())
					.then((data) => {
						info.lastElementChild.textContent = data.GENERAL["CALL_TO_ACTION"];
						info.querySelector("h2").textContent = data.GAMES[number].HEADING;
						info.querySelector("p").textContent =
							data.GAMES[number].DESCRIPTION;
					});
			});
	}
	if (lang === "fa") {
		fetch("./data/games.json")
			.then((res) => res.json())
			.then((data) => {
				let gameData = data[number];
				info.children[0].textContent = gameData.name;
				document.querySelector(".cover img").src = gameData.image;
				const { backgroundColor, color } = gameData.callToActionButton;
				info.lastElementChild.style.backgroundColor = backgroundColor;
				info.lastElementChild.style.color = color;
				fetch("./languages/fa.json")
					.then((res) => res.json())
					.then((data) => {
						info.lastElementChild.textContent = data.GENERAL["CALL_TO_ACTION"];
						info.querySelector("h2").textContent = data.GAMES[number].HEADING;
						info.querySelector("p").textContent =
							data.GAMES[number].DESCRIPTION;
					});
			});
	}
	setToLocalStorage(number, lang);
}

function setToLocalStorage(number, lang) {
	const gameInfo = {
		number,
		lang,
	};
	localStorage.setItem("gameInfo", JSON.stringify(gameInfo));
}

document.addEventListener("DOMContentLoaded", (e) => {
	let gameInfoObj = JSON.parse(localStorage.getItem("gameInfo"));
	if (gameInfoObj === null) {
		changeGame(0, "en");
	} else {
		changeGame(gameInfoObj.number, gameInfoObj.lang);
		if (gameInfoObj.lang === "fa") {
			document.documentElement.lang = "fa";
			document.documentElement.dir = "rtl";
		}
		if (gameInfoObj.lang === "en") {
			document.documentElement.lang = "en";
			document.documentElement.dir = "ltr";
		}
		document.querySelector(".active").classList.remove("active");
		btnList.children[gameInfoObj.number].firstElementChild.classList.add(
			"active"
		);
		number = gameInfoObj.number;
		lang = gameInfoObj.lang;
	}
});
