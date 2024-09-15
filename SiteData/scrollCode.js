let isMobile = /Android|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)


function MouseUpped(){
	document.getElementById('overlay').classList.remove('CatPop')
}


function MouseDown(){
	if (document.getElementById('overlay').classList.length === 0) { document.getElementById('overlay').classList.add('CatPop') }
}

function ScrollCode(){
	let Divs = document.querySelectorAll('.InformationBlock')
	let previousScroll = 0;

		let screenHeight = window.innerHeight+30;

		var scrollPosition = window.scrollY || document.documentElement.scrollTop;
		let scrollingDown = previousScroll < scrollPosition;

		
		



		
		
		let heights = Array(Divs.length).fill(0)
		for (let i = 0; i < Divs.length; i++){
			heights[i] = Divs[i].offsetHeight + Divs[i].offsetTop
		}
		for (let i = 0; i < heights.length; i++){
			//
			if ((heights[i]-Divs[i].offsetHeight) > screenHeight+scrollPosition){
				// Блоки которые ниже поле зрения 
				Divs[i].style.opacity = "0.4"
				Divs[i].style.scale = "0.93"
				Divs[i].style.filter = "blur(1px)"
				
				Divs[i].style.paddingTop = "50px"
				Divs[i].style.paddingBottom = "0px"
			} else {
				if (heights[i] < scrollPosition){
					// Блоки которые выше поле зрения
					Divs[i].style.opacity = "0.4"
					Divs[i].style.scale = "0.94"
					Divs[i].style.filter = "blur(1px)"
				} else {
					//Блоки которые в поле зрения
					Divs[i].style.filter = "blur(0px)"
					Divs[i].style.opacity = "1"
					Divs[i].style.scale = "1"
					Divs[i].style.paddingTop = "10px"
					Divs[i].style.paddingBottom = "10px"
				}
			}
		}
		
		previousScroll = scrollPosition
		
}


window.onload = function(){
	window.onscroll = function() {
		ScrollCode()
	};
}

ScrollCode()