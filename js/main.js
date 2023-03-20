//for Sticky Add
const observer = new IntersectionObserver(
	(entries) => {
		const navbar = document.getElementById('sticky-menubar');
		const ent = entries[0];
		!ent.isIntersecting
			? navbar.classList.add("sticky")
			: navbar.classList.remove("sticky");
	}, 
	{ 
		root: null, 
		threshold: 0,
	}
);

const heroTextBox = document.querySelector(".header");

observer.observe(heroTextBox);

//for mobile menu
function openNav() {
	document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
	document.getElementById('myNav').style.width = "0%";
}