/* write your code here ... */

const crosshair = document.querySelector(".crosshair");
const pistol = document.querySelector(".pistol > img");
document.addEventListener("mousemove", (e) => {
	const x = e.pageX;
	const y = e.pageY;
	const pX = pistol.getBoundingClientRect().x;
	const pY = pistol.getBoundingClientRect().y;
	console.log(pX, x);
	crosshair.style.setProperty("--x", x + "px");
	crosshair.style.setProperty("--y", y + "px");
	const r = Math.asin((pY - y) / (pX - x));
	const deg = r * (180 / Math.PI);
	console.log(deg);
	pistol.style.transform = `rotate(${deg}deg)`;
});

document.addEventListener("click", (e) => {
	const img = document.createElement("img");
	img.src = "./illustrations/bullet.svg";
	img.className = "bullet";
	document.body.appendChild(img);
});
