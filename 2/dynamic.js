/* write your code here ... */
const keys = document.querySelectorAll(".key");
const keySpecial = document.querySelectorAll(".key--special");

document.addEventListener("keydown", (e) => {
	typeChange(e, "key--held");
});

document.addEventListener("keyup", (e) => {
	typeChange(e, "key--selected");
});

function typeChange(e, className) {
	e.preventDefault();

	let currentEl = null;

	if (
		e.code === "ShiftLeft" ||
		e.code === "ShiftRight" ||
		e.code === "ControlLeft" ||
		e.code === "ControlRight" ||
		e.code === "AltLeft" ||
		e.code === "AltRight" ||
		e.code === "Backspace" ||
		e.code === "CapsLock" ||
		e.code === "Tab" ||
		e.code === "Space" ||
		e.code === "Enter" ||
		e.code === "Equal" ||
		e.code === "Minus" ||
		e.code === "Backslash" ||
		e.code === "Slash" ||
		e.code === "Semicolon" ||
		e.code === "Semicolon" ||
		e.code === "Quote" ||
		e.code === "Comma" ||
		e.code === "Period" ||
		e.code === "Backquote" ||
		e.code === "BracketLeft" ||
		e.code === "BracketRight"
	) {
		switch (e.code) {
			case "Space":
				currentEl =
					document.querySelector(".keyboard").lastElementChild.children[3];
				break;
			case "Tab":
				currentEl = document.querySelector(".keyboard").children[1].children[0];
				break;
			case "Backspace":
				currentEl =
					document.querySelector(".keyboard").children[0].lastElementChild;
				break;
			case "Enter":
				currentEl =
					document.querySelector(".keyboard").children[2].lastElementChild;
				break;
			case "CapsLock":
				currentEl =
					document.querySelector(".keyboard").children[2].firstElementChild;
				break;
			case "ShiftLeft":
				currentEl =
					document.querySelector(".keyboard").children[3].firstElementChild;
				break;
			case "ShiftRight":
				currentEl =
					document.querySelector(".keyboard").children[3].lastElementChild;
				break;
			case "AltLeft":
				currentEl =
					document.querySelector(".keyboard").lastElementChild.children[2];
				break;
			case "AltRight":
				currentEl =
					document.querySelector(".keyboard").lastElementChild.children[4];
				break;
			case "ControlLeft":
				currentEl =
					document.querySelector(".keyboard").lastElementChild
						.firstElementChild;
				break;
			case "ControlRight":
				currentEl =
					document.querySelector(".keyboard").lastElementChild.lastElementChild;
				break;
			case "Equal":
				currentEl =
					document.querySelector(".keyboard").firstElementChild.children[12];
				break;
			case "Minus":
				currentEl =
					document.querySelector(".keyboard").firstElementChild.children[11];
				break;
			case "Backslash":
				currentEl =
					document.querySelector(".keyboard").children[1].lastElementChild;
				break;
			case "Slash":
				currentEl =
					document.querySelector(".keyboard").children[3].children[10];
				break;
			case "Semicolon":
				currentEl =
					document.querySelector(".keyboard").children[2].children[10];
				break;
			case "Quote":
				currentEl =
					document.querySelector(".keyboard").children[2].children[11];
				break;
			case "Comma":
				currentEl = document.querySelector(".keyboard").children[3].children[8];
				break;
			case "Period":
				currentEl = document.querySelector(".keyboard").children[3].children[9];
				break;
			case "Backquote":
				currentEl =
					document.querySelector(".keyboard").firstElementChild
						.firstElementChild;
				break;
			case "BracketLeft":
				currentEl =
					document.querySelector(".keyboard").children[1].children[11];

				break;
			case "BracketRight":
				currentEl =
					document.querySelector(".keyboard").children[1].children[12];
				break;
		}
	} else {
		keys.forEach((key) => {
			if (e.code.slice(-1).toUpperCase() === key.textContent) {
				currentEl = key;
			}
		});
	}

	currentEl?.classList?.remove("key--held");
	currentEl?.classList?.add(className);
}
