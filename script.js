var scrollheight = document.body.scrollHeight
var backgroundImages = document.getElementsByClassName('background_images')
var windowheight = window.innerheight
var hiddenDiv = document.getElementsByClassName('addContent1')
// var scrollamount = (scrolltop/(scrollheight-windowheight)) * 100

var scrollTest = function() {
	var scrolltop = window.pageYOffset
	backgroundImages[0].style.top = scrolltop * .5 + 'px'
	
	
}

window.addEventListener('scroll', function() {
	requestAnimationFrame(scrollTest)
	
	
	
}, false)

