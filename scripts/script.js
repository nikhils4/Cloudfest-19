
	window.addEventListener('scroll', () => {
		document.getElementById('nav-logo').style.visibility = "visible";
		document.getElementById("nav-top-one").style.borderBottom = "2px solid gray"
	})

window.onload = () => {
	let id = [
		"home",
		"sponsors",
		"speakers",
		"tech-used",
		"contact-us"
	]
	let colors = [
		"#FE524D",
		"#4E96FC",
		"#FFC334",
		"#34AD6D",
		"#4E96FC"
	]

	id.forEach( e => {
		document.getElementById(e).addEventListener( 'click', (event) => {
			document.getElementById(e).style.borderBottom = "6px solid " +  colors[Number(event.target.getAttribute("color"))]
			document.getElementById(e).childNodes[1].style.color = colors[Number(event.target.getAttribute("color"))]
			id.forEach( ele => {
				if (ele != e){
					document.getElementById(ele).style.borderBottom = "6px solid transparent"; 
					document.getElementById(ele).childNodes[1].style.color = "gray"
				}
			})
		})
	})


}