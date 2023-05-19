const display = document.querySelector(".display input");
const buttons = document.querySelectorAll(".buttons input");

// Select Element for time
const Hours = document.querySelector("#hrs");
const Mins = document.querySelector("#mins");
const Period = document.querySelector("#ampm");

// Select Element to change the theme
const container = document.querySelector(".container");
const buttonsWrapper = document.querySelector("#buttonsWrapper");
const darkMode = document.querySelector("#dark");
const lightMode = document.querySelector("#light");
const navItem = document.querySelector("nav");
const timeText = document.querySelector(".time h1");
const modeBtn = document.querySelector(".modeBtn");
const modeIcon = document.querySelectorAll(".modeIcon");

// Calculator functionality
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		switch (button.value) {
			case "=":
				display.value = display.value.replace(/÷/g, "/");
				display.value = display.value.replace(/×/g, "*");
				display.value = display.value.replace(/−/g, "-");
				display.value = eval(display.value);
				break;
			case "AC":
				display.value = "";
				break;
			case "DEL":
				display.value = display.value.slice(0, -1);
				break;
			default:
				display.value += button.value;
		}
	});
});

const currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

if (hours > 12) {
	hours -= 12;
	Hours.innerText = hours;
	Period.innerText = "PM";
	Mins.innerText = minutes;
} else {
	Hours.innerText = hours;
	Period.innerText = "AM";
	Mins.innerText = minutes;
}

// Event listener to change the theme
darkMode.addEventListener("click", () => {
	darkMode.classList.add("active");
	lightMode.classList.remove("active");
	buttons.forEach((button) => {
		button.classList.remove("light");
	});
	buttonsWrapper.classList.remove("light");
	container.classList.remove("light");
	navItem.classList.remove("light");
	timeText.classList.remove("light");
	modeBtn.classList.remove("light");
	modeIcon.forEach((icon) => {
		icon.classList.remove("light");
	});
	display.classList.remove("light");
});
lightMode.addEventListener("click", () => {
	lightMode.classList.add("active");
	darkMode.classList.remove("active");
	buttons.forEach((button) => {
		button.classList.add("light");
	});
	container.classList.add("light");
	buttonsWrapper.classList.add("light");
	navItem.classList.add("light");
	timeText.classList.add("light");
	modeBtn.classList.add("light");
	modeIcon.forEach((icon) => {
		icon.classList.add("light");
	});
	display.classList.add("light");
});
